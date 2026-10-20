"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/content";

const points = [
  "End-to-end LLM features — RAG, agents, evals, and guardrails that stay grounded.",
  "Reliable backends in Python / FastAPI, Node.js, and TypeScript on AWS.",
  "Fast, accessible Next.js interfaces with SSR, streaming, and measurable UX.",
  "Clear collaboration with product, design, and non-technical stakeholders.",
];

const companies = ["Pinterest", "OpenSea", "Facebook"];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container-page">
        <div className="rounded-[1.5rem] md:rounded-[2.25rem] bg-muted-bg px-6 py-12 md:px-12 md:py-16 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5"
            >
              <p className="section-label mb-5">About</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.08]">
                Engineer who ships AI that people trust
              </h2>

              <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2">
                {companies.map((company, i) => (
                  <span key={company} className="contents">
                    {i > 0 && (
                      <span className="text-border text-foreground/25" aria-hidden>
                        /
                      </span>
                    )}
                    <span className="text-sm font-semibold tracking-wide text-foreground/50">
                      {company}
                    </span>
                  </span>
                ))}
              </div>
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
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                {profile.summary} B.S. in Statistics and Computer Science from
                UIUC — with a data-driven approach to quality and performance.
              </p>

              <ul className="mt-10 grid sm:grid-cols-2 gap-x-6 gap-y-5">
                {points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm md:text-[0.95rem] leading-relaxed text-foreground/75"
                  >
                    <span className="mt-1.5 size-2 shrink-0 rounded-full bg-brand" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap gap-3 text-sm text-muted">
                <span>{profile.location}</span>
                <span aria-hidden>·</span>
                <a
                  href={`mailto:${profile.email}`}
                  className="hover:text-brand transition-colors"
                >
                  {profile.email}
                </a>
                <span aria-hidden>·</span>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
