import Image from "next/image";
import Link from "next/link";
import { properties } from "@/lib/properties";
import { Reveal } from "@/components/reveal";

export function PropertiesSection() {
  const [primary, ...secondary] = properties;

  return (
    <section id="properties" className="bg-ivory py-36">
      <div className="container-shell">
        {/* Section header */}
        <div className="mb-20 flex items-end justify-between">
          <Reveal variant="up">
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.4em] text-champagne">
                Our Portfolio
              </p>
              <h2 className="display text-[clamp(2.5rem,5vw,4rem)] text-navy">
                East Bay Properties
              </h2>
            </div>
          </Reveal>
          <Reveal variant="fade" delay={50}>
            <Link
              href="/properties"
              className="hidden items-center gap-2 border-b border-champagne/40 pb-1 text-[10px] uppercase tracking-[0.3em] text-navy transition-colors duration-150 ease-out hover:border-champagne md:flex"
            >
              All Properties
            </Link>
          </Reveal>
        </div>

        {/* Grid: featured left, secondary right */}
        <div className="grid gap-px bg-taupe/60 lg:grid-cols-12">
          {/* Featured */}
          <Reveal variant="up" className="lg:col-span-7">
            <article className="group bg-ivory">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={primary.heroImage}
                  alt={primary.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="pb-4 pr-10 pt-10">
                <p className="mb-4 text-[9px] uppercase tracking-[0.4em] text-champagne">
                  {primary.type.replace("-", " ")} · {primary.city}
                </p>
                <h3 className="display mb-4 text-[2.5rem] text-navy">
                  {primary.street}
                </h3>
                <p className="mb-8 max-w-lg text-sm leading-[1.8] text-slate">
                  {primary.summary}
                </p>
                <Link
                  href={`/properties/${primary.slug}`}
                  className="inline-block border-b border-champagne/50 pb-1 text-[10px] uppercase tracking-[0.3em] text-navy transition-colors duration-150 ease-out hover:border-champagne hover:text-champagne"
                >
                  Discover More
                </Link>
              </div>
            </article>
          </Reveal>

          {/* Secondary stack — stagger 40ms per item */}
          <div className="flex flex-col gap-px bg-taupe/60 lg:col-span-5">
            {secondary.map((prop, i) => (
              <Reveal key={prop.slug} variant="up" delay={i * 40}>
                <article className="group flex flex-1 flex-col bg-ivory">
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={prop.heroImage}
                      alt={prop.name}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-8 pb-8 pt-8">
                    <p className="mb-3 text-[9px] uppercase tracking-[0.4em] text-champagne">
                      {prop.type.replace("-", " ")} · {prop.city}
                    </p>
                    <h3 className="display mb-3 text-2xl text-navy">
                      {prop.street}
                    </h3>
                    <p className="mb-6 text-sm leading-relaxed text-slate">
                      {prop.summary}
                    </p>
                    <Link
                      href={`/properties/${prop.slug}`}
                      className="mt-auto w-fit inline-block border-b border-champagne/50 pb-1 text-[10px] uppercase tracking-[0.3em] text-navy transition-colors duration-150 ease-out hover:border-champagne hover:text-champagne"
                    >
                      Discover More
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
