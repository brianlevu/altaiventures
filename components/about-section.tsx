import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

export function AboutSection() {
  return (
    <section id="about" className="bg-ivory py-36">
      <div className="container-shell">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Image — hover parallax for delight */}
          <Reveal variant="scale">
            <div className="group relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/santa-ray/patio-evening.webp"
                alt="769 Santa Ray Ave — evening patio"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </Reveal>

          {/* Text — stagger 40ms */}
          <Reveal variant="up" delay={40}>
            <div className="lg:pl-4">
              <p className="mb-8 text-[10px] uppercase tracking-[0.4em] text-champagne">
                About
              </p>
              <h2 className="display mb-10 text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.05] text-navy">
                Family&#8209;Owned.<br />East Bay Focused.
              </h2>
              <div className="mb-10 h-px w-12 bg-taupe" />
              <p className="mb-6 text-sm leading-[1.9] text-navy/70">
                Altai Ventures is a family-owned residential real estate portfolio
                in the East Bay. We manage three properties — one private short-term
                suite and two long-term homes in Castro Valley and Oakland.
              </p>
              <p className="mb-12 text-sm leading-[1.9] text-navy/70">
                Our approach is simple: be responsive, maintain high standards, and
                build genuine relationships with the people we house. We&#39;re not a
                management company — we&#39;re owners who care about every detail.
              </p>
              <Link
                href="/properties"
                className="inline-block border-b border-champagne/50 pb-1 text-[10px] uppercase tracking-[0.3em] text-navy transition-colors duration-150 ease-out hover:border-champagne hover:text-champagne"
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
