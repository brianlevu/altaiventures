"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Logo } from "@/components/logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isLandlordHours = pathname.startsWith("/landlord-hours");

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
      <div className={`container-shell flex items-center justify-between transition-all duration-300 ${isLandlordHours ? "h-14" : "h-16"}`}>
        <Link href="/" className="transition-opacity duration-150 hover:opacity-70">
          <Logo
            variant="horizontal"
            color={scrolled ? "dark" : "light"}
            size="sm"
          />
        </Link>

        {isLandlordHours ? (
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-champagne px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-navy transition-all duration-150 ease-out hover:bg-[#E8D5B0] active:scale-[0.98]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download App
          </a>
        ) : (
          <>
            <nav className="hidden items-center gap-8 md:flex">
              {[
                ["Properties", "/properties"],
                ["About", "/#about"],
                ["App", "/landlord-hours"],
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
          </>
        )}
      </div>
    </header>
  );
}
