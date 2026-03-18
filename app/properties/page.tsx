import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { properties } from "@/lib/properties";

export const metadata: Metadata = {
  title: "Rental Properties — Oakland & Castro Valley",
  description:
    "Browse Altai Ventures rental properties in Oakland and Castro Valley, CA. Short-term Airbnb vacation rental in Oakland and long-term houses for rent in Castro Valley's East Bay neighborhood.",
  alternates: {
    canonical: "https://altaiventures.co/properties",
  },
  openGraph: {
    title: "Rental Properties — Oakland & Castro Valley | Altai Ventures",
    description:
      "Three thoughtfully managed East Bay homes — one short-term Airbnb rental in Oakland, two long-term residences in Castro Valley.",
    url: "https://altaiventures.co/properties",
  },
};

export default function PropertiesPage() {
  return (
    <>
      {/* Hero header */}
      <section className="relative flex h-[60vh] min-h-[400px] items-end bg-navy">
        <Image
          src="/images/santa-ray/exterior-dusk.webp"
          alt="East Bay properties"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/40 to-navy/20" />
        <div className="container-shell relative z-10 pb-16">
          <p className="mb-5 text-[10px] uppercase tracking-[0.4em] text-champagne/80">
            Portfolio
          </p>
          <h1 className="display text-[clamp(3rem,6vw,5rem)] text-white">
            Our Properties
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-[1.8] text-white/60">
            Three thoughtfully managed East Bay homes — one available for
            short-term stays, two long-term residences.
          </p>
        </div>
      </section>

      {/* Property listing */}
      <section className="bg-ivory py-36">
        <div className="container-shell">
          <div className="space-y-px bg-taupe/60">
            {properties.map((property, i) => (
              <article
                key={property.slug}
                className="group grid bg-ivory md:grid-cols-2"
              >
                {/* Image — alternate left/right */}
                <div
                  className={`relative aspect-[4/3] overflow-hidden ${
                    i % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={property.heroImage}
                    alt={property.name}
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center px-8 py-12 md:px-16">
                  <p className="mb-4 text-[9px] uppercase tracking-[0.4em] text-champagne">
                    {property.type.replace("-", " ")} · {property.status}
                  </p>
                  <h2 className="display mb-2 text-[clamp(2rem,4vw,3rem)] text-navy">
                    {property.street}
                  </h2>
                  <p className="mb-6 text-[11px] uppercase tracking-[0.25em] text-slate/60">
                    {property.city}
                  </p>
                  <p className="mb-8 max-w-md text-sm leading-[1.8] text-slate">
                    {property.summary}
                  </p>

                  {/* Quick stats */}
                  <div className="mb-10 flex gap-8">
                    {property.beds && (
                      <div>
                        <p className="display text-2xl text-navy">{property.beds}</p>
                        <p className="mt-1 text-[8px] uppercase tracking-[0.3em] text-slate/50">
                          Bedrooms
                        </p>
                      </div>
                    )}
                    {property.baths && (
                      <div>
                        <p className="display text-2xl text-navy">{property.baths}</p>
                        <p className="mt-1 text-[8px] uppercase tracking-[0.3em] text-slate/50">
                          Bathrooms
                        </p>
                      </div>
                    )}
                    {property.sqft && (
                      <div>
                        <p className="display text-2xl text-navy">
                          {property.sqft.toLocaleString()}
                        </p>
                        <p className="mt-1 text-[8px] uppercase tracking-[0.3em] text-slate/50">
                          Sq Ft
                        </p>
                      </div>
                    )}
                  </div>

                  <Link
                    href={`/properties/${property.slug}`}
                    className="w-fit border-b border-champagne/50 pb-1 text-[10px] uppercase tracking-[0.3em] text-navy transition-all duration-500 hover:border-champagne hover:text-champagne"
                  >
                    Discover More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
