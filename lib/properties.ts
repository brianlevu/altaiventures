export type PropertyType = "short-term" | "long-term";
export type PropertyStatus = "available" | "occupied";

export type Property = {
  slug: string;
  name: string;
  street: string;
  city: string;
  type: PropertyType;
  status: PropertyStatus;
  summary: string;
  description: string;
  heroImage: string;
  gallery: string[];
  beds?: number;
  baths?: number;
  sqft?: number;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlight?: boolean;
};

export const properties: Property[] = [
  {
    slug: "769-santa-ray",
    name: "769 Santa Ray",
    street: "769 Santa Ray Ave",
    city: "Oakland, CA",
    type: "short-term",
    status: "available",
    summary:
      "Private lower-level suite with separate entrance, designed for comfortable short stays in Oakland.",
    description:
      "Our Santa Ray suite is a private lower-level dwelling unit in a three-story home, with a separate entrance, dedicated living area, kitchen, and outdoor access. It's ideal for travelers looking for a clean, quiet East Bay base with convenient access to Oakland amenities.",
    heroImage: "/images/santa-ray/exterior-dusk.webp",
    gallery: [
      "/images/santa-ray/living-room.webp",
      "/images/santa-ray/rear-twilight.webp",
      "/images/santa-ray/lower-living.webp",
      "/images/santa-ray/deck-sunset.webp",
      "/images/santa-ray/patio-evening.webp",
      "/images/santa-ray/upper-landing.webp",
      "/images/santa-ray/dining-area.webp",
      "/images/santa-ray/fireplace-wide.webp",
      "/images/santa-ray/entry-patio.webp",
      "/images/santa-ray/patio-daytime.webp",
      "/images/santa-ray/garden-overview.webp",
      "/images/santa-ray/exterior-front.webp",
      "/images/santa-ray/gallery-1.webp",
      "/images/santa-ray/gallery-2.webp",
      "/images/santa-ray/gallery-3.webp",
      "/images/santa-ray/gallery-4.webp",
      "/images/santa-ray/gallery-5.webp",
      "/images/santa-ray/gallery-6.webp",
      "/images/santa-ray/gallery-7.webp",
      "/images/santa-ray/gallery-8.webp",
      "/images/santa-ray/gallery-9.webp",
      "/images/santa-ray/gallery-10.webp",
      "/images/santa-ray/gallery-11.webp",
      "/images/santa-ray/gallery-12.webp",
      "/images/santa-ray/gallery-13.webp",
      "/images/santa-ray/gallery-14.webp",
      "/images/santa-ray/gallery-15.webp",
      "/images/santa-ray/gallery-16.webp",
      "/images/santa-ray/gallery-17.webp",
      "/images/santa-ray/gallery-18.webp",
      "/images/santa-ray/gallery-19.webp",
      "/images/santa-ray/gallery-20.webp",
      "/images/santa-ray/gallery-21.webp",
      "/images/santa-ray/gallery-22.webp",
      "/images/santa-ray/gallery-23.webp",
      "/images/santa-ray/gallery-24.webp",
      "/images/santa-ray/gallery-25.webp",
      "/images/santa-ray/gallery-26.webp",
      "/images/santa-ray/gallery-27.webp",
      "/images/santa-ray/gallery-28.webp",
      "/images/santa-ray/gallery-29.webp",
      "/images/santa-ray/gallery-30.webp",
      "/images/santa-ray/gallery-31.webp",
    ],
    beds: 1,
    baths: 1,
    sqft: 900,
    features: [
      "Private entrance",
      "Dedicated bedroom + living room",
      "Full kitchen",
      "Outdoor access",
      "Fast Wi-Fi",
    ],
    ctaLabel: "Book on Airbnb",
    ctaHref: "https://www.airbnb.com/",
    highlight: true,
  },
  {
    slug: "2717-delaney-ct",
    name: "2717 Delaney Ct",
    street: "2717 Delaney Ct",
    city: "Castro Valley, CA",
    type: "long-term",
    status: "occupied",
    summary:
      "Beautiful long-term home in Castro Valley near downtown and BART. Currently occupied.",
    description:
      "2717 Delaney Ct is a professionally managed long-term rental in the heart of Castro Valley. The home is close to downtown amenities and within walking distance to Castro Valley BART, making it a strong fit for commuting households.",
    heroImage: "/images/delaney/hero.jpg",
    gallery: [
      "/images/delaney/gallery-1.jpg",
      "/images/delaney/gallery-2.jpg",
      "/images/delaney/gallery-3.jpg",
    ],
    beds: 4,
    baths: 3.5,
    features: [
      "Long-term lease",
      "Heart of Castro Valley location",
      "Walkable to Castro Valley BART",
      "Kitchen appliances included",
      "Pet-friendly policy options",
      "Professional property management",
      "Current tenant in place",
    ],
    ctaLabel: "Join Waitlist",
    ctaHref: "/#contact",
  },
  {
    slug: "20649-yeandle-ave",
    name: "20649 Yeandle Ave",
    street: "20649 Yeandle Ave",
    city: "Castro Valley, CA",
    type: "long-term",
    status: "occupied",
    summary:
      "Long-term rental home currently occupied. Accepting inquiries for future vacancy updates.",
    description:
      "20649 Yeandle Ave is a professionally maintained long-term rental home. The property is currently occupied and not available for immediate move-in.",
    heroImage: "/images/yeandle/hero.jpg",
    gallery: [
      "/images/yeandle/gallery-1.jpg",
      "/images/yeandle/gallery-2.jpg",
      "/images/yeandle/gallery-3.jpg",
    ],
    beds: 4,
    baths: 3,
    sqft: 2200,
    features: [
      "Long-term lease",
      "Large layout",
      "Professionally managed",
      "Currently occupied",
    ],
    ctaLabel: "Join Waitlist",
    ctaHref: "/#contact",
  },
];

export function getPropertyBySlug(slug: string) {
  return properties.find((item) => item.slug === slug);
}
