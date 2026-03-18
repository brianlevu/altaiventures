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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-ivory/95 backdrop-blur-md border-b border-taupe/30"
          : "bg-transparent"
      }`}
    >
      <div className="container-shell flex h-20 items-center justify-between">
        <Link href="/" className="transition-opacity duration-300 hover:opacity-70">
          <Logo
            variant="horizontal"
            color={scrolled ? "dark" : "light"}
            size={scrolled ? "xs" : "sm"}
          />
        </Link>

        <nav className="hidden items-center gap-12 md:flex">
          {[
            ["Properties", "/properties"],
            ["About", "/#about"],
            ["Contact", "/#contact"],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className={`text-[10px] uppercase tracking-[0.3em] transition-colors duration-500 ${
                scrolled
                  ? "text-slate hover:text-navy"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          href="/properties/769-santa-ray"
          className={`text-[10px] uppercase tracking-[0.25em] px-7 py-2.5 border transition-all duration-500 ${
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
