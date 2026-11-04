#!/usr/bin/env node
// cipher.js — password-based text encoder/decoder (AES-256-GCM + scrypt).
// No dependencies. Output format is compatible with the "Selection Cipher" VS Code extension:
//   "ENC1:" + base64( salt(16) | iv(12) | authTag(16) | ciphertext )
//
// Usage:
//   node cipher.js encode [file] [options]
//   node cipher.js decode [file] [options]
//
// Input  (pick one): a file path, -t "text", or piped stdin.
// Output: stdout by default, -o <file> to write a file, or -i to overwrite the input file.
// Password: prompted (hidden) by default, or taken from the CIPHER_PASSWORD env var,
//           or -p <password> (visible in shell history — avoid for real secrets).
//
// Decoding replaces every ENC1:... block in the input and leaves other text untouched,
// so files where only some parts were encoded decode correctly.

'use strict';
const crypto = require('crypto');
const fs = require('fs');

const PREFIX = 'ENC1:';
const SALT_LEN = 16, IV_LEN = 12, TAG_LEN = 16;
const SCRYPT = { N: 1 << 15, r: 8, p: 1, maxmem: 64 * 1024 * 1024 };
const TOKEN_RE = /ENC1:[A-Za-z0-9+/]+={0,2}/g; // encoded blocks are always a single line

function deriveKey(password, salt) {
  return crypto.scryptSync(password.normalize('NFC'), salt, 32, SCRYPT);
}

function encrypt(plain, password) {
  const salt = crypto.randomBytes(SALT_LEN);
  const iv = crypto.randomBytes(IV_LEN);
  const cipher = crypto.createCipheriv('aes-256-gcm', deriveKey(password, salt), iv);
  const ct = Buffer.concat([cipher.update(plain, 'utf8'), cipher.final()]);
  return PREFIX + Buffer.concat([salt, iv, cipher.getAuthTag(), ct]).toString('base64');
}

function decrypt(token, password) {
  const t = token.trim();
  if (!t.startsWith(PREFIX)) throw new Error('Not encoded text (missing ENC1: prefix).');
  const buf = Buffer.from(t.slice(PREFIX.length).replace(/\s+/g, ''), 'base64');
  if (buf.length < SALT_LEN + IV_LEN + TAG_LEN) throw new Error('Encoded text is truncated or corrupted.');
  const salt = buf.subarray(0, SALT_LEN);
  const iv = buf.subarray(SALT_LEN, SALT_LEN + IV_LEN);
  const tag = buf.subarray(SALT_LEN + IV_LEN, SALT_LEN + IV_LEN + TAG_LEN);
  const ct = buf.subarray(SALT_LEN + IV_LEN + TAG_LEN);
  const decipher = crypto.createDecipheriv('aes-256-gcm', deriveKey(password, salt), iv);
  decipher.setAuthTag(tag);
  try {
    return Buffer.concat([decipher.update(ct), decipher.final()]).toString('utf8');
  } catch {
    throw new Error('Wrong password, or the encoded text was modified.');
  }
}

/** Decode every ENC1:... block inside a larger text; other text is kept as-is. */
function decryptAll(text, password) {
  let count = 0;
  const out = text.replace(TOKEN_RE, m => { count++; return decrypt(m, password); });
  if (count === 0) throw new Error('No ENC1: encoded text found in the input.');
  return { text: out, count };
}

// ---------- CLI ----------

function usage(code = 0) {
  const msg = `
Usage:
  node cipher.js encode [file] [options]
  node cipher.js decode [file] [options]

Options:
  -t, --text <text>      Use this text as input instead of a file/stdin
  -o, --out <file>       Write result to a file (default: print to stdout)
  -i, --in-place         Overwrite the input file with the result
  -p, --password <pw>    Password (prefer the prompt or CIPHER_PASSWORD env var)
  -h, --help             Show this help

Examples:
  node cipher.js encode notes.txt -o notes.enc
  node cipher.js decode notes.enc
  node cipher.js encode -t "secret message"
  echo ENC1:... | node cipher.js decode
`;
  (code ? process.stderr : process.stdout).write(msg);
  process.exit(code);
}

function parseArgs(argv) {
  const opts = { mode: null, file: null, text: null, out: null, inPlace: false, password: null };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    const next = () => {
      if (i + 1 >= argv.length) fail(`Missing value for ${a}`);
      return argv[++i];
    };
    if (a === '-h' || a === '--help') usage(0);
    else if (a === '-t' || a === '--text') opts.text = next();
    else if (a === '-o' || a === '--out') opts.out = next();
    else if (a === '-i' || a === '--in-place') opts.inPlace = true;
    else if (a === '-p' || a === '--password') opts.password = next();
    else if (a.startsWith('-')) fail(`Unknown option: ${a}`);
    else if (!opts.mode) opts.mode = a;
    else if (!opts.file) opts.file = a;
    else fail(`Unexpected argument: ${a}`);
  }
  if (opts.mode === 'enc') opts.mode = 'encode';
  if (opts.mode === 'dec') opts.mode = 'decode';
  if (opts.mode !== 'encode' && opts.mode !== 'decode') usage(1);
  if (opts.text !== null && opts.file) fail('Use either a file or --text, not both.');
  if (opts.inPlace && !opts.file) fail('--in-place needs an input file.');
  if (opts.inPlace && opts.out) fail('Use either --in-place or --out, not both.');
  return opts;
}

function fail(msg) {
  process.stderr.write(`Error: ${msg}\n`);
  process.exit(1);
}

function readStdin() {
  return new Promise((resolve, reject) => {
    const chunks = [];
    process.stdin.on('data', c => chunks.push(c));
    process.stdin.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    process.stdin.on('error', reject);
  });
}

/** Prompt on the terminal without echoing what is typed. */
function promptHidden(question) {
  return new Promise((resolve, reject) => {
    const stdin = process.stdin;
    if (!stdin.isTTY) {
      reject(new Error('No terminal for the password prompt. Set CIPHER_PASSWORD or use -p.'));
      return;
    }
    process.stderr.write(question);
    let pw = '';
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding('utf8');
    const onData = chunk => {
      for (const ch of chunk) {
        if (ch === '\r' || ch === '\n') {
          stdin.setRawMode(false); stdin.pause(); stdin.removeListener('data', onData);
          process.stderr.write('\n');
          resolve(pw);
          return;
        } else if (ch === '\u0003') { // Ctrl+C
          stdin.setRawMode(false);
          process.stderr.write('\n');
          process.exit(130);
        } else if (ch === '\u0008' || ch === '\u007f') { // Backspace
          pw = [...pw].slice(0, -1).join('');
        } else {
          pw += ch;
        }
      }
    };
    stdin.on('data', onData);
  });
}

async function getPassword(opts, confirm) {
  if (opts.password) return opts.password;
  if (process.env.CIPHER_PASSWORD) return process.env.CIPHER_PASSWORD;
  const pw = await promptHidden('Password: ');
  if (!pw) fail('Password cannot be empty.');
  if (confirm) {
    const again = await promptHidden('Confirm password: ');
    if (again !== pw) fail('Passwords do not match.');
  }
  return pw;
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));

  let input;
  if (opts.text !== null) input = opts.text;
  else if (opts.file) {
    if (!fs.existsSync(opts.file)) fail(`File not found: ${opts.file}`);
    input = fs.readFileSync(opts.file, 'utf8');
  } else if (!process.stdin.isTTY) input = await readStdin();
  else fail('No input. Give a file, use --text, or pipe text in.');

  // Read the password after the input, so piped stdin isn't confused with the prompt.
  const password = await getPassword(opts, opts.mode === 'encode');

  let result, info;
  if (opts.mode === 'encode') {
    if (/^\s*ENC1:/.test(input)) fail('Input is already encoded.');
    result = encrypt(input, password);
    info = 'Encoded';
  } else {
    const r = decryptAll(input, password);
    result = r.text;
    info = `Decoded ${r.count} block(s)`;
  }

  const target = opts.inPlace ? opts.file : opts.out;
  if (target) {
    fs.writeFileSync(target, result, 'utf8');
    process.stderr.write(`${info} -> ${target}\n`);
  } else {
    process.stdout.write(result + (opts.mode === 'encode' ? '\n' : ''));
  }
}

if (require.main === module) {
  main().catch(e => fail(e.message));
}

module.exports = { encrypt, decrypt, decryptAll };
