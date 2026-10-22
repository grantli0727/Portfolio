"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { credentials, profile } from "@/data/content";

const focuses = [
  {
    title: "AI & LLM",
    body: "RAG, agents, evals, and guardrails that stay grounded in real answers.",
  },
  {
    title: "Backend",
    body: "Python / FastAPI, Node.js, and TypeScript systems built for AWS at scale.",
  },
  {
    title: "Frontend",
    body: "Fast, accessible Next.js — SSR, streaming, and measurable UX.",
  },
  {
    title: "Collaboration",
    body: "Clear partnership with product, design, and non-technical stakeholders.",
  },
];

const companies = ["Pinterest", "OpenSea", "Facebook"];

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="container-page relative">
        <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2.25rem] bg-muted-bg">
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-1/2 hidden lg:block bg-[radial-gradient(ellipse_80%_70%_at_100%_0%,rgba(233,29,37,0.08),transparent_60%)]"
            aria-hidden
          />

          <div className="relative grid lg:grid-cols-12 gap-10 lg:gap-14 items-start px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 lg:sticky lg:top-28"
            >
              <div className="mb-8 flex items-center gap-4">
                <div className="relative size-28 md:size-32 shrink-0 overflow-hidden rounded-full ring-[3px] ring-brand/25 shadow-[0_12px_40px_rgba(233,29,37,0.18)]">
                  <Image
                    src={profile.avatar}
                    alt={profile.name}
                    fill
                    className="object-cover object-top"
                    sizes="128px"
                    priority
                  />
                </div>
                <div>
                  <p className="section-label mb-1.5 !gap-2">About</p>
                  <p className="text-sm font-semibold tracking-tight text-foreground/70">
                    {profile.name}
                  </p>
                  <p className="text-xs text-muted mt-0.5">{profile.title}</p>
                </div>
              </div>
              <h2 className="text-3xl md:text-[2.75rem] lg:text-5xl font-bold tracking-tight leading-[1.08]">
                Engineer who ships AI that people trust
              </h2>

              <ul
                className="mt-10 flex flex-wrap items-center gap-x-0 gap-y-2"
                aria-label="Companies"
              >
                {companies.map((company, i) => (
                  <li key={company} className="flex items-center">
                    {i > 0 && (
                      <span
                        className="mx-3 h-4 w-px bg-foreground/15"
                        aria-hidden
                      />
                    )}
                    <span className="text-sm md:text-base font-semibold tracking-tight text-foreground/55">
                      {company}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-sm text-muted leading-relaxed max-w-xs">
                B.S. Statistics &amp; Computer Science · UIUC
              </p>

              <ul
                className="mt-8 flex flex-wrap items-center gap-3"
                aria-label="Companies and education"
              >
                {credentials.map((item) => (
                  <li key={item.id}>
                    <span
                      className="inline-flex size-12 md:size-[3.25rem] items-center justify-center rounded-2xl bg-white shadow-[0_1px_0_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04]"
                      title={item.name}
                    >
                      <Image
                        src={item.src}
                        alt={item.name}
                        width={28}
                        height={28}
                        className="size-7 object-contain"
                        unoptimized
                      />
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="lg:col-span-7"
            >
              <p className="text-lg md:text-xl leading-relaxed text-foreground/85">
                {profile.summary} A data-driven approach to quality,
                performance, and products people actually use.
              </p>

              <ul className="mt-12 grid sm:grid-cols-2 gap-x-8 gap-y-8">
                {focuses.map((item, index) => (
                  <motion.li
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.45,
                      delay: 0.1 + index * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative pl-4 border-l-2 border-brand/80"
                  >
                    <h3 className="text-sm font-bold tracking-wide uppercase text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-foreground/65">
                      {item.body}
                    </p>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-12 pt-8 border-t border-foreground/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
                  <span>{profile.location}</span>
                  <span aria-hidden className="text-foreground/20">
                    ·
                  </span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="hover:text-brand transition-colors"
                  >
                    {profile.email}
                  </a>
                  <span aria-hidden className="text-foreground/20">
                    ·
                  </span>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand transition-colors"
                  >
                    GitHub
                  </a>
                  <span aria-hidden className="text-foreground/20">
                    ·
                  </span>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>

                <a href="#contact" className="btn-outline !py-2.5 !px-5 !text-sm self-start sm:self-auto">
                  Let&apos;s talk
                  <span aria-hidden>→</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
