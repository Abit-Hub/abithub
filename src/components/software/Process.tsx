import SectionHeader from "@/components/shared/SectionHeader";
import ProcessSteps from "@/components/shared/ProcessSteps";

const steps = [
  {
    title: "Discovery",
    description:
      "We discuss your goals, target users, and requirements. You get a clear scope and transparent quote — no surprises.",
  },
  {
    title: "Design & Prototype",
    description:
      "We create wireframes and visual designs for your approval before writing a single line of code.",
  },
  {
    title: "Development",
    description:
      "We build your software with regular updates and demos so you can see progress and give feedback along the way.",
  },
  {
    title: "Launch & Support",
    description:
      "We deploy, test, and hand over. Ongoing maintenance and support packages available to keep things running smoothly.",
  },
];

export default function SoftwareProcess() {
  return (
    <section className="border-t border-border px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="How We Work"
          heading="From idea to launch in four steps"
          accent="var(--color-teal)"
        />
        <ProcessSteps steps={steps} accent="var(--color-teal)" />
      </div>
    </section>
  );
}
