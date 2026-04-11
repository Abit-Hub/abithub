"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";
import PricingCard from "@/components/shared/PricingCard";

const hotDeskTiers = [
  {
    name: "Daily Pass",
    price: "\u20A63,000",
    description: "Drop in for a full day of focused work.",
    features: [
      "Full-day access",
      "High-speed internet (55 Mbps)",
      "Solar power — no interruptions",
      "Professional environment",
    ],
  },
  {
    name: "Weekly Pass",
    price: "\u20A618,000",
    description: "A full week of productive workspace.",
    features: [
      "5-day access (Mon–Fri)",
      "High-speed internet (55 Mbps)",
      "Solar power — no interruptions",
      "Professional environment",
    ],
    featured: true,
  },
  {
    name: "Monthly Pass",
    price: "\u20A660,000",
    description: "Your dedicated workspace for the month.",
    features: [
      "Full month access",
      "High-speed internet (55 Mbps)",
      "Solar power — no interruptions",
      "Professional environment",
    ],
  },
];

const privateRoomTiers = [
  {
    name: "Per Hour",
    price: "\u20A63,000",
    description: "Quick meeting or focused solo session.",
    features: [
      "1-hour private room",
      "High-speed internet",
      "Power & climate control",
      "Quiet, enclosed space",
    ],
  },
  {
    name: "Half Day",
    price: "\u20A610,000",
    description: "4 hours of private workspace.",
    features: [
      "4-hour private room",
      "High-speed internet",
      "Power & climate control",
      "Quiet, enclosed space",
    ],
    featured: true,
  },
  {
    name: "Full Day",
    price: "\u20A618,000",
    description: "Full day in a private room.",
    features: [
      "8-hour private room",
      "High-speed internet",
      "Power & climate control",
      "Quiet, enclosed space",
    ],
  },
];

interface TierGroupProps {
  label: string;
  subtitle: string;
  tiers: typeof hotDeskTiers;
}

function TierGroup({ label, subtitle, tiers }: TierGroupProps) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <h3 className="text-xl font-bold text-[var(--text)]">{label}</h3>
        <p className="mt-1 text-sm text-[var(--text-muted)]">{subtitle}</p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tiers.map((tier, i) => (
          <PricingCard
            key={tier.name}
            {...tier}
            accent="var(--color-blue)"
            index={i}
          />
        ))}
      </div>
    </div>
  );
}

export default function CoworkingPricing() {
  return (
    <section id="pricing" className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Pricing"
          heading="Flexible workspace, clear pricing"
          subtext="No hidden fees. Pay for what you need — daily, weekly, or monthly."
          accent="var(--color-blue)"
        />

        <div className="mt-14 space-y-16">
          <TierGroup
            label="Hot Desk (Regular Workspace)"
            subtitle="Open seating in a shared professional environment."
            tiers={hotDeskTiers}
          />

          <TierGroup
            label="Private Room"
            subtitle="Enclosed space for meetings, calls, or focused solo work."
            tiers={privateRoomTiers}
          />
        </div>
      </div>
    </section>
  );
}
