"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";

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
          className="absolute inset-0 bg-[linear-gradient(115deg,rgba(8,8,10,0.9)_0%,rgba(8,8,10,0.58)_45%,rgba(8,8,10,0.42)_100%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,10,0.45)_0%,transparent_38%,rgba(8,8,10,0.55)_100%)]"
          aria-hidden
        />
        <div className="noise" />

        <Header variant="overlay" />

        <div className="relative z-10 flex flex-1 flex-col justify-center px-6 md:px-12 lg:px-16 pt-24 pb-16">
          <div className="max-w-3xl">
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
              className="font-bold tracking-tight text-[clamp(3rem,9vw,6.5rem)] leading-[0.9]"
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
              className="mt-6 max-w-xl text-lg md:text-[1.35rem] text-white/85 leading-relaxed"
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
              className="mt-9 flex flex-wrap gap-3"
            >
              <a href="#work" className="btn-primary">
                View work
                <span aria-hidden>↗</span>
              </a>
              <a href="/work" className="btn-ghost">
                All projects
                <span
                  aria-hidden
                  className="inline-flex size-6 items-center justify-center rounded-full border border-white/50 text-[0.65rem]"
                >
                  →
                </span>
              </a>
            </motion.div>
          </div>

          <motion.a
            href="#work"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/45 hover:text-white/80 transition-colors"
            aria-label="Scroll to work"
          >
            <span className="text-[0.65rem] font-semibold tracking-[0.18em] uppercase">
              Scroll
            </span>
            <span className="scroll-cue text-lg leading-none" aria-hidden>
              ↓
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
