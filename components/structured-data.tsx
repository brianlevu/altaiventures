export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Altai Ventures",
    url: "https://altaiventures.co",
    logo: "https://altaiventures.co/images/og-logo.png",
    description:
      "Family-owned residential real estate portfolio in the East Bay, California. Short-term and long-term rental homes in Oakland and Castro Valley.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Oakland",
      addressRegion: "CA",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@altaiventures.co",
      contactType: "customer service",
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LodgingBusinessJsonLd({
  name,
  street,
  city,
  description,
  url,
  beds,
  baths,
  sqft,
  features,
  image,
}: {
  name: string;
  street: string;
  city: string;
  description: string;
  url: string;
  beds?: number;
  baths?: number;
  sqft?: number;
  features: string[];
  image: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name,
    description,
    url,
    image: `https://altaiventures.co${image}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: street,
      addressLocality: city.split(",")[0].trim(),
      addressRegion: "CA",
      postalCode: city.includes("Oakland") ? "94621" : "94546",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.8044,
      longitude: -122.2712,
    },
    amenityFeature: features.map((f) => ({
      "@type": "LocationFeatureSpecification",
      name: f,
      value: true,
    })),
    ...(beds && { numberOfRooms: beds }),
    ...(sqft && {
      floorSize: {
        "@type": "QuantitativeValue",
        value: sqft,
        unitCode: "FTK",
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ResidenceJsonLd({
  name,
  street,
  city,
  description,
  url,
  beds,
  baths,
  sqft,
  image,
}: {
  name: string;
  street: string;
  city: string;
  description: string;
  url: string;
  beds?: number;
  baths?: number;
  sqft?: number;
  image: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Residence",
    name,
    description,
    url,
    image: `https://altaiventures.co${image}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: street,
      addressLocality: city.split(",")[0].trim(),
      addressRegion: "CA",
      postalCode: "94546",
      addressCountry: "US",
    },
    ...(beds && { numberOfRooms: beds }),
    ...(sqft && {
      floorSize: {
        "@type": "QuantitativeValue",
        value: sqft,
        unitCode: "FTK",
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
