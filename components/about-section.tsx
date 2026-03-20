import Link from "next/link";
import { Reveal } from "@/components/reveal";

export function AboutSection() {
  return (
    <section id="about" className="bg-ivory px-6 py-28 md:px-0">
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
            <div className="lg:pl-6">
              <p className="mb-6 text-xs font-medium tracking-[4px] text-champagne">
                ABOUT
              </p>
              <h2 className="display mb-8 text-[clamp(2.5rem,5vw,2.875rem)] leading-[1.08] text-navy">
                Family-Owned.<br />East Bay Focused.
              </h2>
              <div className="mb-8 h-px w-10 bg-champagne" />
              <p className="mb-6 text-[15px] leading-[1.85] text-navy/80">
                Altai Ventures is a family-owned residential real estate portfolio
                in the East Bay. We manage three properties — one private short-term
                suite and two long-term homes in Castro Valley and Oakland.
              </p>
              <p className="mb-10 text-[15px] leading-[1.85] text-navy/80">
                Our approach is simple: be responsive, maintain high standards, and
                build genuine relationships with the people we house. We&#39;re not a
                management company — we&#39;re owners who care about every detail.
              </p>
              <Link
                href="/properties"
                className="text-xs font-medium tracking-[3px] text-champagne transition-colors duration-150 ease-out hover:text-navy"
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
