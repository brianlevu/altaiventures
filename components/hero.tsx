import Link from "next/link";
import { Reveal } from "@/components/reveal";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover object-center"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay — gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/50 to-navy/70" />

      {/* Centered content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 text-center">
        <Reveal variant="fade" delay={300}>
          <p className="mb-10 text-[10px] uppercase tracking-[0.5em] text-champagne/80">
            East Bay · California
          </p>
        </Reveal>

        <Reveal variant="up" delay={500}>
          <h1 className="display text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.92] text-white">
            Spaces Worth<br />Staying In
          </h1>
        </Reveal>

        <Reveal variant="fade" delay={800}>
          <div className="mx-auto my-12 h-px w-16 bg-champagne/40" />
        </Reveal>

        <Reveal variant="up" delay={900}>
          <p className="max-w-sm text-[13px] leading-[1.8] text-white/70 tracking-wide">
            Family-owned East Bay properties, thoughtfully managed
            for guests and long-term residents.
          </p>
        </Reveal>

        <Reveal variant="up" delay={1100}>
          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link
              href="/properties/769-santa-ray"
              className="border border-white/40 px-10 py-3.5 text-[10px] uppercase tracking-[0.3em] text-white transition-all duration-500 hover:border-white hover:bg-white/10"
            >
              Book a Stay
            </Link>
            <Link
              href="/properties"
              className="px-10 py-3.5 text-[10px] uppercase tracking-[0.3em] text-white/50 transition-all duration-500 hover:text-white"
            >
              Explore Properties
            </Link>
          </div>
        </Reveal>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="container-shell grid grid-cols-3 divide-x divide-white/10">
          {[
            { num: "3", label: "Properties" },
            { num: "5+", label: "Years Managed" },
            { num: "East Bay", label: "Castro Valley · Oakland" },
          ].map(({ num, label }) => (
            <div key={label} className="px-4 py-7 text-center">
              <p className="display text-xl text-white/90">{num}</p>
              <p className="mt-1.5 text-[9px] uppercase tracking-[0.35em] text-white/45">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
