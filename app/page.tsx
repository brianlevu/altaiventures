import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { PropertiesSection } from "@/components/properties-section";
import { PillarsSection } from "@/components/pillars-section";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { OrganizationJsonLd } from "@/components/structured-data";

export const metadata: Metadata = {
  title:
    "Altai Ventures | East Bay Rental Homes — Oakland & Castro Valley",
  description:
    "Altai Ventures is a family-owned real estate portfolio offering short-term Airbnb rentals in Oakland and long-term houses for rent in Castro Valley, CA. Discover thoughtfully managed East Bay rental homes.",
  alternates: {
    canonical: "https://altaiventures.co",
  },
  openGraph: {
    title: "Altai Ventures | East Bay Rental Homes — Oakland & Castro Valley",
    description:
      "Short-term Airbnb rental in Oakland and long-term homes for rent in Castro Valley. Family-owned East Bay property management.",
    url: "https://altaiventures.co",
  },
};

export default function Home() {
  return (
    <>
      <OrganizationJsonLd />
      <Hero />
      <PropertiesSection />
      <PillarsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
