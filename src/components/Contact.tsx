"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/content";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2.25rem] bg-foreground text-white px-7 py-14 md:px-14 md:py-20 lg:px-16"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_85%_0%,rgba(233,29,37,0.22),transparent_55%)]"
            aria-hidden
          />

          <div className="relative z-10 max-w-2xl">
            <p className="section-label mb-5 !text-brand">Contact</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.08]">
              Let&apos;s build something worth shipping
            </h2>
            <p className="mt-5 text-white/65 text-base md:text-lg leading-relaxed max-w-xl">
              Open to senior engineering roles and selective product builds —
              AI features, backends, and polished Next.js front ends.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className="btn-primary">
                Email me
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                LinkedIn
              </a>
            </div>

            <dl className="mt-12 grid sm:grid-cols-3 gap-6 text-sm border-t border-white/10 pt-8">
              <div>
                <dt className="text-white/40 mb-1.5 text-xs uppercase tracking-wider">
                  Email
                </dt>
                <dd>
                  <a
                    href={`mailto:${profile.email}`}
                    className="hover:text-brand transition-colors break-all"
                  >
                    {profile.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-white/40 mb-1.5 text-xs uppercase tracking-wider">
                  Phone
                </dt>
                <dd>
                  <a
                    href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`}
                    className="hover:text-brand transition-colors"
                  >
                    {profile.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-white/40 mb-1.5 text-xs uppercase tracking-wider">
                  Location
                </dt>
                <dd>{profile.location}</dd>
              </div>
            </dl>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
