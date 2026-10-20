"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/content";

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-foreground text-white">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="section-label mb-5 !text-brand">Capabilities</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.08]">
            The stack behind the work
          </h2>
        </motion.div>

        <div className="mt-12 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h3 className="text-sm font-semibold tracking-[0.12em] uppercase text-white/45 mb-5">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/15 px-3.5 py-1.5 text-[0.8rem] text-white/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
