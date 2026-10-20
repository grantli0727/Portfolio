import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "projects");

const sites = [
  { id: "askjenna", url: "https://askjenna.ai" },
  { id: "mywinetravels", url: "https://mywinetravels.ai" },
  { id: "clickfree", url: "https://getclickfreenow.com" },
  { id: "legacywill", url: "https://getlegacywill.com" },
  { id: "lifescapsule", url: "https://lifescapsule.com" },
  { id: "crygodi", url: "https://crygodi.com" },
  { id: "authenticitynpurpose", url: "https://authenticitynpurpose.com" },
  { id: "data-w", url: "https://data-w.com" },
];

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});

for (const site of sites) {
  const page = await context.newPage();
  const outPath = path.join(outDir, `${site.id}.jpg`);
  console.log(`Capturing ${site.url}...`);
  try {
    await page.goto(site.url, { waitUntil: "domcontentloaded", timeout: 45000 });
    await page.waitForTimeout(2500);
    await page.screenshot({
      path: outPath,
      type: "jpeg",
      quality: 82,
      clip: { x: 0, y: 0, width: 1440, height: 900 },
    });
    console.log(`  ✓ ${site.id}.jpg`);
  } catch (err) {
    console.error(`  ✗ ${site.id}: ${err.message}`);
  } finally {
    await page.close();
  }
}

await browser.close();
console.log("Done.");
