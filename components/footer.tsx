import Link from "next/link";
import { Logo } from "@/components/logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy py-24">
      <div className="container-shell">
        {/* Top: logo centered */}
        <div className="flex justify-center mb-16">
          <Logo variant="stacked" color="light" size="md" />
        </div>

        {/* Nav */}
        <nav className="flex flex-wrap justify-center gap-10 mb-16">
          {[
            ["Properties", "/properties"],
            ["About", "/#about"],
            ["Contact", "/#contact"],
            ["Brand", "/brand"],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="text-[10px] uppercase tracking-[0.35em] text-white/45 transition-colors duration-500 hover:text-white"
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
            className="text-[11px] tracking-[0.2em] text-white/50 transition-colors duration-500 hover:text-champagne"
          >
            hello@altaiventures.co
          </a>
        </div>

        {/* Bottom */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-[9px] text-white/15 tracking-[0.2em] uppercase">
            © {year} Altai Ventures
          </p>
          <p className="text-[9px] text-white/15 tracking-[0.15em] uppercase">
            Castro Valley · Oakland · East Bay, CA
          </p>
        </div>
      </div>
    </footer>
  );
}
