import SectionHeader from "@/components/shared/SectionHeader";
import PricingCard from "@/components/shared/PricingCard";

const tiers = [
  {
    name: "Basic Headshots",
    price: "\u20A68,000",
    description: "Quick professional headshot session.",
    features: [
      "30-minute studio access",
      "1 background setup",
      "Studio lighting included",
      "Bring your own camera/photographer",
      "Perfect for LinkedIn & CVs",
    ],
  },
  {
    name: "Portrait Session",
    price: "\u20A625,000",
    description: "Full portrait shoot with multiple setups.",
    features: [
      "2-hour studio access",
      "Up to 3 background changes",
      "Full lighting setup",
      "Props & furniture included",
      "Individual or small group",
      "Ideal for content creators",
    ],
    featured: true,
  },
  {
    name: "Product Photography",
    price: "\u20A640,000",
    description: "Showcase your products professionally.",
    features: [
      "3-hour studio access",
      "Multiple background options",
      "Product staging assistance",
      "Flat-lay & lifestyle setups",
      "Perfect for e-commerce",
      "Up to 20 products",
    ],
  },
  {
    name: "Full Event Coverage",
    price: "\u20A6120,000",
    description: "Full-day studio hire for events & campaigns.",
    features: [
      "Full-day access (8 hours)",
      "All backgrounds available",
      "Complete lighting & props",
      "Multiple setup changes",
      "Team & group shoots",
      "Campaign & brand content",
    ],
  },
];

export default function StudioPricing() {
  return (
    <section id="pricing" className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Pricing"
          heading="Affordable studio sessions"
          subtext="Professional studio quality without the Lagos price tag. Book the package that fits your needs."
          accent="var(--color-purple)"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier, i) => (
            <PricingCard
              key={tier.name}
              {...tier}
              accent="var(--color-purple)"
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
