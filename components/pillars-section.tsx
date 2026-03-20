import { Reveal } from "@/components/reveal";

const pillars = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    num: "01",
    title: "Responsive\nManagement",
    body: "We answer calls, address issues promptly, and treat every property as if we live there ourselves.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <path d="M9 22V12h6v10" />
      </svg>
    ),
    num: "02",
    title: "Thoughtful\nSpaces",
    body: "Each home is maintained to a personal standard — clean, functional, and genuinely comfortable.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    num: "03",
    title: "Lasting\nRelationships",
    body: "We focus on long-term tenants and returning guests. Trust is built over time.",
  },
];

export function PillarsSection() {
  return (
    <section className="bg-navy px-6 py-28 md:px-0">
      <div className="container-shell">
        <Reveal variant="fade">
          <div className="mb-20 text-center">
            <p className="mb-5 text-xs font-medium tracking-[4px] text-champagne/70">
              OUR COMMITMENT
            </p>
            <h2 className="display text-[clamp(2rem,4vw,3rem)] text-ivory">
              The Altai Standard
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-0 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.num} variant="up" delay={i * 40}>
              <div className="border-t border-champagne/40 px-0 pb-10 pt-10 first:pl-0 last:pr-0 md:px-10">
                <div className="mb-4 text-champagne">{pillar.icon}</div>
                <div className="mb-6 h-px w-8 bg-champagne/25" />
                <p className="mb-4 text-xs font-medium tracking-[4px] text-champagne/60 tabular-nums">
                  {pillar.num}
                </p>
                <h3 className="display mb-5 whitespace-pre-line text-[28px] leading-[1.1] text-ivory">
                  {pillar.title}
                </h3>
                <p className="text-base leading-[1.8] text-white/50">
                  {pillar.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
