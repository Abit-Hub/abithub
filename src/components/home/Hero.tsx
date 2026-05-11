"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/2348153853704";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-5 lg:px-8">
      <Image
        src="/images/hero-home.jpg"
        alt="Abit Technology Hub — Soka, Ibadan"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 z-[1] bg-[var(--bg)]/75" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-black leading-[1.1] tracking-tight text-[var(--text)] sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Build. Learn.{" "}
          <span className="text-[var(--color-teal)]">Innovate.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)] sm:text-xl"
        >
          AbitHub is your convergence point for software development, tech
          training, and professional content creation — right here in Ibadan,
          Nigeria.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center rounded-full bg-[var(--color-teal)] px-8 text-base font-semibold text-[var(--bg)] transition-opacity hover:opacity-90"
          >
            Get Started on WhatsApp
          </a>
          <a
            href="#services"
            className="inline-flex h-12 items-center rounded-full border border-[var(--surface2)] px-8 text-base font-medium text-[var(--text)] transition-colors hover:border-[var(--color-teal)] hover:text-[var(--color-teal)]"
          >
            Explore Our Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}
