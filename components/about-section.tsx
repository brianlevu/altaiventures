import Link from "next/link";
import { Reveal } from "@/components/reveal";

export function AboutSection() {
  return (
    <section id="about" className="bg-ivory py-36">
      <div className="container-shell">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Video */}
          <Reveal variant="scale">
            <div className="relative aspect-[3/4] overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src="/videos/about.mp4" type="video/mp4" />
              </video>
            </div>
          </Reveal>

          {/* Text */}
          <Reveal variant="up" delay={40}>
            <div className="lg:pl-4">
              <p className="mb-6 text-xs uppercase tracking-[0.3em] text-champagne">
                About
              </p>
              <h2 className="display mb-8 text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.05] text-navy">
                Family&#8209;Owned.<br />East Bay Focused.
              </h2>
              <div className="mb-8 h-px w-12 bg-taupe" />
              <p className="mb-5 text-base leading-[1.8] text-navy/80">
                Altai Ventures is a family-owned residential real estate portfolio
                in the East Bay. We manage three properties — one private short-term
                suite and two long-term homes in Castro Valley and Oakland.
              </p>
              <p className="mb-10 text-base leading-[1.8] text-navy/80">
                Our approach is simple: be responsive, maintain high standards, and
                build genuine relationships with the people we house. We&#39;re not a
                management company — we&#39;re owners who care about every detail.
              </p>
              <Link
                href="/properties"
                className="inline-block border-b border-champagne/50 pb-1 text-xs uppercase tracking-[0.2em] text-navy transition-colors duration-150 ease-out hover:border-champagne hover:text-champagne"
              >
                View Our Properties
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
