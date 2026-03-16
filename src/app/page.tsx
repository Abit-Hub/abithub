import Hero from "@/components/home/Hero";
import LogoStrip from "@/components/shared/LogoStrip";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyAbitHub from "@/components/home/WhyAbitHub";
import CTASection from "@/components/shared/CTASection";
import { organizationJsonLd, localBusinessJsonLd } from "@/lib/metadata";

const partners = [
  { name: "Local SMEs" },
  { name: "Startups" },
  { name: "Universities" },
  { name: "Freelance Clients" },
  { name: "Corporate Teams" },
  { name: "Content Creators" },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd()),
        }}
      />
      <Hero />
      <LogoStrip logos={partners} label="Who we work with" />
      <ServicesGrid />
      <WhyAbitHub />
      <CTASection
        heading="Ready to bring your idea to life?"
        subtext="Whether you need software built, skills sharpened, or content created — we're here for you."
        whatsappMessage="Hi AbitHub! I'd like to learn more about your services."
      />
    </>
  );
}
