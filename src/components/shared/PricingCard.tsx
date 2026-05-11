"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  accent?: string;
  featured?: boolean;
  index?: number;
  from?: boolean;
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  accent = "var(--color-teal)",
  featured = false,
  index = 0,
  from = false,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`relative flex flex-col rounded-2xl border p-8 ${
        featured ? "border-(--accent) bg-surface" : "border-border bg-surface"
      }`}
      style={{ "--accent": accent } as React.CSSProperties}
    >
      {featured && (
        <span
          className="absolute -top-3 left-6 rounded-full px-3 py-1 text-xs font-semibold text-background"
          style={{ backgroundColor: accent }}
        >
          Most Popular
        </span>
      )}

      <h3 className="text-lg font-bold text-foreground">{name}</h3>
      <p className="mt-1 text-sm text-muted">{description}</p>

      <div className="mt-5">
        {from && (
          <span className="block text-xs font-medium uppercase tracking-widest text-muted">
            starting from
          </span>
        )}
        <span className="text-3xl font-black" style={{ color: accent }}>
          {price}
        </span>
      </div>

      <ul className="mt-6 flex-1 space-y-3">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2 text-sm text-muted"
          >
            <Check
              size={16}
              className="mt-0.5 shrink-0"
              style={{ color: accent }}
            />
            {feature}
          </li>
        ))}
      </ul>

      <a
        href={`https://wa.me/2348153853704?text=${encodeURIComponent(`Hi AbitHub! I'm interested in the ${name} package.`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-8 inline-flex h-11 items-center justify-center rounded-full text-sm font-semibold transition-opacity hover:opacity-90 ${
          featured
            ? "text-background"
            : "border border-(--accent) text-(--accent)"
        }`}
        style={featured ? { backgroundColor: accent } : undefined}
      >
        Get Started
      </a>
    </motion.div>
  );
}
