"use client";

import { motion } from "framer-motion";
import { Lightbulb, Lamp, PanelTop, BookOpen, Armchair, Image as ImageIcon } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Track & Ring Lights",
    description:
      "6 track lights and 2 ring lights — versatile lighting setups for any type of shoot.",
  },
  {
    icon: Lamp,
    title: "LED Ambient Lighting",
    description:
      "LED ambient strip lighting to set the mood and add depth to your shots.",
  },
  {
    icon: PanelTop,
    title: "Feature Walls",
    description:
      "Panelled feature walls for clean, modern backdrops that elevate every frame.",
  },
  {
    icon: BookOpen,
    title: "Props & Decor",
    description:
      "Styled shelves with decorative props — ready-made set dressing for your shoots.",
  },
  {
    icon: Armchair,
    title: "Furniture",
    description:
      "Round table, 3-seater sofa, and chair. Comfortable, styled pieces for portraits and content.",
  },
  {
    icon: ImageIcon,
    title: "Backdrops & Tripod",
    description:
      "Multiple backdrop options plus a tripod stand. Everything you need to get the perfect shot.",
  },
];

export default function StudioFeatures() {
  return (
    <section className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-[var(--color-studio)]">
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
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-studio)]/10">
                <feature.icon size={20} className="text-[var(--color-studio)]" />
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
