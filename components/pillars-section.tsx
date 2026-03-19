import { Reveal } from "@/components/reveal";

export function PillarsSection() {
  return (
    <section className="bg-navy py-36">
      <div className="container-shell">
        <Reveal variant="fade">
          <div className="mb-20 text-center">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-champagne/80">
              Our Commitment
            </p>
            <h2 className="display text-[clamp(2rem,4vw,3.5rem)] text-ivory">
              The Altai Standard
            </h2>
          </div>
        </Reveal>

        <div className="grid divide-y divide-white/8 md:grid-cols-3 md:divide-x md:divide-y-0">
          {[
            {
              num: "01",
              title: "Responsive\nManagement",
              body: "We answer calls, address issues promptly, and treat every property as if we live there ourselves. No corporate queues.",
            },
            {
              num: "02",
              title: "Thoughtful\nSpaces",
              body: "Each home is maintained to a personal standard — clean, functional, and genuinely comfortable for the people inside.",
            },
            {
              num: "03",
              title: "Lasting\nRelationships",
              body: "We focus on long-term tenants and returning guests. High turnover is never our goal — trust is built over time.",
            },
          ].map((pillar, i) => (
            <Reveal key={pillar.num} variant="up" delay={i * 40}>
              <div className="border-t border-champagne/40 px-0 pb-10 pt-10 first:pl-0 last:pr-0 md:px-12">
                <p className="mb-8 text-xs uppercase tracking-[0.3em] text-champagne/70 tabular-nums">
                  {pillar.num}
                </p>
                <h3 className="display mb-5 whitespace-pre-line text-[1.75rem] leading-[1.1] text-ivory">
                  {pillar.title}
                </h3>
                <p className="text-base leading-[1.8] text-white/60">
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
