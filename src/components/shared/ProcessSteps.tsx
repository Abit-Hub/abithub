"use client";

import { motion } from "framer-motion";

interface Step {
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: Step[];
  accent?: string;
}

export default function ProcessSteps({
  steps,
  accent = "var(--color-teal)",
}: ProcessStepsProps) {
  return (
    <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <motion.div
          key={step.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="relative"
        >
          <span
            className="text-5xl font-black opacity-20"
            style={{ color: accent }}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-2 text-lg font-bold text-[var(--text)]">
            {step.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
            {step.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
