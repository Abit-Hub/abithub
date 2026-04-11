"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/shared/ThemeToggle";
import ThemeLogo from "@/components/shared/ThemeLogo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/software", label: "Software" },
  { href: "/academy", label: "Academy" },
  { href: "/studio", label: "Studio" },
  { href: "/coworking", label: "Co-working" },
];

const WHATSAPP_URL = "https://wa.me/2348153853704";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-(--bg)/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <ThemeLogo width={120} height={40} priority />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA + Theme Toggle */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-teal px-5 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            Chat on WhatsApp
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center text-foreground md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-border bg-background md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-base font-medium text-muted transition-colors hover:bg-surface hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="flex items-center gap-3 px-3 pt-2">
                <ThemeToggle />
                <span className="text-sm text-muted">Theme</span>
              </li>
              <li className="pt-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-full bg-teal px-5 py-2.5 text-center text-base font-semibold text-background"
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
