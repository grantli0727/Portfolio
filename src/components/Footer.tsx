import Link from "next/link";
import { profile } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-foreground py-10 md:py-12 text-white">
      <div className="container-page flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 text-sm text-white/55">
        <p>
          © 2026 {profile.name}
          <span className="mx-2 text-white/25">·</span>
          Built with Next.js
        </p>
        <div className="flex flex-wrap gap-5">
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-brand transition-colors"
          >
            Email
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand transition-colors"
          >
            GitHub
          </a>
          <Link href="/work" className="hover:text-brand transition-colors">
            Work
          </Link>
          <Link href="/#top" className="hover:text-brand transition-colors">
            Back up ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}
