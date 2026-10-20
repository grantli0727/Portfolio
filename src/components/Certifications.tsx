"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { certifications } from "@/data/content";

export function Certifications() {
  return (
    <section
      id="certifications"
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
          <p className="section-label mb-5 !text-brand">Certifications</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.08]">
            React, ML, and cloud credentials that back the craft
          </h2>
        </motion.div>

        <ul className="mt-12 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {certifications.map((cert, index) => (
            <motion.li
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.45,
                delay: Math.min(index * 0.05, 0.25),
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-brand/50 hover:bg-white/[0.07]"
              >
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
                  <Image
                    src={cert.logo}
                    alt=""
                    width={28}
                    height={28}
                    className="size-7 object-contain"
                    unoptimized
                  />
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold tracking-tight group-hover:text-brand transition-colors">
                    {cert.name}
                  </span>
                  <span className="mt-1 block text-xs font-medium uppercase tracking-wider text-white/40">
                    {cert.issuer}
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-white/60">
                    {cert.focus}
                  </span>
                </span>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
