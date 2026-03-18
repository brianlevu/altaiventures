import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPropertyBySlug, properties } from "@/lib/properties";

export function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[70vh] min-h-[500px] items-end">
        <Image
          src={property.heroImage}
          alt={property.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent" />
        <div className="container-shell relative z-10 pb-16">
          <p className="mb-4 text-[9px] uppercase tracking-[0.4em] text-champagne/80">
            {property.type.replace("-", " ")} · {property.city}
          </p>
          <h1 className="display text-[clamp(3rem,7vw,5.5rem)] text-white">
            {property.street}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-ivory py-36">
        <div className="container-shell">
          <div className="grid gap-20 lg:grid-cols-[1fr,340px]">
            {/* Main */}
            <div>
              <p className="text-base leading-[2] text-slate">
                {property.description}
              </p>

              {/* Features */}
              <div className="mt-16">
                <p className="mb-8 text-[10px] uppercase tracking-[0.4em] text-champagne">
                  Amenities & Features
                </p>
                <div className="grid gap-px bg-taupe/40 md:grid-cols-2">
                  {property.features.map((feature) => (
                    <div
                      key={feature}
                      className="bg-ivory py-5 pr-6 text-sm text-navy"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              <div className="mt-20">
                <p className="mb-8 text-[10px] uppercase tracking-[0.4em] text-champagne">
                  Gallery
                </p>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {property.gallery.map((image, index) => (
                    <div
                      key={`${property.slug}-${index}`}
                      className="group relative aspect-[4/3] overflow-hidden"
                    >
                      <Image
                        src={image}
                        alt={`${property.name} — photo ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.05]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="h-fit lg:sticky lg:top-28">
              <div className="border-t border-champagne/40 pt-8">
                <h2 className="display mb-8 text-2xl text-navy">
                  Property Details
                </h2>

                <dl className="space-y-5 text-sm">
                  <div className="flex justify-between border-b border-taupe/40 pb-5">
                    <dt className="text-slate font-light">Type</dt>
                    <dd className="capitalize text-navy">
                      {property.type.replace("-", " ")}
                    </dd>
                  </div>
                  <div className="flex justify-between border-b border-taupe/40 pb-5">
                    <dt className="text-slate font-light">Status</dt>
                    <dd className="capitalize text-navy">{property.status}</dd>
                  </div>
                  {property.beds ? (
                    <div className="flex justify-between border-b border-taupe/40 pb-5">
                      <dt className="text-slate font-light">Bedrooms</dt>
                      <dd className="text-navy">{property.beds}</dd>
                    </div>
                  ) : null}
                  {property.baths ? (
                    <div className="flex justify-between border-b border-taupe/40 pb-5">
                      <dt className="text-slate font-light">Bathrooms</dt>
                      <dd className="text-navy">{property.baths}</dd>
                    </div>
                  ) : null}
                  {property.sqft ? (
                    <div className="flex justify-between border-b border-taupe/40 pb-5">
                      <dt className="text-slate font-light">Square Feet</dt>
                      <dd className="text-navy">
                        {property.sqft.toLocaleString()}
                      </dd>
                    </div>
                  ) : null}
                </dl>

                {property.type === "short-term" ? (
                  <a
                    href={property.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-10 block w-full border border-navy bg-navy px-6 py-4 text-center text-[10px] uppercase tracking-[0.3em] text-ivory transition-all duration-500 hover:bg-transparent hover:text-navy"
                  >
                    {property.ctaLabel}
                  </a>
                ) : (
                  <Link
                    href={property.ctaHref}
                    className="mt-10 block w-full border border-navy px-6 py-4 text-center text-[10px] uppercase tracking-[0.3em] text-navy transition-all duration-500 hover:bg-navy hover:text-ivory"
                  >
                    {property.ctaLabel}
                  </Link>
                )}
              </div>

              <Link
                href="/properties"
                className="mt-10 block text-center text-[10px] uppercase tracking-[0.3em] text-slate transition-colors duration-500 hover:text-navy"
              >
                ← All Properties
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
