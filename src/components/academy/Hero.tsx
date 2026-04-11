"use client";

import { motion } from "framer-motion";

const WHATSAPP_URL =
  "https://wa.me/2348153853704?text=" +
  encodeURIComponent("Hi AbitHub! I'm interested in the Tech Academy.");

export default function AcademyHero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden px-5 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-0 h-[500px] w-[500px] rounded-full bg-[var(--color-orange)] opacity-[0.08] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm font-semibold uppercase tracking-widest text-[var(--color-orange)]"
        >
          Tech Academy
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-4xl font-black leading-[1.1] tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl"
        >
          Learn the skills that{" "}
          <span className="text-[var(--color-orange)]">actually matter</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)]"
        >
          Cohort-based software development training — maximum 10 students per
          cohort. Frontend, UI/UX Design, and Backend tracks. New cohort every
          3 months.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--color-orange)] px-8 text-base font-semibold text-[var(--bg)] transition-opacity hover:opacity-90"
          >
            Enrol Now
          </a>
          <a
            href="#pricing"
            className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--surface2)] px-8 text-base font-medium text-[var(--text)] transition-colors hover:border-[var(--color-orange)] hover:text-[var(--color-orange)]"
          >
            See Pricing
          </a>
        </motion.div>
      </div>
    </section>
  );
}
