import Link from "next/link";
import { profile } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white py-10 md:py-12">
      <div className="container-page flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 text-sm text-muted">
        <p>
          © 2026 {profile.name}
          <span className="mx-2 text-border">·</span>
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
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand transition-colors"
          >
            LinkedIn
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
