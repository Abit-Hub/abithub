"use client";

import { motion } from "framer-motion";
import { Monitor, Code2 } from "lucide-react";

const tracks = [
  {
    icon: Monitor,
    title: "Track A — IT Skills & Digital Literacy",
    description:
      "Foundational tech skills for individuals and corporate teams. Perfect for anyone who wants to be more productive with technology.",
    topics: [
      "Microsoft Office Suite (Word, Excel, PowerPoint)",
      "Internet tools & email management",
      "Data management & cloud storage",
      "Productivity software & collaboration tools",
      "Basic cybersecurity awareness",
      "Power management & data-cost optimisation",
    ],
  },
  {
    icon: Code2,
    title: "Track B — Software Development",
    description:
      "Hands-on coding and development skills. Build real projects from day one — websites, APIs, and mobile apps.",
    topics: [
      "HTML, CSS & JavaScript fundamentals",
      "React & modern frontend development",
      "Version control with Git & GitHub",
      "Deployment & hosting basics",
    ],
  },
];

export default function TrainingTracks() {
  return (
    <section className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-[var(--color-orange)]">
            Two Tracks
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
            Choose your learning path
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--text-muted)]">
            Practical, project-based learning tracks. Computer Application
            training runs on a flexible schedule; Software Development is a
            3-month programme. Available for individuals and corporate teams.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {tracks.map((track, i) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-2xl border border-border bg-[var(--surface)] p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-orange)]/10">
                <track.icon size={24} className="text-[var(--color-orange)]" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-[var(--text)]">
                {track.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                {track.description}
              </p>

              <h4 className="mt-6 text-sm font-semibold uppercase tracking-wider text-[var(--color-orange)]">
                What You&apos;ll Learn
              </h4>
              <ul className="mt-3 space-y-2">
                {track.topics.map((topic) => (
                  <li
                    key={topic}
                    className="flex items-start gap-2 text-sm text-[var(--text-muted)]"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-orange)]" />
                    {topic}
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
