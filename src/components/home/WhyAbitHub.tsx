"use client";

import { motion } from "framer-motion";
import { MapPin, BadgeCheck, Layers, Heart } from "lucide-react";

const differentiators = [
  {
    icon: BadgeCheck,
    title: "Affordable Excellence",
    description:
      "Quality without Lagos prices. Transparent pricing on every service — no hidden fees, no 'contact for quote' vagueness.",
  },
  {
    icon: MapPin,
    title: "Rooted in Ibadan",
    description:
      "Located in Soka, Ibadan. We understand the local market, power challenges, and data costs — and we build around them.",
  },
  {
    icon: Layers,
    title: "Triple Ecosystem",
    description:
      "Software development, tech training, and a content studio — all under one roof. Cross-pollinate skills and resources.",
  },
  {
    icon: Heart,
    title: "Truthfulness First",
    description:
      "Honest timelines, realistic pricing, and straightforward communication. Our foundational business principle.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1 },
  }),
};

export default function WhyAbitHub() {
  return (
    <section className="border-t border-border px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
            Why AbitHub?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--text-muted)]">
            We exist to make quality tech accessible in Ibadan and beyond.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={itemVariants}
              className="text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-teal)]/10">
                <item.icon size={26} className="text-[var(--color-teal)]" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-[var(--text)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
