"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { projects } from "@/data/content";

export function WorkCarousel() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const dragX = useMotionValue(0);
  const count = projects.length;

  const go = useCallback(
    (dir: number) => {
      setActive((i) => (i + dir + count) % count);
    },
    [count]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.7 && rect.bottom > 120;
      if (!inView) return;
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const project = projects[active];

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative bg-[#0a0a0a] text-white py-20 md:py-28 overflow-x-clip"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 35%, rgba(233,29,37,0.16), transparent 68%)",
        }}
        aria-hidden
      />

      <div className="container-wide relative z-10 px-5 md:px-0">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-[0.7rem] font-semibold tracking-[0.14em] uppercase text-white/90 backdrop-blur-sm">
              <span className="text-brand text-sm leading-none">+</span>
              Work in action
            </span>
            <h2 className="mt-5 text-3xl md:text-5xl font-bold tracking-tight leading-[1.08]">
              Discover my{" "}
              <span className="text-brand">recent work</span>
            </h2>
          </motion.div>

          <Link
            href="/work"
            className="btn-primary !py-3 !pl-6 !pr-2 self-start md:self-auto shrink-0"
          >
            Explore all work
            <span
              aria-hidden
              className="inline-flex size-9 items-center justify-center rounded-full bg-foreground text-white"
            >
              →
            </span>
          </Link>
        </div>
      </div>

      <div className="relative z-10 w-full">
        <div className="relative mx-auto max-w-6xl px-2">
          <motion.div
            className="relative flex items-center justify-center h-[280px] sm:h-[340px] md:h-[400px] cursor-grab active:cursor-grabbing"
            style={{ perspective: "1400px", x: dragX }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onDragEnd={(_, info) => {
              if (info.offset.x < -70 || info.velocity.x < -400) go(1);
              else if (info.offset.x > 70 || info.velocity.x > 400) go(-1);
            }}
          >
            {projects.map((item, index) => {
              let offset = index - active;
              if (offset > count / 2) offset -= count;
              if (offset < -count / 2) offset += count;

              const abs = Math.abs(offset);
              if (abs > 2) return null;

              const isActive = offset === 0;
              const scale = isActive ? 1 : abs === 1 ? 0.86 : 0.72;
              const x = offset * (abs === 1 ? 280 : abs === 2 ? 480 : 0);
              const rotateY = offset * -10;
              const z = isActive ? 40 : abs === 1 ? -10 : -40;
              const opacity = isActive ? 1 : abs === 1 ? 0.5 : 0.25;

              return (
                <motion.div
                  key={item.id}
                  role="group"
                  aria-label={
                    isActive
                      ? `Current project: ${item.name}`
                      : `Show ${item.name}`
                  }
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => {
                    if (!isActive) setActive(index);
                  }}
                  className={`absolute w-[min(86vw,520px)] sm:w-[540px] md:w-[620px] aspect-[16/10] rounded-[1.35rem] md:rounded-[1.6rem] overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                    isActive ? "cursor-default" : "cursor-pointer"
                  }`}
                  style={{
                    transformStyle: "preserve-3d",
                    transformPerspective: 1400,
                  }}
                  animate={{
                    x,
                    scale,
                    rotateY,
                    z,
                    opacity,
                    zIndex: 20 - abs,
                  }}
                  transition={{ type: "spring", stiffness: 280, damping: 30 }}
                >
                  <div
                    className={`relative size-full rounded-[1.35rem] md:rounded-[1.6rem] overflow-hidden ${
                      isActive
                        ? "ring-2 ring-brand shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
                        : "ring-1 ring-white/10"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className={`object-cover object-top transition-[filter] duration-500 ${
                        isActive ? "grayscale-0" : "grayscale brightness-[0.7]"
                      }`}
                      sizes="620px"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                    <AnimatePresence>
                      {isActive && (
                        <motion.a
                          key="visit"
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, scale: 0.85 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.85 }}
                          onClick={(e) => e.stopPropagation()}
                          className="absolute left-1/2 top-[42%] z-10 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white text-xl shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-transform hover:scale-110"
                          aria-label={`Visit ${item.name}`}
                        >
                          ↗
                        </motion.a>
                      )}
                    </AnimatePresence>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          key="meta"
                          initial={{ opacity: 0, y: 14 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 backdrop-blur-sm p-4 text-left text-foreground shadow-lg"
                        >
                          <span className="inline-flex rounded-full bg-muted-bg px-2.5 py-1 text-[0.65rem] font-semibold tracking-wide uppercase text-foreground/55">
                            {item.tag}
                          </span>
                          <h3 className="mt-2 text-lg md:text-xl font-bold tracking-tight">
                            {item.name}
                          </h3>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              className="size-11 rounded-full border border-white/25 text-white transition-colors hover:border-brand hover:bg-brand"
              aria-label="Previous project"
            >
              ←
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Projects">
              {projects.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  aria-label={p.name}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === active
                      ? "w-8 bg-brand"
                      : "w-1.5 bg-white/30 hover:bg-white/55"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              className="size-11 rounded-full border border-white/25 text-white transition-colors hover:border-brand hover:bg-brand"
              aria-label="Next project"
            >
              →
            </button>
          </div>

          <div className="mt-5 text-center max-w-md mx-auto">
            <p className="text-sm text-white/45">
              <span className="tabular-nums text-white/70">
                {String(active + 1).padStart(2, "0")}
              </span>
              <span className="mx-1.5">/</span>
              <span className="tabular-nums">
                {String(count).padStart(2, "0")}
              </span>
              <span className="mx-2 text-white/25">·</span>
              {project.name}
            </p>
            <p className="mt-2 text-sm text-white/40 leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
