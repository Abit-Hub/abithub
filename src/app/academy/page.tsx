import AcademyHero from "@/components/academy/Hero";
import LogoStrip from "@/components/shared/LogoStrip";
import AcademyAbout from "@/components/academy/About";
import AcademyTracks from "@/components/academy/Tracks";
import AcademyProcess from "@/components/academy/Process";
import AcademyPricing from "@/components/academy/Pricing";
import CTASection from "@/components/shared/CTASection";
import { createMetadata, serviceJsonLd } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Tech Academy",
  description:
    "Cohort-based software development training in Ibadan. Frontend, UI/UX Design, and Backend tracks — 3-month programmes with maximum 10 students per cohort.",
  keywords: [
    "tech academy ibadan",
    "software development training ibadan",
    "coding bootcamp ibadan",
    "frontend development course nigeria",
    "UI UX design course ibadan",
  ],
  path: "/academy",
});

export default function AcademyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd({
              name: "Abit Hub Tech Academy",
              description:
                "Cohort-based software development training. Frontend, UI/UX Design, and Backend tracks — 3-month programmes with maximum 10 students per cohort in Ibadan.",
              path: "/academy",
            })
          ),
        }}
      />
      <AcademyHero />
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
      <AcademyAbout />
      <AcademyTracks />
      <AcademyProcess />
      <AcademyPricing />
      <CTASection
        heading="Ready to start your tech career?"
        subtext="Join the next cohort — maximum 10 students, personal attention guaranteed."
        whatsappMessage="Hi AbitHub! I'm interested in the Tech Academy."
        defaultService="academy"
        accentColor="var(--color-orange)"
      />
    </>
  );
}
