"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";
import PricingCard from "@/components/shared/PricingCard";

const rentalTiers = [
  {
    name: "30 Minutes",
    price: "\u20A610,000",
    description: "Quick studio session — bring your own camera/photographer.",
    features: [
      "30-minute studio access",
      "All lighting included",
      "Backdrop options",
      "Bring your own camera/photographer",
    ],
  },
  {
    name: "1 Hour",
    price: "\u20A618,000",
    description: "Standard studio rental session.",
    features: [
      "1-hour studio access",
      "All lighting included",
      "Multiple backdrop options",
      "Bring your own camera/photographer",
    ],
    featured: true,
  },
  {
    name: "2 Hours",
    price: "\u20A630,000",
    description: "Extended studio session.",
    features: [
      "2-hour studio access",
      "All lighting included",
      "Unlimited backdrop changes",
      "Bring your own camera/photographer",
    ],
  },
  {
    name: "Half Day (4 Hours)",
    price: "\u20A650,000",
    description: "Half-day studio access for larger shoots.",
    features: [
      "4-hour studio access",
      "All lighting included",
      "Unlimited backdrop changes",
      "Bring your own camera/photographer",
    ],
  },
  {
    name: "Full Day (8 Hours)",
    price: "\u20A690,000",
    description: "Full-day studio rental.",
    features: [
      "8-hour studio access",
      "All lighting included",
      "Unlimited backdrop changes",
      "Bring your own camera/photographer",
    ],
  },
];

const portraitTiers = [
  {
    name: "Basic Portrait",
    price: "\u20A612,000",
    description: "1 outfit, 15–20 min session.",
    features: [
      "1 outfit",
      "15–20 minute session",
      "3 edited photos",
      "Basic retouching",
      "1–2 day delivery",
      "Photographer provided",
    ],
  },
  {
    name: "Standard Portrait",
    price: "\u20A618,000",
    description: "2 outfits, 25–35 min session.",
    features: [
      "2 outfits",
      "25–35 minute session",
      "5 edited photos",
      "Basic retouching",
      "2–3 day delivery",
      "Photographer provided",
    ],
    featured: true,
  },
  {
    name: "Premium Portrait",
    price: "\u20A625,000",
    description: "3 outfits, 45–60 min session.",
    features: [
      "3 outfits",
      "45–60 minute session",
      "8 edited photos",
      "Enhanced retouching",
      "2–3 day delivery",
      "Photographer provided",
    ],
  },
];

interface TierGroupProps {
  label: string;
  subtitle: string;
  tiers: typeof rentalTiers;
  note?: string;
  columns?: string;
}

function TierGroup({ label, subtitle, tiers, note, columns = "lg:grid-cols-3" }: TierGroupProps) {
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

      <div className={`grid gap-6 sm:grid-cols-2 ${columns}`}>
        {tiers.map((tier, i) => (
          <PricingCard
            key={tier.name}
            {...tier}
            accent="var(--color-studio)"
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
          accent="var(--color-studio)"
        />

        <div className="mt-14 space-y-16">
          <TierGroup
            label="Studio Rental (Bring Your Own Camera/Photographer)"
            subtitle="We provide the space, lighting, backdrops, and props — you bring your camera and photographer."
            tiers={rentalTiers}
            columns="lg:grid-cols-5"
          />

          <TierGroup
            label="Portrait Packages (Photographer Provided)"
            subtitle="Just show up — we provide the photographer, studio, and editing."
            tiers={portraitTiers}
          />

          {/* Walk-in & Add-ons */}
          <div className="grid gap-6 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-border bg-[var(--surface)] p-8"
            >
              <h3 className="text-xl font-bold text-[var(--text)]">
                Walk-in Per Picture
              </h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                No appointment needed — just walk in and shoot.
              </p>
              <div className="mt-5">
                <span className="text-3xl font-black text-[var(--color-studio)]">
                  {"\u20A6"}3,000
                </span>
                <span className="ml-1 text-sm text-[var(--text-muted)]">
                  per photo
                </span>
              </div>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Minimum 5 photos ({"\u20A6"}15,000 minimum spend)
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="rounded-2xl border border-border bg-[var(--surface)] p-8"
            >
              <h3 className="text-xl font-bold text-[var(--text)]">Add-ons</h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Available with any package or session.
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  { item: "Extra edited photo", price: "\u20A61,000" },
                  { item: "Extra outfit change", price: "\u20A62,000" },
                  { item: "Urgent delivery", price: "\u20A62,000" },
                  { item: "Heavy beauty retouching", price: "Priced on request" },
                ].map((addon) => (
                  <li
                    key={addon.item}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-[var(--text-muted)]">
                      {addon.item}
                    </span>
                    <span className="font-semibold text-[var(--color-studio)]">
                      {addon.price}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
