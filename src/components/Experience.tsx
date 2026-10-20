"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/content";

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-white">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="section-label mb-5">Experience</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.08]">
            From Facebook to Pinterest — shipping at scale
          </h2>
        </motion.div>

        <div className="mt-12 md:mt-16 relative">
          <div
            className="pointer-events-none absolute left-0 top-0 bottom-0 hidden md:block w-px bg-border"
            aria-hidden
          />

          {experience.map((job, index) => (
            <motion.article
              key={`${job.company}-${job.period}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                delay: Math.min(index * 0.05, 0.2),
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative grid md:grid-cols-12 gap-4 md:gap-10 py-9 md:py-11 border-t border-border md:border-t-0 md:pl-10"
            >
              <span
                className="absolute left-0 top-11 hidden md:flex size-2.5 -translate-x-[5px] rounded-full bg-brand ring-4 ring-white"
                aria-hidden
              />
              <div className="md:col-span-4">
                <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-2">
                  {job.period}
                </p>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                  {job.company}
                </h3>
                <p className="mt-1.5 text-sm font-medium text-brand leading-snug">
                  {job.role}
                </p>
                <p className="mt-2 text-sm text-muted">{job.location}</p>
              </div>
              <ul className="md:col-span-8 space-y-3.5">
                {job.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[0.95rem] leading-relaxed text-foreground/80"
                  >
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
