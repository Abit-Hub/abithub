import CoworkingHero from "@/components/coworking/Hero";
import LogoStrip from "@/components/shared/LogoStrip";
import CoworkingFeatures from "@/components/coworking/Features";
import CoworkingPricing from "@/components/coworking/Pricing";
import CTASection from "@/components/shared/CTASection";
import { createMetadata, serviceJsonLd } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Co-working Space",
  description:
    "Professional co-working space in Soka (New Felele), Ibadan. 55 Mbps internet, solar power, hot desks and private rooms for freelancers, remote workers, and entrepreneurs.",
  keywords: [
    "coworking space ibadan",
    "hot desk ibadan",
    "workspace soka ibadan",
    "remote work space ibadan",
    "office space ibadan",
  ],
  path: "/coworking",
});

export default function CoworkingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd({
              name: "Co-working Space",
              description:
                "Professional co-working space with 55 Mbps internet and solar power in Soka (New Felele), Ibadan. Hot desks and private rooms.",
              path: "/coworking",
            })
          ),
        }}
      />
      <CoworkingHero />
      <LogoStrip
        logos={[
          { name: "Freelancers" },
          { name: "Remote Workers" },
          { name: "Entrepreneurs" },
          { name: "Startups" },
          { name: "Content Creators" },
          { name: "Developers" },
        ]}
        label="Who works here"
        accent="var(--color-blue)"
      />
      <CoworkingFeatures />
      <CoworkingPricing />
      <CTASection
        heading="Ready to get some real work done?"
        subtext="55 Mbps internet, solar power, no distractions — just walk in or book ahead."
        whatsappMessage="Hi AbitHub! I'm interested in your co-working space."
        defaultService="coworking"
        accentColor="var(--color-blue)"
      />
    </>
  );
}
