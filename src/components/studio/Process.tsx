import SectionHeader from "@/components/shared/SectionHeader";
import ProcessSteps from "@/components/shared/ProcessSteps";

const steps = [
  {
    title: "Pick Your Package",
    description:
      "Choose from headshot sessions, portrait shoots, product photography, or full event coverage based on your needs.",
  },
  {
    title: "Book Your Slot",
    description:
      "Message us on WhatsApp with your preferred date and time. We'll confirm availability and lock in your session.",
  },
  {
    title: "Show Up & Shoot",
    description:
      "Arrive at our Soka, Ibadan studio. Backgrounds, lighting, and furniture are set up and ready for you.",
  },
  {
    title: "Create & Share",
    description:
      "Use the professional environment to create stunning content. Tag us when you share — we love seeing your work.",
  },
];

export default function StudioProcess() {
  return (
    <section className="border-t border-border px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="How It Works"
          heading="Book, show up, create"
          accent="var(--color-studio)"
        />
        <ProcessSteps steps={steps} accent="var(--color-studio)" />
      </div>
    </section>
  );
}
