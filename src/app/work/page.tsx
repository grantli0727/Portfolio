import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WorkList } from "@/components/WorkList";
import { projects } from "@/data/content";

export const metadata: Metadata = {
  title: "Work — Grant Li",
  description:
    "Selected live products and sites by Grant Li — AI products, marketing experiences, and full-stack builds.",
};

export default function WorkPage() {
  return (
    <>
      <Header variant="page" />
      <main className="flex-1">
        <section className="bg-foreground text-white pt-28 md:pt-32 pb-14 md:pb-16">
          <div className="container-page">
            <p className="section-label mb-5 !text-brand">All work</p>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.08] max-w-2xl">
              Live products I&apos;ve shipped
            </h1>
            <p className="mt-5 text-white/60 text-base md:text-lg leading-relaxed max-w-xl">
              {projects.length} live destinations — preview each site, then open
              it in a new tab.
            </p>
            <Link
              href="/#work"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-brand transition-colors"
            >
              ← Back to home preview
            </Link>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container-page">
            <WorkList />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
