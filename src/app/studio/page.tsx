import StudioHero from "@/components/studio/Hero";
import LogoStrip from "@/components/shared/LogoStrip";
import StudioAbout from "@/components/studio/About";
import StudioFeatures from "@/components/studio/StudioFeatures";
import StudioProcess from "@/components/studio/Process";
import StudioPricing from "@/components/studio/Pricing";
import CTASection from "@/components/shared/CTASection";
import { createMetadata, serviceJsonLd } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Content Studio",
  description:
    "Professional content studio in Soka (New Felele), Ibadan. Track lighting, ring lights, styled backdrops, props and furniture for photographers, content creators, and businesses.",
  keywords: [
    "content studio ibadan",
    "photo studio soka ibadan",
    "video studio ibadan",
    "rental studio ibadan",
    "photography studio nigeria",
  ],
  path: "/studio",
});

export default function StudioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd({
              name: "Content Studio",
              description:
                "Professional content studio in Soka (New Felele), Ibadan. Track lighting, ring lights, styled backdrops, props and furniture for photographers, content creators, and businesses.",
              path: "/studio",
            })
          ),
        }}
      />
      <StudioHero />
      <LogoStrip
        logos={[
          { name: "Photographers" },
          { name: "Content Creators" },
          { name: "Businesses" },
          { name: "Graduates" },
          { name: "YouTube Creators" },
          { name: "Fashion Brands" },
        ]}
        label="Who uses our studio"
        accent="var(--color-purple)"
      />
      <StudioAbout />
      <StudioFeatures />
      <StudioProcess />
      <StudioPricing />
      <CTASection
        heading="Ready to create stunning content?"
        subtext="Book the studio for your next shoot or event."
        whatsappMessage="Hi AbitHub! I'd like to book the content studio."
        defaultService="studio"
        accentColor="var(--color-purple)"
      />
    </>
  );
}
