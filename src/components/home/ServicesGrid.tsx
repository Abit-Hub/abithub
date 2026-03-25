"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, GraduationCap, Camera } from "lucide-react";

const services = [
  {
    href: "/software",
    icon: Code2,
    title: "Software Development",
    description:
      "Full-stack web and mobile apps built for Nigerian businesses and international clients. From landing pages to complex platforms.",
    accent: "var(--color-teal)",
    tag: "From $500",
  },
  {
    href: "/training",
    icon: GraduationCap,
    title: "Training",
    description:
      "IT skills, digital literacy, and hands-on software development training. Flexible and 3-month programmes for individuals and corporate teams.",
    accent: "var(--color-orange)",
    tag: "From \u20A628,000",
  },
  {
    href: "/studio",
    icon: Camera,
    title: "Content Studio",
    description:
      "Professional content studio in Soka (New Felele), Ibadan. Track lighting, ring lights, styled backdrops, props and furniture — bring your own equipment or book with our partner photographer.",
    accent: "var(--color-purple)",
    tag: "From \u20A63,000",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12 },
  }),
};

export default function ServicesGrid() {
  return (
    <section id="services" className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
            Three ecosystems, one hub
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--text-muted)]">
            Everything you need to build, learn, and create — under one roof in
            Ibadan.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.href}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardVariants}
            >
              <Link
                href={service.href}
                className="group flex h-full flex-col rounded-2xl border border-border bg-[var(--surface)] p-8 transition-colors hover:border-[color:var(--accent)]"
                style={{ "--accent": service.accent } as React.CSSProperties}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${service.accent}15` }}
                >
                  <service.icon
                    size={24}
                    style={{ color: service.accent }}
                  />
                </div>

                <h3 className="mt-5 text-xl font-bold text-[var(--text)]">
                  {service.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span
                    className="text-sm font-semibold"
                    style={{ color: service.accent }}
                  >
                    {service.tag}
                  </span>
                  <span className="text-sm font-medium text-[var(--text-muted)] transition-colors group-hover:text-[var(--text)]">
                    Learn more &rarr;
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
