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

      {/* Overlay — warm brown gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A120850] via-[#15100A90] to-[#0F0A05CC]" />

      {/* Centered content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 text-center">
        <Reveal variant="fade" delay={0}>
          <p className="mb-10 text-xs font-medium tracking-[5px] text-champagne/90">
            EAST BAY · CALIFORNIA
          </p>
        </Reveal>

        <Reveal variant="up" delay={50}>
          <h1 className="display text-[clamp(3.5rem,8vw,6rem)] leading-[0.92] text-white">
            Spaces Worth<br />Staying In
          </h1>
        </Reveal>

        <Reveal variant="fade" delay={100}>
          <div className="mx-auto my-8 h-px w-16 bg-champagne/40" />
        </Reveal>

        <Reveal variant="up" delay={150}>
          <p className="max-w-lg text-base leading-[1.8] text-white/75">
            Family-owned East Bay properties, thoughtfully managed
            for guests and long-term residents.
          </p>
        </Reveal>

        <Reveal variant="up" delay={200}>
          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Link
              href="/properties/769-santa-ray"
              className="border border-white/40 bg-champagne/25 px-10 py-3.5 text-xs font-medium tracking-[3px] text-white transition-all duration-150 ease-out hover:bg-champagne/40 active:scale-[0.98]"
            >
              Book a Stay
            </Link>
            <Link
              href="/properties"
              className="px-10 py-3.5 text-xs font-medium tracking-[3px] text-white/50 transition-colors duration-150 ease-out hover:text-white"
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
              <p className="display text-[22px] text-white/90 tabular-nums">{num}</p>
              <p className="mt-1.5 text-xs font-medium uppercase tracking-[4px] text-white/30">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
