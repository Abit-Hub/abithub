"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const shoots = [
  {
    title: "Professional Headshots",
    client: "Corporate Team",
    description:
      "Clean, professional headshots for a team of 12 — delivered in 24 hours. White and grey backdrop options used.",
  },
  {
    title: "Product Photography",
    client: "Fashion Brand",
    description:
      "Catalogue-ready product shots for an Ibadan fashion label. Multiple outfit setups across 3 backgrounds.",
  },
  {
    title: "Content Creator Session",
    client: "YouTube Creator",
    description:
      "Full-day studio session for video thumbnails, Instagram reels, and promotional material.",
  },
  {
    title: "Graduation Portraits",
    client: "University Graduate",
    description:
      "Studio portraits with gown, cap, and multiple styled background options. Prints and digital delivery.",
  },
];

export default function StudioPortfolio() {
  return (
    <section className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-[var(--color-studio)]">
            Studio Shots
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
            What our space makes possible
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--text-muted)]">
            A look at the kind of work created in our studio. Your equipment,
            our space, great results.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {shoots.map((shoot, i) => (
            <motion.div
              key={shoot.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-[var(--surface)] p-7"
            >
              {/* Placeholder image area */}
              <div className="flex h-44 items-center justify-center rounded-lg bg-[var(--bg)]">
                <Camera
                  size={28}
                  className="text-[var(--surface2)] transition-colors group-hover:text-[var(--color-studio)]"
                />
              </div>

              <h3 className="mt-5 text-lg font-bold text-[var(--text)]">
                {shoot.title}
              </h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-studio)]">
                {shoot.client}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                {shoot.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
