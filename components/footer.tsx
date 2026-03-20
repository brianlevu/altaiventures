import Link from "next/link";
import { Logo } from "@/components/logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy py-28">
      <div className="container-shell">
        {/* Top: logo centered */}
        <div className="flex justify-center mb-16">
          <Logo variant="stacked" color="light" size="md" />
        </div>

        {/* Nav — py-3 for ux-fitts-hit-area on small text links */}
        <nav className="flex flex-wrap justify-center gap-8 mb-16">
          {[
            ["Properties", "/properties"],
            ["App", "/landlord-hours"],
            ["About", "/#about"],
            ["Contact", "/#contact"],
            ["Brand", "/brand"],
            ["Terms", "/terms"],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="py-3 text-xs uppercase tracking-[0.25em] text-white/50 transition-colors duration-150 ease-out hover:text-white"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div className="mx-auto mb-12 h-px w-12 bg-white/10" />

        {/* Contact */}
        <div className="mb-16 text-center">
          <a
            href="mailto:hello@altaiventures.co"
            className="py-3 text-sm tracking-[0.15em] text-white/55 transition-colors duration-150 ease-out hover:text-champagne"
          >
            hello@altaiventures.co
          </a>
        </div>

        {/* Bottom */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-[10px] text-white/25 tracking-[0.2em] uppercase">
            © {year} Altai Ventures
          </p>
          <p className="text-[10px] text-white/25 tracking-[0.15em] uppercase">
            Castro Valley · Oakland · East Bay, CA
          </p>
        </div>
      </div>
    </footer>
  );
}
