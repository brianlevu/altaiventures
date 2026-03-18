"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/components/logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out ${
        scrolled
          ? "bg-ivory/95 backdrop-blur-md border-b border-taupe/30"
          : "bg-transparent"
      }`}
    >
      <div className="container-shell flex h-20 items-center justify-between">
        <Link href="/" className="transition-opacity duration-150 hover:opacity-70">
          <Logo
            variant="horizontal"
            color={scrolled ? "dark" : "light"}
            size="sm"
          />
        </Link>

        {/* ux-fitts-hit-area: nav links get py-3 for 32px+ touch target */}
        <nav className="hidden items-center gap-8 md:flex">
          {[
            ["Properties", "/properties"],
            ["About", "/#about"],
            ["Contact", "/#contact"],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className={`relative py-3 text-[11px] uppercase tracking-[0.25em] transition-colors duration-150 ease-out ${
                scrolled
                  ? "text-slate hover:text-navy"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* ux-fitts-target-size: py-3.5 for 36px+ button height */}
        <Link
          href="/properties/769-santa-ray"
          className={`text-[11px] uppercase tracking-[0.2em] px-7 py-3.5 border transition-all duration-150 ease-out active:scale-[0.98] ${
            scrolled
              ? "border-navy text-navy hover:bg-navy hover:text-ivory"
              : "border-white/30 text-white/80 hover:border-white hover:bg-white/10"
          }`}
        >
          Book a Stay
        </Link>
      </div>
    </header>
  );
}
