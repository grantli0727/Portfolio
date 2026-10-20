"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/content";

export function WorkList() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {projects.map((project, index) => {
        const reverse = index % 2 === 1;
        const num = String(index + 1).padStart(2, "0");

        return (
          <motion.a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.6,
              delay: 0.04,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group block outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 rounded-3xl"
          >
            <article className="grid md:grid-cols-12 gap-6 md:gap-10 items-center">
              <div
                className={`md:col-span-7 relative overflow-hidden rounded-2xl md:rounded-[1.75rem] bg-muted-bg aspect-[16/10] shadow-[0_18px_50px_rgba(0,0,0,0.08)] ${
                  reverse ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={project.image}
                  alt={`Preview of ${project.name}`}
                  fill
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  sizes="(max-width: 768px) 100vw, 58vw"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl md:rounded-[1.75rem] pointer-events-none" />
              </div>

              <div
                className={`md:col-span-5 flex flex-col justify-center ${
                  reverse ? "md:order-1" : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold tracking-widest text-muted tabular-nums">
                    {num}
                  </span>
                  <span className="size-1 rounded-full bg-brand" />
                  <span className="text-xs font-semibold tracking-wide uppercase text-brand">
                    {project.tag}
                  </span>
                </div>

                <h2 className="text-2xl md:text-[2rem] font-bold tracking-tight leading-tight transition-colors group-hover:text-brand">
                  {project.name}
                </h2>
                <p className="mt-3 text-muted leading-relaxed text-[0.95rem] md:text-base">
                  {project.description}
                </p>

                <span className="mt-7 inline-flex items-center gap-3 text-sm font-semibold">
                  Visit site
                  <span
                    aria-hidden
                    className="inline-flex size-9 items-center justify-center rounded-full bg-brand text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                  >
                    ↗
                  </span>
                </span>
                <span className="mt-2 text-xs text-muted/80 truncate">
                  {project.url.replace(/^https?:\/\//, "")}
                </span>
              </div>
            </article>
          </motion.a>
        );
      })}
    </div>
  );
}
