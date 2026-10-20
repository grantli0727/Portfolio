"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Header } from "@/components/Header";

const stats = [
  { value: "7+", label: "Years shipping" },
  { value: "3", label: "Top-tier companies" },
  { value: "20+", label: "Production releases" },
] as const;

const CODE_LINES = [
  { html: `<span class="kw">from</span> pgvector <span class="kw">import</span> Index` },
  { html: `<span class="kw">from</span> app.llm <span class="kw">import</span> ground, answer, cite` },
  { html: `<span class="kw">from</span> app.eval <span class="kw">import</span> load_set, score` },
  { html: `` },
  { html: `<span class="kw">def</span> <span class="fn">evaluate</span>(questions, k=<span class="num">8</span>):` },
  { html: `    hits = <span class="num">0</span>` },
  { html: `    <span class="kw">for</span> q <span class="kw">in</span> questions:` },
  { html: `        ctx = Index.search(q, k=k)` },
  { html: `        out = answer(q, ground(ctx))` },
  { html: `        hits += <span class="num">1</span> <span class="kw">if</span> cite(out) <span class="kw">else</span> <span class="num">0</span>` },
  { html: `    <span class="kw">return</span> hits / len(questions)` },
  { html: `` },
  { html: `<span class="kw">if</span> __name__ == <span class="str">"__main__"</span>:` },
  { html: `    qs = load_set(<span class="str">"eval/300q.json"</span>)` },
  { html: `    acc = evaluate(qs)` },
  { html: `    print(f<span class="str">"accuracy={acc:.2f}"</span>)` },
  { html: `    <span class="cmt"># baseline 0.72 → grounded 0.94</span>` },
] as const;

const TERMINAL_LINES = [
  { text: "$ python rag_eval.py", tone: "cmd" as const },
  { text: "loading eval set… 300 questions", tone: "dim" as const },
  { text: "retrieving + grounding…", tone: "dim" as const },
  { text: "accuracy=0.94  ✓  (+22pts vs baseline)", tone: "ok" as const },
];

function highlightPlain(line: string) {
  return line
    .replace(
      /<span class="(\w+)">([^<]*)<\/span>/g,
      (_, cls, text) => {
        const map: Record<string, string> = {
          kw: "text-[#c792ea]",
          fn: "text-[#ffcb6b]",
          num: "text-[#f78c6c]",
          str: "text-[#c3e88d]",
          cmt: "text-[#7fbf7f]",
        };
        return `<span class="${map[cls] ?? ""}">${text}</span>`;
      }
    );
}

function CodeWindow() {
  const reduceMotion = useReducedMotion();
  const [typedChars, setTypedChars] = useState(0);
  const [phase, setPhase] = useState<"typing" | "running" | "done">("typing");
  const [termIndex, setTermIndex] = useState(0);
  const [accuracy, setAccuracy] = useState(0.72);

  const fullText = CODE_LINES.map((l) =>
    l.html.replace(/<[^>]+>/g, "")
  ).join("\n");

  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (reduceMotion) {
      setTypedChars(fullText.length);
      setPhase("done");
      setTermIndex(TERMINAL_LINES.length);
      setAccuracy(0.94);
      return;
    }

    setTypedChars(0);
    setPhase("typing");
    setTermIndex(0);
    setAccuracy(0.72);

    let i = 0;
    const typeId = window.setInterval(() => {
      i += 1;
      setTypedChars(i);
      if (i >= fullText.length) {
        window.clearInterval(typeId);
        setPhase("running");
      }
    }, 12);

    return () => window.clearInterval(typeId);
  }, [fullText.length, reduceMotion, cycle]);

  useEffect(() => {
    if (phase !== "running" || reduceMotion) return;

    let step = 0;
    const runId = window.setInterval(() => {
      step += 1;
      setTermIndex(step);
      if (step >= TERMINAL_LINES.length) {
        window.clearInterval(runId);
        setPhase("done");
      }
    }, 650);

    return () => window.clearInterval(runId);
  }, [phase, reduceMotion]);

  useEffect(() => {
    if (phase !== "done" || reduceMotion) return;

    const start = performance.now();
    const from = 0.72;
    const to = 0.94;
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / 900);
      const eased = 1 - Math.pow(1 - t, 3);
      setAccuracy(from + (to - from) * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const restart = window.setTimeout(() => setCycle((c) => c + 1), 4200);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(restart);
    };
  }, [phase, reduceMotion]);

  // Build visible source from typed character count across plain lines
  let remaining = typedChars;
  const visibleLines = CODE_LINES.map((line) => {
    const plain = line.html.replace(/<[^>]+>/g, "");
    if (remaining <= 0) return { show: false, html: "", caret: false };
    if (remaining >= plain.length) {
      remaining -= plain.length + 1; // +1 newline
      return { show: true, html: highlightPlain(line.html), caret: false };
    }
    const partial = plain.slice(0, remaining);
    remaining = 0;
    // Show partial as plain (no nested tags mid-span) for simplicity
    return {
      show: true,
      html: partial
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;"),
      caret: phase === "typing",
    };
  });

  return (
    <div className="relative w-full max-w-none ml-auto rounded-2xl md:rounded-[1.35rem] overflow-hidden border border-white/12 bg-[#0e1016]/94 backdrop-blur-md shadow-[0_32px_90px_rgba(0,0,0,0.5)]">
      <div className="flex items-center gap-2 px-4 py-3.5 border-b border-white/10 bg-white/[0.03]">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" aria-hidden />
        <span className="size-2.5 rounded-full bg-[#febc2e]" aria-hidden />
        <span className="size-2.5 rounded-full bg-[#28c840]" aria-hidden />
        <span className="flex-1 text-center text-[0.7rem] font-medium tracking-wide text-white/40">
          rag_eval.py
        </span>
        <span
          className={`text-[0.65rem] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${
            phase === "typing"
              ? "text-white/45 bg-white/5"
              : phase === "running"
                ? "text-[#febc2e] bg-[#febc2e]/15"
                : "text-[#28c840] bg-[#28c840]/15"
          }`}
        >
          {phase === "typing" ? "typing" : phase === "running" ? "running" : "done"}
        </span>
      </div>

      <div className="grid lg:grid-rows-[1fr_auto]">
        <pre className="px-5 py-5 min-h-[280px] md:min-h-[320px] text-[0.8rem] md:text-[0.88rem] leading-[1.75] font-mono overflow-hidden text-white/85">
          <code>
            {visibleLines.map((line, idx) =>
              line.show ? (
                <span key={idx} className="block">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: line.html || "&nbsp;",
                    }}
                  />
                  {line.caret && (
                    <span className="inline-block w-[0.55ch] h-[1.1em] align-[-0.15em] ml-0.5 bg-brand animate-pulse" />
                  )}
                </span>
              ) : null
            )}
          </code>
        </pre>

        <div className="border-t border-white/10 bg-black/35 px-5 py-4 font-mono text-[0.78rem] md:text-[0.84rem] min-h-[7.5rem]">
          <AnimatePresence mode="popLayout">
            {TERMINAL_LINES.slice(0, termIndex).map((line, i) => (
              <motion.p
                key={`${line.text}-${i}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className={
                  line.tone === "cmd"
                    ? "text-white/90"
                    : line.tone === "ok"
                      ? "text-[#7fbf7f] font-medium"
                      : "text-white/45"
                }
              >
                {line.tone === "ok"
                  ? `accuracy=${accuracy.toFixed(2)}  ✓  (+22pts vs baseline)`
                  : line.text}
              </motion.p>
            ))}
          </AnimatePresence>
          {phase === "running" && termIndex < TERMINAL_LINES.length && (
            <span className="inline-block mt-1 size-2 rounded-full bg-brand animate-pulse" />
          )}
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="flex h-dvh min-h-[100svh] flex-col bg-white overflow-hidden pt-3 px-3 pb-3 md:pt-4 md:px-4 md:pb-4 lg:pt-5 lg:px-5"
    >
      <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-[1.5rem] md:rounded-[2.25rem] lg:rounded-[2.75rem] text-white shadow-[0_24px_70px_rgba(0,0,0,0.14)]">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/hero/workspace.jpg"
            alt=""
            fill
            priority
            className="object-cover object-[center_28%]"
            sizes="100vw"
          />
        </motion.div>

        <div
          className="absolute inset-0 bg-[linear-gradient(115deg,rgba(8,8,10,0.92)_0%,rgba(8,8,10,0.72)_48%,rgba(8,8,10,0.55)_100%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,10,0.5)_0%,transparent_40%,rgba(8,8,10,0.6)_100%)]"
          aria-hidden
        />
        <div className="noise" />

        <Header variant="overlay" />

        <div className="relative z-10 flex flex-1 flex-col justify-center px-6 md:px-10 lg:px-14 pt-24 pb-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-5">
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="text-xs md:text-sm font-semibold tracking-[0.22em] uppercase text-white/55 mb-5"
              >
                Senior Software Engineer · New York
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-bold tracking-tight text-[clamp(2.5rem,7vw,5.25rem)] leading-[0.9]"
              >
                Grant <span className="text-brand">Li.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.65,
                  delay: 0.14,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-6 max-w-md text-base md:text-lg text-white/85 leading-relaxed"
              >
                AI products, reliable backends, and Next.js interfaces — from
                Pinterest, OpenSea, and Facebook to live launches.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.24,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <a href="#work" className="btn-primary">
                  View work
                  <span aria-hidden>→</span>
                </a>
                <a href="/work" className="btn-ghost">
                  All projects
                  <span aria-hidden>→</span>
                </a>
              </motion.div>

              <motion.dl
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.34,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-10 flex flex-wrap gap-8 md:gap-10"
              >
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <span className="block text-3xl md:text-4xl font-bold tracking-tight tabular-nums">
                        {stat.value}
                      </span>
                      <span className="mt-1.5 block text-[0.65rem] md:text-xs font-semibold tracking-[0.16em] uppercase text-white/45">
                        {stat.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </motion.dl>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.75,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="hidden lg:block lg:col-span-7"
              aria-hidden
            >
              <CodeWindow />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
