import SoftwareHero from "@/components/software/Hero";
import LogoStrip from "@/components/shared/LogoStrip";
import SoftwareAbout from "@/components/software/About";
import SoftwareServices from "@/components/software/Services";
import SoftwarePortfolio from "@/components/software/Portfolio";
import SoftwareProcess from "@/components/software/Process";
import SoftwareTechStack from "@/components/software/TechStack";
import SoftwarePricing from "@/components/software/Pricing";
import CTASection from "@/components/shared/CTASection";
import { createMetadata, serviceJsonLd } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Software Development",
  description:
    "Full-stack software development for Nigerian businesses and international clients. Web apps, mobile apps, and landing pages — built in Ibadan.",
  keywords: [
    "software development ibadan",
    "web development nigeria",
    "mobile app ibadan",
    "full stack developer ibadan",
    "website design nigeria",
  ],
  path: "/software",
});

export default function SoftwarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd({
              name: "Software Development",
              description:
                "Full-stack software development for Nigerian businesses and international clients. Web apps, mobile apps, and landing pages.",
              path: "/software",
            })
          ),
        }}
      />
      <SoftwareHero />
      <LogoStrip
        logos={[
          { name: "Startups" },
          { name: "SMEs" },
          { name: "Upwork" },
          { name: "Fiverr" },
          { name: "International Clients" },
          { name: "Nigerian Businesses" },
        ]}
        label="Clients we serve"
        accent="var(--color-teal)"
      />
      <SoftwareAbout />
      <SoftwareServices />
      <SoftwarePortfolio />
      <SoftwareProcess />
      <SoftwareTechStack />
      <SoftwarePricing />
      <CTASection
        heading="Ready to build something great?"
        subtext="Tell us about your project and let's get started."
        whatsappMessage="Hi AbitHub! I have a software project I'd like to discuss."
        defaultService="software"
        accentColor="var(--color-teal)"
      />
    </>
  );
}
