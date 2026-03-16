import TrainingHero from "@/components/training/Hero";
import LogoStrip from "@/components/shared/LogoStrip";
import TrainingAbout from "@/components/training/About";
import TrainingTracks from "@/components/training/Tracks";
import TrainingProcess from "@/components/training/Process";
import TrainingPricing from "@/components/training/Pricing";
import CTASection from "@/components/shared/CTASection";
import { createMetadata, serviceJsonLd } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Training",
  description:
    "IT skills, digital literacy, and software development training in Ibadan. 8-week programs for individuals and corporate teams.",
  keywords: [
    "tech training ibadan",
    "coding bootcamp nigeria",
    "IT skills ibadan",
    "software development training ibadan",
    "learn to code nigeria",
  ],
  path: "/training",
});

export default function TrainingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd({
              name: "Tech Training",
              description:
                "IT skills, digital literacy, and software development training. 8-week programs for individuals and corporate teams in Ibadan.",
              path: "/training",
            })
          ),
        }}
      />
      <TrainingHero />
      <LogoStrip
        logos={[
          { name: "Students" },
          { name: "Career Changers" },
          { name: "Corporate Teams" },
          { name: "Universities" },
          { name: "Developers" },
          { name: "Businesses" },
        ]}
        label="Who trains with us"
        accent="var(--color-orange)"
      />
      <TrainingAbout />
      <TrainingTracks />
      <TrainingProcess />
      <TrainingPricing />
      <CTASection
        heading="Ready to level up your skills?"
        subtext="Enrol as an individual or bring your team for corporate training."
        whatsappMessage="Hi AbitHub! I'm interested in your training programs."
        defaultService="training"
        accentColor="var(--color-orange)"
      />
    </>
  );
}
