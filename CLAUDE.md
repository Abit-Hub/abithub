# Abit Hub — CLAUDE.md

> This file is the single source of truth for Claude Code working on the Abit Hub website.
> Read this fully before making any decisions. Never deviate from these specs without explicit instruction.
> Last updated: April 2026

---

## 🏢 Business Overview

**Abit Technology Hub** (short form: **Abit Hub**) is a technology hub located in **Soka (New Felele), Ibadan, Nigeria**.

- **Website**: www.abithub.tech
- **Tagline**: Build. Learn. Innovate.
- **Core Value**: Truthfulness — all content must be honest and accurately reflect what the hub currently offers
- **Phone**: +234 815 385 3704
- **Email**: info@abithub.tech
- **Address**: No. 12 Unity Street, Adjacent to Addin, Along Idi Mango Rd, Soka (New Felele), Ibadan, Oyo State, Nigeria
- **Social handle**: @abithub (Instagram, TikTok, X)

---

## 🎯 Four Services (Website Focus)

### 1. Software Development
- Full-stack software development for Nigerian businesses and international clients
- Freelance platform access (Upwork, Fiverr, Toptal) for global market
- Pricing: $500 (landing pages) → $20,000 (mobile apps)
- Target: Local SMEs, startups, international clients via freelance platforms
- Service colour: ABIT Teal `#0CC7B4`

### 2. Abit Hub Tech Academy (Training)
- Cohort-based software development training
- Maximum 10 students per cohort
- New cohort every 3 months
- 3 days per week, weekdays
- No prior experience required

**Three tracks:**

**Track 1 — Frontend Development** `₦350,000 / 3 months`
- Month 1: HTML5, CSS3, Git & GitHub, command line, how the web works
- Month 2: JavaScript (ES6+), DOM manipulation, APIs & Fetch, debugging
- Month 3: React, React Router, Tailwind CSS, deployment (Vercel/Netlify), capstone project

**Track 2 — UI/UX Design** `₦350,000 / 3 months`
- Month 1: Design thinking, user research, personas, empathy mapping, Figma fundamentals
- Month 2: Typography, colour theory, component design, design systems, micro-interactions
- Month 3: High-fidelity prototyping, usability testing, mobile-first design, portfolio building, capstone project

**Track 3 — Backend Development** `₦400,000 / 3 months`
- Month 1: Node.js, Express.js, REST API design, Postman, Git, environment variables
- Month 2: PostgreSQL, MongoDB, Prisma, Mongoose, JWT authentication, authorisation, Zod validation
- Month 3: File uploads, Nodemailer/Resend, Paystack API, testing with Jest, deployment (Railway/Render), capstone project

**Bundle — Full Stack (Frontend + Backend)** `₦650,000 / 6 months`
- Combines Frontend (months 1–3) + Backend (months 4–6)
- Students save ₦100,000 vs enrolling separately

**Payment structure:**
- Commitment fee: ₦50,000–₦100,000 (secures cohort slot, applied to total tuition)
- Balance paid on agreed schedule — discussed individually
- NO registration fee — the commitment fee replaces it

**What every graduate receives:**
- Certificate of completion
- Real project portfolio (minimum 3 deployed projects)
- GitHub profile with live projects
- Letter of recommendation from Abit Hub Tech Academy

- Service colour: ABIT Orange `#C7680C`

### 3. Content Studio
- Professional content studio — clients can bring own equipment OR book with our partner photographer
- Studio is fully operational

**Studio Rental (Bring Your Own Camera/Photographer):**
- 30 minutes — ₦10,000
- 1 hour — ₦18,000
- 2 hours — ₦30,000
- Half day (4 hours) — ₦50,000
- Full day (8 hours) — ₦90,000

**Portrait Packages (Photographer Provided):**
- Basic — ₦12,000 (1 outfit, 15–20 min session, 3 edited photos, basic retouching, 1–2 day delivery)
- Standard — ₦18,000 (2 outfits, 25–35 min session, 5 edited photos, basic retouching, 2–3 day delivery)
- Premium — ₦25,000 (3 outfits, 45–60 min session, 8 edited photos, enhanced retouching, 2–3 day delivery)

**Walk-in Per Picture:**
- ₦3,000 per photo — minimum 5 photos (₦15,000 minimum spend)

**Add-ons:**
- Extra edited photo — ₦1,000
- Extra outfit change — ₦2,000
- Urgent delivery — ₦2,000
- Heavy beauty retouching — priced on request

**Studio equipment available:**
- Track lights + ring lights
- LED ambient strip lighting
- Panelled feature walls
- Styled shelves with decorative props
- Round table, sofa, chair
- Multiple backdrop options
- Tripod stand

**Important:** Do NOT describe the studio as a "full-service production house." It is a rental/session model — clients use the studio infrastructure. Full-service production equipment (professional LED 800W, softbox, professional camera) is a future expansion goal, not current offering.

- Service colour: ABIT Purple `#660050`

### 4. Co-working Space
- Professional workspace for freelancers, remote workers, and entrepreneurs
- 55 Mbps internet (Airtel ODU unlimited)
- Reliable solar power (3.2KVA inverter, 2×220AH tubular batteries, 4 panels) — no NEPA interruptions
- Located in Soka (New Felele), Ibadan

**Hot Desk (Regular Workspace):**
- Daily — ₦3,000
- Weekly — ₦18,000
- Monthly — ₦60,000

**Private Room:**
- Per hour — ₦3,000
- Half day — ₦10,000
- Full day — ₦18,000

**What's included:** High-speed internet, solar power, professional environment, access to content studio (bookable separately)

- Service colour: ABIT Blue `#003366`

---

## 🔍 Design Reference — notzero.tech

Notzero is a Nigerian tech hub based in Akobo, Ibadan — a direct competitor. Key patterns to replicate and improve on:

### Structure Patterns to Follow
- **Single-page architecture per service** — each service is its own landing page with focused content
- **Sticky minimal navbar** — logo left, nav links centre/right, one primary CTA button (WhatsApp)
- **Hero is BIG and bold** — large statement headline, short subtext, two CTAs
- **Partner/client logo strip** — builds instant credibility below the hero
- **About section** — Vision, Mission, Uniqueness in a 3-card layout
- **Services section** — alternating image + text layout
- **Process section** — numbered steps (01, 02, 03...)
- **Pricing section** — tiered pricing cards (Abit Hub's key differentiator — Notzero has NO public pricing)
- **CTA section** — full-width closing section with single action button
- **Footer** — logo, tagline, nav links, contact info, social icons

### What Abit Hub Does Better Than Notzero
- **Pricing transparency** — show clear tiers on every service page
- **4 distinct services** — software, training, studio, co-working
- **Solar power** — uninterrupted power is a real differentiator in Ibadan
- **Lead capture forms** — WhatsApp + proper forms
- **SEO** — structured data, meta tags, sitemap

---

## 🌐 Website Architecture

```
abithub.tech/              → Main hub landing page (4 service cards)
abithub.tech/software      → Software Development page
abithub.tech/academy       → Tech Academy page (was /training)
abithub.tech/studio        → Content Studio page
abithub.tech/coworking     → Co-working Space page (NEW)
```

### Each Service Page Section Order
1. Hero — Bold headline, subtext, 2 CTAs (primary button + WhatsApp)
2. About — Vision, Mission, Uniqueness (3-card layout)
3. Services/Offerings — What's included
4. Process — Numbered steps (01, 02, 03...)
5. Pricing — Tiered pricing cards
6. CTA Section — Full-width "Ready to get started?" + WhatsApp + form
7. Footer — Consistent across all pages

---

## 🎨 Design System

### Official Brand Colors

#### Primary Colors
```
ABIT Blue   → #003366   RGB(0, 51, 102)
ABIT Teal   → #0CC7B4   RGB(12, 199, 180)
```

#### Secondary Colors
```
Abit Purple → #660050   RGB(102, 0, 80)
Abit Green  → #146600   RGB(20, 102, 0)
Abit Orange → #C7680C   RGB(199, 104, 12)
```

#### Greyscale Palette
```
#000810   — Deepest dark (near black, blue tint)
#1A2128   — Dark surface
#4D5259   — Medium dark
#808488   — Mid grey
#999C9F   — Light mid grey
#CDCECF   — Light grey
#E6E6E7   — Near white grey
#F3F3F3   — Off white
```

### CSS Variables
```css
--color-blue:    #003366;
--color-teal:    #0CC7B4;
--color-purple:  #660050;
--color-green:   #146600;
--color-orange:  #C7680C;

--bg:            #000810;
--surface:       #1A2128;
--surface2:      #4D5259;
--text:          #F3F3F3;
--text-muted:    #999C9F;
--border:        rgba(77, 82, 89, 0.5);
```

### Service Color Coding
- Software Development → `--color-teal` (#0CC7B4)
- Tech Academy (Training) → `--color-orange` (#C7680C)
- Content Studio → `--color-purple` (#660050)
- Co-working Space → `--color-blue` (#003366)

### Typography
```
Primary Brand Typeface: Elms Sans
— 18 weights including italics
— Variable font: ElmsSans-VariableFont_wght.ttf
— Self-host from /public/fonts/ directory
— Use for ALL headings, UI elements, and body text

Fallback stack: 'Elms Sans', system-ui, sans-serif
```

> ⚠️ Elms Sans is the ONLY typeface used across the entire brand.
> Do NOT use Google Fonts (Syne, DM Sans, Inter, Roboto etc.)

### Logo Usage
```
/public/brand/
├── Logo_Original.svg      ← Primary — use on light/white backgrounds
├── Logo_White.svg         ← Use on dark/colored backgrounds (main website use)
├── Logo_Navy_Blue.svg     ← Use on light or teal backgrounds
├── Logo_Black.svg         ← Greyscale / print use
├── Icon_Original.svg      ← Favicon, app icon, small spaces
└── Icon_White.svg         ← Icon on dark backgrounds
```

**Logo rules:**
- Always use SVG versions for web
- On dark website backgrounds → use `Logo_White.svg`
- In the navbar → use `Logo_White.svg`
- Never distort, recolor, or apply effects to the logo

---

## 📦 Font Setup (Elms Sans)

**Step 1** — Convert all `.ttf` to `.woff2`:
```bash
pnpm add -g ttf2woff2
for f in public/fonts/*.ttf; do ttf2woff2 < "$f" > "${f%.ttf}.woff2"; done
```

**Step 2** — Place all font files in `/public/fonts/`

**Step 3** — Declare in `src/app/globals.css` with @font-face for all 18 weights (Thin through Black, including italics, weights 100–900)

**Step 4** — In `tailwind.config.ts`:
```ts
fontFamily: {
  sans: ['Elms Sans', 'system-ui', 'sans-serif'],
}
```

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Package Manager | pnpm |
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Forms | React Hook Form + Resend |
| Analytics | Google Tag Manager + GA4 |
| SEO | next/metadata, next-sitemap, JSON-LD |
| Animations | Framer Motion |
| Icons | Lucide React |
| Hosting | Vercel (target) / Namecheap cPanel (current) |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                  # Main hub landing (4 service cards)
│   ├── software/
│   │   └── page.tsx
│   ├── academy/                  # Was /training — renamed
│   │   └── page.tsx
│   ├── studio/
│   │   └── page.tsx
│   ├── coworking/                # NEW page
│   │   └── page.tsx
│   └── api/
│       └── contact/
│           └── route.ts
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # 4 service links + WhatsApp CTA
│   │   └── Footer.tsx
│   ├── shared/
│   │   ├── PricingCard.tsx
│   │   ├── ContactForm.tsx
│   │   ├── ProcessSteps.tsx
│   │   ├── WhatsAppButton.tsx
│   │   └── SectionHeader.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── ServicesGrid.tsx      # 4 service cards
│   │   └── WhyAbitHub.tsx
│   ├── software/
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Process.tsx
│   │   ├── TechStack.tsx
│   │   └── Pricing.tsx
│   ├── academy/                  # Was training/
│   │   ├── Hero.tsx
│   │   ├── Tracks.tsx            # 3 tracks + Full Stack bundle
│   │   ├── Curriculum.tsx        # Per-track curriculum detail
│   │   ├── Outcomes.tsx          # Certificate, portfolio, GitHub, letter
│   │   ├── Process.tsx
│   │   └── Pricing.tsx
│   ├── studio/
│   │   ├── Hero.tsx
│   │   ├── StudioFeatures.tsx
│   │   ├── Process.tsx
│   │   └── Pricing.tsx
│   └── coworking/                # NEW
│       ├── Hero.tsx
│       ├── Features.tsx
│       └── Pricing.tsx
├── lib/
│   ├── metadata.ts
│   └── resend.ts
└── types/
    └── index.ts
```

---

## 📧 Forms & Lead Capture

Every service page has a contact form that:
1. Collects: Name, Email, Phone, Service Interest, Message
2. Validates with React Hook Form + Zod
3. Submits to `/api/contact` route
4. Sends email via Resend to info@abithub.tech
5. Shows success/error state to user

### Environment Variables Required
```env
RESEND_API_KEY=
CONTACT_EMAIL=info@abithub.tech
NEXT_PUBLIC_GTM_ID=
```

---

## 🔍 SEO Requirements

Every page must have unique title, description, Open Graph tags, and JSON-LD structured data.

### Target Keywords by Page
- **Homepage**: "tech hub ibadan", "abithub", "technology hub soka ibadan"
- **Software**: "software development ibadan", "web development nigeria", "mobile app ibadan"
- **Academy**: "tech academy ibadan", "software development training ibadan", "coding bootcamp ibadan", "frontend development course nigeria", "UI UX design course ibadan"
- **Studio**: "content studio ibadan", "photo studio soka ibadan", "portrait photography ibadan"
- **Co-working**: "coworking space ibadan", "hot desk ibadan", "workspace soka ibadan"

---

## 📱 Responsive Breakpoints

```
Mobile:  < 640px    — single column, stacked layouts
Tablet:  640-1024px — 2 column grids
Desktop: > 1024px   — full layouts as designed
```

---

## 🧠 Business Context for Copy

### Tone of Voice
- Confident but not arrogant
- Warm and community-focused
- Professional but energetic
- Nigerian context — reference Ibadan, local market, naira pricing

### Key Differentiators to Emphasize
- Located in Soka (New Felele), Ibadan — convenient for locals
- Solar powered — no NEPA interruptions (major differentiator in Nigeria)
- 55 Mbps internet — reliable, fast
- Transparent pricing — no "contact for pricing" vagueness
- Cohort-based training — small groups, personal attention
- Four services under one roof

### Trust Signals to Use
- "Based in Soka (New Felele), Ibadan"
- Specific pricing on all service pages
- Specific curriculum details per track
- Solar power and 55 Mbps internet specs
- Cohort size (maximum 10 students)

---

## 🚫 Never Do

- Never use placeholder "Lorem ipsum" text
- Never use generic stock photo URLs — use `/public/images/` or leave as TODO
- Never hardcode email addresses in frontend — use environment variables
- Never skip mobile responsiveness
- Never use Arial, Roboto, Inter, or Syne fonts — Elms Sans only
- Never deploy with console.log statements
- Never describe the studio as a "full-service production house"
- Never reference "registration fee" — it is a "commitment fee"
- Never reference "8-week programme" — all training is 3-month cohorts
- Never reference Track A / IT Skills training — it has been removed
- Never use "training" as the page/route name — it is "academy"
- Never show fictional case studies or testimonials

---

## ✅ Definition of Done

A page/component is complete when:
1. Renders correctly on mobile, tablet, and desktop
2. All forms submit and send real emails to info@abithub.tech
3. SEO metadata is fully populated
4. No TypeScript errors (pnpm build passes)
5. Consistent with the design system (colors, fonts, spacing)
6. All pricing matches the confirmed figures in this file exactly

---

## 📞 Contact & Business Info

- **Full name**: Abit Technology Hub
- **Short name**: Abit Hub
- **Address**: No. 12 Unity Street, Adjacent to Addin, Along Idi Mango Rd, Soka (New Felele), Ibadan, Oyo State, Nigeria
- **Phone**: +234 815 385 3704
- **Email**: info@abithub.tech
- **Website**: www.abithub.tech
- **Social**: @abithub (Instagram, TikTok, X)
- **WhatsApp**: +234 815 385 3704

---

*Last updated: April 2026 | Keep this file in sync with all business decisions.*