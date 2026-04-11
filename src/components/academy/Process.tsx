import SectionHeader from "@/components/shared/SectionHeader";
import ProcessSteps from "@/components/shared/ProcessSteps";

const steps = [
  {
    title: "Choose Your Track",
    description:
      "Pick Frontend Development, UI/UX Design, or Backend Development — or go full stack with both Frontend and Backend.",
  },
  {
    title: "Pay Your Commitment Fee",
    description:
      "Secure your cohort slot with a commitment fee of \u20A650,000–\u20A6100,000. It\u2019s applied to your total tuition — not an extra charge.",
  },
  {
    title: "Learn by Building",
    description:
      "Hands-on, project-based sessions. Work on real projects with guidance from experienced instructors.",
  },
  {
    title: "Graduate & Grow",
    description:
      "Complete your track with a certificate, portfolio of deployed projects, GitHub profile, and a letter of recommendation.",
  },
];

export default function AcademyProcess() {
  return (
    <section className="border-t border-border px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="How It Works"
          heading="Your learning journey"
          accent="var(--color-orange)"
        />
        <ProcessSteps steps={steps} accent="var(--color-orange)" />
      </div>
    </section>
  );
}
