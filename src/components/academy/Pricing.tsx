"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";
import PricingCard from "@/components/shared/PricingCard";

const tiers = [
  {
    name: "Frontend Development",
    price: "\u20A6350,000",
    description: "3 months — 3 days/week, weekdays.",
    features: [
      "HTML5, CSS3, JavaScript (ES6+)",
      "React, React Router, Tailwind CSS",
      "Git & GitHub",
      "Deployment (Vercel/Netlify)",
      "Capstone project",
      "Certificate of completion",
      "Real project portfolio (min. 3 projects)",
      "Letter of recommendation",
    ],
  },
  {
    name: "UI/UX Design",
    price: "\u20A6350,000",
    description: "3 months — 3 days/week, weekdays.",
    features: [
      "Design thinking & user research",
      "Figma fundamentals to advanced",
      "Typography & colour theory",
      "Design systems & components",
      "High-fidelity prototyping",
      "Certificate of completion",
      "Portfolio building",
      "Letter of recommendation",
    ],
  },
  {
    name: "Backend Development",
    price: "\u20A6400,000",
    description: "3 months — 3 days/week, weekdays.",
    features: [
      "Node.js, Express.js, REST APIs",
      "PostgreSQL, MongoDB, Prisma",
      "JWT authentication & authorisation",
      "Paystack API integration",
      "Testing with Jest",
      "Certificate of completion",
      "Real project portfolio (min. 3 projects)",
      "Letter of recommendation",
    ],
  },
  {
    name: "Full Stack (Frontend + Backend)",
    price: "\u20A6650,000",
    description: "6 months — save \u20A6100,000 vs separate enrolment.",
    features: [
      "Complete Frontend track (months 1–3)",
      "Complete Backend track (months 4–6)",
      "Full-stack capstone project",
      "Certificate of completion",
      "Real project portfolio (min. 3 projects)",
      "GitHub profile with live projects",
      "Letter of recommendation",
    ],
    featured: true,
  },
];

export default function AcademyPricing() {
  return (
    <section id="pricing" className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Pricing"
          heading="Invest in your future"
          subtext="Transparent pricing — no hidden fees. Maximum 10 students per cohort."
          accent="var(--color-orange)"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier, i) => (
            <PricingCard
              key={tier.name}
              {...tier}
              accent="var(--color-orange)"
              index={i}
            />
          ))}
        </div>

        {/* Payment & Commitment Fee Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-14 max-w-3xl rounded-2xl border border-border bg-[var(--surface)] p-8"
        >
          <h3 className="text-lg font-bold text-[var(--text)]">
            How Payment Works
          </h3>
          <p className="mt-2 text-sm text-[var(--text-muted)]">
            Flexible payment — no lump sum required upfront.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-[var(--bg)] p-5">
              <p className="text-sm font-semibold text-[var(--color-orange)]">
                Commitment Fee
              </p>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                {"\u20A6"}50,000–{"\u20A6"}100,000 to secure your cohort slot.
                Applied to your total tuition — not an extra charge.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-[var(--bg)] p-5">
              <p className="text-sm font-semibold text-[var(--color-orange)]">
                Balance
              </p>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Paid on an agreed schedule — discussed individually to fit your
                situation.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-border bg-[var(--bg)] p-5">
            <p className="text-sm font-semibold text-[var(--color-orange)]">
              What Every Graduate Receives
            </p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {[
                "Certificate of completion",
                "Real project portfolio (min. 3 deployed projects)",
                "GitHub profile with live projects",
                "Letter of recommendation from Abit Hub Tech Academy",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-[var(--text-muted)]"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-orange)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
