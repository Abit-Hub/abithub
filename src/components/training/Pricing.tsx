"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";
import PricingCard from "@/components/shared/PricingCard";

const tiers = [
  {
    name: "Computer Application Training",
    price: "From \u20A630,000",
    description: "Flexible schedule — learn at your own pace.",
    features: [
      "Computer fundamentals",
      "Microsoft Office Suite",
      "Internet & email",
      "CBT exam preparation",
      "Certificate of completion",
      "Registration fee: \u20A65,000 (applied to tuition)",
    ],
  },
  {
    name: "Software Development Training",
    price: "From \u20A6300,000",
    description: "3 months — 3 days/week, weekdays.",
    features: [
      "HTML & CSS",
      "JavaScript",
      "React",
      "Git & Version Control",
      "Real project deployment",
      "GitHub portfolio",
      "Certificate of completion",
      "Letter of recommendation",
      "Registration fee: \u20A610,000 (applied to tuition)",
    ],
    featured: true,
  },
];

const paymentPlans = [
  {
    name: "Full Payment",
    detail: "\u20A6300,000 upfront",
  },
  {
    name: "Split Plan",
    detail: "\u20A6180,000 upfront + \u20A6120,000 at Month 2",
  },
  {
    name: "Installment Plan",
    detail: "\u20A6120,000 + \u20A6100,000 + \u20A680,000",
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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:max-w-3xl lg:mx-auto">
          {tiers.map((tier, i) => (
            <PricingCard
              key={tier.name}
              {...tier}
              accent="var(--color-orange)"
              index={i}
            />
          ))}
        </div>

        {/* Payment Plans for Software Development */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-14 max-w-3xl rounded-2xl border border-border bg-[var(--surface)] p-8"
        >
          <h3 className="text-lg font-bold text-[var(--text)]">
            Payment Plans — Software Development
          </h3>
          <p className="mt-2 text-sm text-[var(--text-muted)]">
            Choose the option that works best for you.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {paymentPlans.map((plan) => (
              <div
                key={plan.name}
                className="rounded-xl border border-border bg-[var(--bg)] p-5"
              >
                <p className="text-sm font-semibold text-[var(--color-orange)]">
                  {plan.name}
                </p>
                <p className="mt-2 text-sm text-[var(--text-muted)]">
                  {plan.detail}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
