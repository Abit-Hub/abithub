import SectionHeader from "@/components/shared/SectionHeader";
import PricingCard from "@/components/shared/PricingCard";

const tiers = [
  {
    name: "Landing Page",
    price: "$500",
    description: "Single-page website to showcase your brand or product.",
    features: [
      "Responsive single-page design",
      "Up to 5 sections",
      "Contact form integration",
      "SEO basics & meta tags",
      "Mobile-optimised",
      "1 round of revisions",
    ],
  },
  {
    name: "Business Website",
    price: "$2,000",
    description: "Multi-page website for established businesses.",
    features: [
      "Up to 8 pages",
      "Custom design & branding",
      "Blog or news section",
      "Analytics integration",
      "SEO optimisation",
      "3 rounds of revisions",
      "30-day post-launch support",
    ],
    featured: true,
  },
  {
    name: "Web Application",
    price: "$5,000+",
    description: "Custom web app with backend, auth, and dashboards.",
    features: [
      "Custom architecture & design",
      "User authentication & roles",
      "Database design & API",
      "Admin dashboard",
      "Payment integration (Paystack)",
      "Ongoing revision cycles",
      "60-day post-launch support",
    ],
  },
  {
    name: "Mobile App",
    price: "$20,000",
    description: "Cross-platform mobile app for iOS and Android.",
    features: [
      "iOS & Android (React Native)",
      "UI/UX design included",
      "Push notifications",
      "Backend & API development",
      "App store submission",
      "90-day post-launch support",
    ],
  },
];

export default function SoftwarePricing() {
  return (
    <section id="pricing" className="border-t border-border px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Pricing"
          heading="Transparent pricing, no surprises"
          subtext="Clear tiers so you know exactly what you're getting. Custom quotes available for larger projects."
          accent="var(--color-teal)"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier, i) => (
            <PricingCard
              key={tier.name}
              {...tier}
              accent="var(--color-teal)"
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
