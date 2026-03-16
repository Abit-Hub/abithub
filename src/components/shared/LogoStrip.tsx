"use client";

import { motion } from "framer-motion";

interface Logo {
  name: string;
}

interface LogoStripProps {
  logos: Logo[];
  label?: string;
  accent?: string;
}

export default function LogoStrip({
  logos,
  label = "Trusted by",
  accent = "var(--color-teal)",
}: LogoStripProps) {
  // Double the logos for seamless infinite scroll
  const doubled = [...logos, ...logos];

  return (
    <section className="overflow-hidden px-5 py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]"
        >
          {label}
        </motion.p>

        <div className="relative mt-8">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--bg)] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--bg)] to-transparent" />

          <div className="flex animate-scroll gap-12">
            {doubled.map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="flex shrink-0 items-center justify-center"
              >
                <div
                  className="flex h-10 items-center rounded-md border border-border px-5 py-2 text-sm font-semibold text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
                  style={{
                    borderColor: `color-mix(in srgb, ${accent} 20%, transparent)`,
                  }}
                >
                  {logo.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
