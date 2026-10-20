"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { experience } from "@/data/content";

export function Experience() {
  return (
    <section
      id="experience"
      className="py-20 md:py-28 bg-foreground text-white"
    >
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="section-label mb-5 !text-brand">Experience</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.08]">
            From Facebook to Pinterest — shipping at scale
          </h2>
        </motion.div>

        <div className="mt-12 md:mt-16 relative">
          <div
            className="pointer-events-none absolute left-0 top-0 bottom-0 hidden md:block w-px bg-white/15 ml-[1.375rem]"
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
              className="relative grid md:grid-cols-12 gap-4 md:gap-10 py-9 md:py-11 border-t border-white/10 md:border-t-0 md:pl-16"
            >
              <div className="absolute left-0 top-9 hidden md:flex size-11 items-center justify-center rounded-2xl bg-white ring-1 ring-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
                <Image
                  src={job.logo}
                  alt=""
                  width={24}
                  height={24}
                  className="size-6 object-contain"
                  unoptimized
                />
              </div>

              <div className="md:col-span-4">
                <div className="flex items-center gap-3 mb-3 md:hidden">
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-white ring-1 ring-white/10">
                    <Image
                      src={job.logo}
                      alt=""
                      width={22}
                      height={22}
                      className="size-[1.35rem] object-contain"
                      unoptimized
                    />
                  </span>
                  <p className="text-xs font-semibold tracking-widest uppercase text-white/45">
                    {job.period}
                  </p>
                </div>
                <p className="hidden md:block text-xs font-semibold tracking-widest uppercase text-white/45 mb-2">
                  {job.period}
                </p>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                  {job.company}
                </h3>
                <p className="mt-1.5 text-sm font-medium text-brand leading-snug">
                  {job.role}
                </p>
                <p className="mt-2 text-sm text-white/45">{job.location}</p>
              </div>
              <ul className="md:col-span-8 space-y-3.5">
                {job.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[0.95rem] leading-relaxed text-white/70"
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
