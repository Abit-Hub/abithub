"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label?: string;
  heading: string;
  subtext?: string;
  accent?: string;
}

export default function SectionHeader({
  label,
  heading,
  subtext,
  accent = "var(--color-teal)",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      {label && (
        <span
          className="text-sm font-semibold uppercase tracking-widest"
          style={{ color: accent }}
        >
          {label}
        </span>
      )}
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
        {heading}
      </h2>
      {subtext && (
        <p className="mx-auto mt-4 max-w-2xl text-[var(--text-muted)]">
          {subtext}
        </p>
      )}
    </motion.div>
  );
}
