"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    client: "Local Retail Brand",
    description:
      "Full-stack online store with Paystack integration, inventory management, and real-time order tracking.",
    tags: ["Next.js", "Paystack", "PostgreSQL"],
  },
  {
    title: "Business Dashboard",
    client: "Ibadan SME",
    description:
      "Custom analytics dashboard for tracking sales, customer engagement, and team performance across branches.",
    tags: ["React", "Node.js", "Chart.js"],
  },
  {
    title: "Booking & Scheduling App",
    client: "Service Provider",
    description:
      "Appointment booking system with automated reminders, calendar sync, and payment collection.",
    tags: ["React Native", "Firebase", "Twilio"],
  },
  {
    title: "Company Website",
    client: "Professional Services Firm",
    description:
      "SEO-optimised corporate website with lead capture forms, blog, and team directory.",
    tags: ["Next.js", "Tailwind CSS", "Resend"],
  },
];

export default function SoftwarePortfolio() {
  return (
    <section className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-[var(--color-teal)]">
            Our Work
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
            Projects we&apos;ve delivered
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--text-muted)]">
            Real solutions built for real businesses. Here&apos;s a sample of
            what we&apos;ve shipped.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-[var(--surface)] p-7"
            >
              {/* Placeholder image area */}
              <div className="flex h-44 items-center justify-center rounded-lg bg-[var(--bg)]">
                <ExternalLink
                  size={28}
                  className="text-[var(--surface2)] transition-colors group-hover:text-[var(--color-teal)]"
                />
              </div>

              <h3 className="mt-5 text-lg font-bold text-[var(--text)]">
                {project.title}
              </h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-teal)]">
                {project.client}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[var(--color-teal)]/10 px-3 py-1 text-xs font-medium text-[var(--color-teal)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
