"use client";

import { motion } from "framer-motion";
import { Eye, Target, Sparkles } from "lucide-react";

const cards = [
  {
    icon: Eye,
    title: "Vision",
    description:
      "To be Ibadan's go-to destination for practical tech education — producing graduates who can build real products from day one.",
  },
  {
    icon: Target,
    title: "Mission",
    description:
      "Deliver hands-on, project-based training that bridges the gap between theory and employment in the Nigerian tech industry.",
  },
  {
    icon: Sparkles,
    title: "What Makes Us Different",
    description:
      "Real-world projects, not just tutorials. We address local challenges — power management, data costs, and practical tooling — so you learn in context.",
  },
];

export default function TrainingAbout() {
  return (
    <section className="border-t border-border px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-[var(--surface)] p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-orange)]/10">
                <card.icon size={24} className="text-[var(--color-orange)]" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-[var(--text)]">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
