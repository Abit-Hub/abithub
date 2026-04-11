"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

interface CTASectionProps {
  heading?: string;
  subtext?: string;
  whatsappMessage?: string;
  defaultService?: "software" | "academy" | "studio" | "coworking" | "general";
  accentColor?: string;
}

const WHATSAPP_URL = "https://wa.me/2348153853704";

export default function CTASection({
  heading = "Ready to get started?",
  subtext = "Let\u2019s talk about what AbitHub can do for you.",
  whatsappMessage,
  defaultService = "general",
  accentColor = "var(--color-teal)",
}: CTASectionProps) {
  const href = whatsappMessage
    ? `${WHATSAPP_URL}?text=${encodeURIComponent(whatsappMessage)}`
    : WHATSAPP_URL;

  return (
    <section className="border-t border-border px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left — heading + WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-24"
          >
            <h2 className="text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
              {heading}
            </h2>
            <p className="mt-4 text-lg text-[var(--text-muted)]">{subtext}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full px-8 text-base font-semibold text-[var(--bg)] transition-opacity hover:opacity-90"
                style={{ backgroundColor: accentColor }}
              >
                Chat on WhatsApp
              </a>
              <span className="text-sm text-[var(--text-muted)]">or fill out the form</span>
            </div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ContactForm defaultService={defaultService} accentColor={accentColor} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
