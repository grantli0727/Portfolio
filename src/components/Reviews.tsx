"use client";

import { motion } from "framer-motion";
import { reviews } from "@/data/content";

function StarRating() {
  return (
    <div
      className="flex items-center gap-1 mb-5"
      role="img"
      aria-label="5 out of 5 stars"
    >
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          className="text-brand"
          aria-hidden
        >
          <path
            fill="currentColor"
            d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.47L12 17.77l-5.8 3.05 1.11-6.47-4.7-4.58 6.49-.94L12 2.5z"
          />
        </svg>
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-white text-foreground">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="section-label mb-5">Reviews</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.08]">
            What collaborators say about the work
          </h2>
        </motion.div>

        <div className="mt-12 md:mt-16 grid md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <motion.blockquote
              key={review.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col rounded-[1.25rem] bg-muted-bg px-6 py-8 md:px-7 md:py-9"
            >
              <StarRating />
              <p className="text-[0.95rem] md:text-base leading-relaxed text-foreground/80 flex-1">
                {review.quote}
              </p>
              <footer className="mt-8 pt-6 border-t border-foreground/10">
                <cite className="not-italic">
                  <span className="block font-semibold tracking-tight">
                    {review.name}
                  </span>
                  <span className="mt-1 block text-sm text-muted">
                    {review.role} · {review.company}
                  </span>
                </cite>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
