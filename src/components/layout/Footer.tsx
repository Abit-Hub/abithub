import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import ThemeLogo from "@/components/shared/ThemeLogo";

const exploreLinks = [
  { href: "/", label: "Home" },
  { href: "/software", label: "Software Development" },
  { href: "/training", label: "Training" },
  { href: "/studio", label: "Content Studio" },
];

const socialLinks = [
  { href: "https://instagram.com/abithub", label: "Instagram" },
  { href: "https://linkedin.com/company/abithub", label: "LinkedIn" },
  { href: "https://wa.me/2348153853704", label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <ThemeLogo width={120} height={40} />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Build. Learn. Innovate. — A convergence point for innovation,
              creativity, and learning in Ibadan, Nigeria.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Explore
            </h3>
            <ul className="mt-4 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-teal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted">
                <MapPin size={16} className="mt-0.5 shrink-0 text-teal" />
                No. 12 Unity Street, Adjacent to Addin, Along Idi Mango Rd, Soka (New Felele), Ibadan, Oyo State
              </li>
              <li>
                <a
                  href="tel:+2348153853704"
                  className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-teal"
                >
                  <Phone size={16} className="shrink-0 text-teal" />
                  +234 815 385 3704
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@abithub.tech"
                  className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-teal"
                >
                  <Mail size={16} className="shrink-0 text-teal" />
                  info@abithub.tech
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Follow Us
            </h3>
            <ul className="mt-4 space-y-3">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted transition-colors hover:text-teal"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted">
          &copy; {new Date().getFullYear()} AbitHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
