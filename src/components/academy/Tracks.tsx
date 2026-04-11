"use client";

import { motion } from "framer-motion";
import { Monitor, Palette, Server } from "lucide-react";

const tracks = [
  {
    icon: Monitor,
    title: "Frontend Development",
    price: "\u20A6350,000 / 3 months",
    description:
      "Build modern, responsive websites and web applications. No prior experience required — go from zero to deploying real projects.",
    months: [
      {
        label: "Month 1",
        topics: [
          "HTML5, CSS3",
          "Git & GitHub",
          "Command line",
          "How the web works",
        ],
      },
      {
        label: "Month 2",
        topics: [
          "JavaScript (ES6+)",
          "DOM manipulation",
          "APIs & Fetch",
          "Debugging",
        ],
      },
      {
        label: "Month 3",
        topics: [
          "React",
          "React Router",
          "Tailwind CSS",
          "Deployment (Vercel/Netlify)",
          "Capstone project",
        ],
      },
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    price: "\u20A6350,000 / 3 months",
    description:
      "Learn to design beautiful, user-friendly digital products. From research and wireframes to high-fidelity prototypes in Figma.",
    months: [
      {
        label: "Month 1",
        topics: [
          "Design thinking",
          "User research & personas",
          "Empathy mapping",
          "Figma fundamentals",
        ],
      },
      {
        label: "Month 2",
        topics: [
          "Typography & colour theory",
          "Component design",
          "Design systems",
          "Micro-interactions",
        ],
      },
      {
        label: "Month 3",
        topics: [
          "High-fidelity prototyping",
          "Usability testing",
          "Mobile-first design",
          "Portfolio building",
          "Capstone project",
        ],
      },
    ],
  },
  {
    icon: Server,
    title: "Backend Development",
    price: "\u20A6400,000 / 3 months",
    description:
      "Build robust APIs, databases, and server-side applications. Learn authentication, payments, testing, and deployment.",
    months: [
      {
        label: "Month 1",
        topics: [
          "Node.js & Express.js",
          "REST API design",
          "Postman, Git",
          "Environment variables",
        ],
      },
      {
        label: "Month 2",
        topics: [
          "PostgreSQL & MongoDB",
          "Prisma & Mongoose",
          "JWT authentication & authorisation",
          "Zod validation",
        ],
      },
      {
        label: "Month 3",
        topics: [
          "File uploads",
          "Nodemailer/Resend",
          "Paystack API",
          "Testing with Jest",
          "Deployment (Railway/Render)",
          "Capstone project",
        ],
      },
    ],
  },
];

export default function AcademyTracks() {
  return (
    <section className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-[var(--color-orange)]">
            Three Tracks
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
            Choose your learning path
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--text-muted)]">
            Cohort-based, project-driven training. 3 days per week, weekdays.
            Maximum 10 students per cohort. New cohort every 3 months. No prior
            experience required.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
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
              <p className="mt-1 text-sm font-semibold text-[var(--color-orange)]">
                {track.price}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                {track.description}
              </p>

              <div className="mt-6 space-y-4">
                {track.months.map((month) => (
                  <div key={month.label}>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-orange)]">
                      {month.label}
                    </h4>
                    <ul className="mt-2 space-y-1.5">
                      {month.topics.map((topic) => (
                        <li
                          key={topic}
                          className="flex items-start gap-2 text-sm text-[var(--text-muted)]"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-orange)]" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full Stack Bundle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-10 max-w-3xl rounded-2xl border border-[var(--color-orange)] bg-[var(--surface)] p-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="rounded-full bg-[var(--color-orange)] px-3 py-1 text-xs font-semibold text-[var(--bg)]">
                Best Value
              </span>
              <h3 className="mt-3 text-xl font-bold text-[var(--text)]">
                Full Stack (Frontend + Backend)
              </h3>
              <p className="mt-1 text-sm text-[var(--text-muted)]">
                6 months — Frontend (months 1–3) + Backend (months 4–6). Save
                {"\u20A6"}100,000 vs enrolling separately.
              </p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-black text-[var(--color-orange)]">
                {"\u20A6"}650,000
              </p>
              <p className="text-sm text-[var(--text-muted)]">6 months</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
