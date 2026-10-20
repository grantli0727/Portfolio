"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { profile } from "@/data/content";

type HeaderProps = {
  variant?: "overlay" | "sticky" | "page";
};

function useNavLinks() {
  const pathname = usePathname();
  const home = pathname === "/";

  return [
    { href: "/work", label: "Work", active: pathname.startsWith("/work") },
    {
      href: home ? "#about" : "/#about",
      label: "About",
      active: false,
    },
    {
      href: home ? "#experience" : "/#experience",
      label: "Experience",
      active: false,
    },
    {
      href: home ? "#contact" : "/#contact",
      label: "Contact",
      active: false,
    },
  ];
}

export function Header({ variant = "sticky" }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const links = useNavLinks();
  const overlay = variant === "overlay";
  const page = variant === "page";

  useEffect(() => {
    if (overlay || page) return;
    const onScroll = () =>
      setScrolled(window.scrollY > window.innerHeight * 0.72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlay, page]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (variant === "sticky" && !scrolled) {
    return null;
  }

  const light = overlay;

  return (
    <header
      className={
        overlay
          ? "absolute inset-x-0 top-0 z-30"
          : "fixed inset-x-0 top-0 z-50 bg-white/92 backdrop-blur-md border-b border-border shadow-[0_1px_0_rgba(0,0,0,0.03)]"
      }
    >
      <div
        className={`grid grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center gap-4 py-4 md:py-5 ${
          overlay ? "px-5 md:px-8 lg:px-10" : "container-wide"
        }`}
      >
        <Link
          href="/"
          className={`font-bold tracking-tight text-lg md:text-xl justify-self-start transition-colors ${
            light ? "text-white" : "text-foreground"
          }`}
        >
          {profile.name}
          <span className="text-brand">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 justify-self-center">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-base font-medium transition-colors hover:text-brand ${
                link.active
                  ? "text-brand"
                  : light
                    ? "text-white/90"
                    : "text-foreground/75"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3 justify-self-end">
          <Link
            href={overlay ? "#contact" : "/#contact"}
            className="btn-primary !py-2.5 !px-5 !text-base"
          >
            Let&apos;s talk
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden size-11 rounded-full bg-brand text-white flex items-center justify-center justify-self-end"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M5 8h14M5 12h14M5 16h10"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          className={`md:hidden border-t ${
            overlay
              ? "border-white/15 bg-black/90 backdrop-blur-md"
              : "border-border bg-white"
          }`}
        >
          <nav
            className={`flex flex-col py-4 gap-1 ${
              overlay ? "px-5" : "container-wide"
            }`}
          >
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-3 text-lg font-medium ${
                  link.active
                    ? "text-brand"
                    : overlay
                      ? "text-white"
                      : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-3 w-full"
            >
              Let&apos;s talk
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
