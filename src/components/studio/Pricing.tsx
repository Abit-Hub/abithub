"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";
import PricingCard from "@/components/shared/PricingCard";

const walkInTiers = [
  {
    name: "Single Photo",
    price: "\u20A63,000",
    description: "1 outfit, 1 background, 1 edited photo.",
    features: [
      "1 outfit",
      "1 background",
      "1 edited photo",
    ],
  },
  {
    name: "3 Photos",
    price: "\u20A68,000",
    description: "1 outfit, up to 2 backgrounds.",
    features: [
      "1 outfit",
      "Up to 2 backgrounds",
      "3 edited photos",
    ],
  },
  {
    name: "5 Photos",
    price: "\u20A612,000",
    description: "1-2 outfits, multiple backgrounds.",
    features: [
      "1-2 outfits",
      "Multiple backgrounds",
      "5 edited photos",
    ],
  },
];

const rentalTiers = [
  {
    name: "Quick Shot",
    price: "\u20A610,000",
    description: "30-minute studio session.",
    features: [
      "30-minute studio access",
      "1 background setup",
      "All lighting included",
      "Bring your own camera/photographer",
    ],
  },
  {
    name: "Standard Session",
    price: "\u20A618,000",
    description: "1-hour studio session.",
    features: [
      "1-hour studio access",
      "Up to 2 backgrounds",
      "All lighting included",
      "Bring your own camera/photographer",
    ],
    featured: true,
  },
  {
    name: "Extended Session",
    price: "\u20A630,000",
    description: "2-hour studio session.",
    features: [
      "2-hour studio access",
      "Unlimited background changes",
      "All lighting included",
      "Bring your own camera/photographer",
    ],
  },
];

const photographerTiers = [
  {
    name: "Portrait Session",
    price: "\u20A630,000",
    description: "1-hour session with partner photographer.",
    features: [
      "1-hour session",
      "Professional photographer provided",
      "Full lighting setup",
      "Multiple backgrounds",
    ],
  },
  {
    name: "Baby & Family Session",
    price: "\u20A645,000",
    description: "1.5-hour session with partner photographer.",
    features: [
      "1.5-hour session",
      "Professional photographer provided",
      "Family-friendly setup",
      "Multiple backgrounds & props",
    ],
  },
  {
    name: "Content Creator Batch",
    price: "\u20A655,000",
    description: "2-hour session with partner photographer.",
    features: [
      "2-hour session",
      "Professional photographer provided",
      "Multiple outfit changes",
      "Batch content for social media",
    ],
  },
];

interface TierGroupProps {
  label: string;
  subtitle: string;
  tiers: typeof walkInTiers;
  note?: string;
}

function TierGroup({ label, subtitle, tiers, note }: TierGroupProps) {
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
            accent="var(--color-purple)"
            index={i}
          />
        ))}
      </div>

      {note && (
        <p className="mt-4 text-xs text-[var(--text-muted)] italic">{note}</p>
      )}
    </div>
  );
}

export default function StudioPricing() {
  return (
    <section id="pricing" className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Pricing"
          heading="Affordable studio sessions"
          subtext="Professional studio quality without the Lagos price tag. Choose the option that fits your needs."
          accent="var(--color-purple)"
        />

        <div className="mt-14 space-y-16">
          <TierGroup
            label="Walk-in Per Picture"
            subtitle="Client brings own photographer/camera. Extra outfit change: \u20A61,500."
            tiers={walkInTiers}
          />

          <TierGroup
            label="Studio Rental"
            subtitle="Bring your own camera and photographer — we provide the space and lighting."
            tiers={rentalTiers}
          />

          <TierGroup
            label="With Partner Photographer"
            subtitle="We provide the photographer — just show up and shoot."
            tiers={photographerTiers}
            note="Full-service photography (LED 800W, softbox & professional camera) — coming soon."
          />
        </div>
      </div>
    </section>
  );
}
