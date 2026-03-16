import SectionHeader from "@/components/shared/SectionHeader";
import ProcessSteps from "@/components/shared/ProcessSteps";

const steps = [
  {
    title: "Choose Your Track",
    description:
      "Pick IT Skills & Digital Literacy or Software Development based on your goals and experience level.",
  },
  {
    title: "Enrol & Onboard",
    description:
      "Register via WhatsApp or our form. Get your schedule, materials, and access to the learning environment.",
  },
  {
    title: "Learn by Building",
    description:
      "8 weeks of hands-on, project-based sessions. Work on real projects with guidance from experienced instructors.",
  },
  {
    title: "Graduate & Grow",
    description:
      "Complete your program with a portfolio of real work. Get support transitioning into freelancing or employment.",
  },
];

export default function TrainingProcess() {
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
