"use client";

import { motion } from "framer-motion";
import { Wifi, Zap, Monitor, Camera } from "lucide-react";

const features = [
  {
    icon: Wifi,
    title: "Fast, Reliable Internet",
    description:
      "High-speed broadband built for remote work — video calls, large uploads, and cloud tools run without interruption.",
  },
  {
    icon: Zap,
    title: "Uninterrupted Power",
    description:
      "Solar-backed electricity keeps you working through any outage. When NEPA goes, you keep going.",
  },
  {
    icon: Monitor,
    title: "Professional Environment",
    description:
      "Quiet, air-conditioned workspace designed for focus. Hot desks and private rooms available.",
  },
  {
    icon: Camera,
    title: "Content Studio Access",
    description:
      "Need photos or video? Book the on-site content studio separately for your creative projects.",
  },
];

export default function CoworkingFeatures() {
  return (
    <section className="border-t border-border px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-[var(--surface)] p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-blue)]/10">
                <feature.icon size={24} className="text-[var(--color-blue)]" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-[var(--text)]">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
