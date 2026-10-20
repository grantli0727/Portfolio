"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/content";

const details = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/[^\d+]/g, "")}`,
  },
  {
    label: "Location",
    value: profile.location,
    href: null,
  },
] as const;

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white text-foreground">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[1.5rem] md:rounded-[2.25rem] bg-muted-bg px-7 py-14 md:px-12 md:py-16 lg:px-16 lg:py-20"
        >
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <p className="section-label mb-5">Contact</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.08] max-w-xl">
                Let&apos;s build something worth shipping
              </h2>
              <p className="mt-5 text-foreground/65 text-base md:text-lg leading-relaxed max-w-lg">
                Open to senior engineering roles and selective product builds —
                AI features, backends, and polished Next.js front ends.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a href={`mailto:${profile.email}`} className="btn-primary">
                  Email me
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <dl className="lg:col-span-5 flex flex-col">
              {details.map((item, index) => (
                <div
                  key={item.label}
                  className={`py-6 ${
                    index === 0 ? "pt-0" : "border-t border-foreground/10"
                  } ${index === details.length - 1 ? "pb-0" : ""}`}
                >
                  <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-muted mb-2">
                    {item.label}
                  </dt>
                  <dd className="text-lg md:text-xl font-semibold tracking-tight">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="hover:text-brand transition-colors break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
