"use client";

import { motion } from "framer-motion";

const categories = [
  {
    name: "Frontend",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native"],
  },
  {
    name: "Backend",
    tools: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST & GraphQL"],
  },
  {
    name: "Cloud & DevOps",
    tools: ["Vercel", "AWS", "Docker", "GitHub Actions", "Cloudflare"],
  },
  {
    name: "Payments & Integrations",
    tools: ["Paystack", "Stripe", "Resend", "Google Analytics", "WhatsApp API"],
  },
];

export default function SoftwareTechStack() {
  return (
    <section className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-[var(--color-teal)]">
            Tech Stack
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
            Built with modern tools
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-teal)]">
                {cat.name}
              </h3>
              <ul className="mt-4 space-y-2">
                {cat.tools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-lg border border-border bg-[var(--surface)] px-4 py-2.5 text-sm text-[var(--text-muted)]"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
