import SectionHeader from "@/components/shared/SectionHeader";
import PricingCard from "@/components/shared/PricingCard";

const tiers = [
  {
    name: "Individual",
    price: "\u20A628,000",
    description: "8-week program for a single learner.",
    features: [
      "Choose IT Skills or Software Dev track",
      "8 weeks of hands-on training",
      "Project-based curriculum",
      "Small class sizes",
      "Certificate of completion",
      "Post-training support",
    ],
  },
  {
    name: "Corporate Basic",
    price: "\u20A650,000",
    description: "Per person, team training package.",
    features: [
      "Minimum 5 participants",
      "Customised curriculum",
      "Flexible scheduling",
      "On-site or at AbitHub",
      "Progress reports per participant",
      "Dedicated instructor",
    ],
    featured: true,
  },
  {
    name: "Corporate Premium",
    price: "\u20A6100,000",
    description: "Per person, intensive executive package.",
    features: [
      "All Corporate Basic features",
      "1-on-1 mentoring sessions",
      "Extended 12-week curriculum",
      "Priority scheduling",
      "Custom project development",
      "6-month post-training support",
    ],
  },
];

export default function TrainingPricing() {
  return (
    <section id="pricing" className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Pricing"
          heading="Invest in your future"
          subtext="Affordable, transparent pricing for individuals and teams. No hidden fees."
          accent="var(--color-orange)"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <PricingCard
              key={tier.name}
              {...tier}
              accent="var(--color-orange)"
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
