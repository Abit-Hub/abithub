"use client";

import { motion } from "framer-motion";
import { Image as ImageIcon, Lightbulb, Armchair, Maximize, Users, Clock } from "lucide-react";

const features = [
  {
    icon: ImageIcon,
    title: "5 Professional Backgrounds",
    description:
      "Multiple backdrop options for variety in your shoots — solid colours, textured, and themed setups. Expanding capacity regularly.",
  },
  {
    icon: Lightbulb,
    title: "Studio Lighting",
    description:
      "Professional lighting setups available. Softboxes, ring lights, and key lighting to make every shot look its best.",
  },
  {
    icon: Armchair,
    title: "Furniture & Props",
    description:
      "Chairs, tables, stools, and decorative props included. Set the scene without renting separately.",
  },
  {
    icon: Maximize,
    title: "Spacious Layout",
    description:
      "Enough room for individual portraits, small group shoots, and product photography. Comfortable working space.",
  },
  {
    icon: Users,
    title: "Bring Your Own Equipment",
    description:
      "Use your own camera, lenses, and gear. We provide the environment — you bring the talent and tools.",
  },
  {
    icon: Clock,
    title: "Flexible Booking",
    description:
      "Book by the hour or for full-day sessions. Weekend and evening slots available to fit your schedule.",
  },
];

export default function StudioFeatures() {
  return (
    <section className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-[var(--color-purple)]">
            What&apos;s Included
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
            Everything you need to create
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--text-muted)]">
            A fully equipped space so you can focus on creating great content.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-[var(--surface)] p-7"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-purple)]/10">
                <feature.icon size={20} className="text-[var(--color-purple)]" />
              </div>
              <h3 className="mt-4 text-base font-bold text-[var(--text)]">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
