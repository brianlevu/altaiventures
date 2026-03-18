import { Hero } from "@/components/hero";
import { PropertiesSection } from "@/components/properties-section";
import { PillarsSection } from "@/components/pillars-section";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <Hero />
      <PropertiesSection />
      <PillarsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
