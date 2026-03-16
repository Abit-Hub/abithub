"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, Layout, Server, ShoppingCart, Wrench } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Landing Pages & Websites",
    description:
      "High-converting landing pages and business websites that look great on every device. SEO-optimised and fast-loading.",
  },
  {
    icon: Globe,
    title: "Web Applications",
    description:
      "Custom web apps with dashboards, user management, payments, and more. Built with modern frameworks for speed and reliability.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Cross-platform mobile applications for iOS and Android. Native-feeling experiences with shared codebases.",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description:
      "Robust backend systems, REST and GraphQL APIs, database design, and cloud infrastructure to power your applications.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description:
      "Online stores with Paystack integration, inventory management, and order tracking — built for the Nigerian market.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Ongoing support, bug fixes, feature additions, and performance optimisation for existing applications.",
  },
];

export default function SoftwareServices() {
  return (
    <section className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-[var(--color-teal)]">
            What We Build
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
            Software services for every stage
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--text-muted)]">
            From a simple landing page to a full-stack platform — we handle
            every layer of your project.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-[var(--surface)] p-7"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-teal)]/10">
                <service.icon size={20} className="text-[var(--color-teal)]" />
              </div>
              <h3 className="mt-4 text-base font-bold text-[var(--text)]">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
