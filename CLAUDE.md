# AbitHub — CLAUDE.md

> This file is the single source of truth for Claude Code working on the AbitHub website.
> Read this fully before making any decisions. Never deviate from these specs without explicit instruction.

---

## 🏢 Business Overview

**AbitHub** is a comprehensive technology ecosystem located in **Soka, Ibadan, Nigeria**.
It serves as a convergence point for innovation, creativity, and learning.

- **Website**: www.abithub.tech
- **Tagline**: Build. Learn. Innovate.
- **Core Value**: Affordable Excellence — truthfulness is the foundational business principle
- **Mission**: Create a sustainable, profitable tech hub serving multiple audiences in the Nigerian tech space

---

## 🎯 Three Core Services (Website Focus)

### 1. Software Development
- Full-stack software development for Nigerian businesses and international clients
- Freelance platform access (Upwork, Fiverr, Toptal) for global market
- Pricing: $500 (landing pages) → $20,000 (mobile apps)
- Target: Local SMEs, startups, international clients via freelance platforms

### 2. Training
Two tracks offered under one Training service:

**Track A — IT Skills & Digital Literacy**
- Foundational tech skills for individuals and corporate teams
- Microsoft Office, internet tools, data management, productivity software
- Addresses local challenges: power management, data costs

**Track B — Software Development Training**
- Practical coding and development skills: web, mobile, backend
- Project-based learning with real-world applications
- Beginner to intermediate level

**Both Tracks:**
- 8-week curriculum structure for individuals
- Three-tier corporate training packages
- Pricing: ₦28,000 – ₦100,000 per person
- Target: Students, career changers, corporate teams, universities, developers upskilling
- Available as individual enrollment or corporate packages

### 3. Content Studio
- Professional rental studio in Soka, Ibadan (currently 70% complete)
- Provides backgrounds, lighting, and furniture — clients bring own equipment
- 5 backgrounds available, expanding capacity
- Pricing: ₦8,000 (basic headshots) → ₦120,000 (full event coverage)
- Target: Photographers, content creators, businesses, graduates

---

## 🔍 Design Reference — notzero.tech

Notzero (a Nigerian tech studio also based in Ibadan) is the closest reference for what AbitHub's website should feel and function like. Study it carefully. Key patterns to replicate and improve on:

### Structure Patterns to Follow
- **Single-page architecture per service** — each service (Software Studio, Academy, Co-Working) is its own landing page with focused content, not a tabbed section
- **Sticky minimal navbar** — logo left, nav links center/right, one primary CTA button (WhatsApp/Book a Call)
- **Hero is BIG and bold** — large statement headline, short subtext, two CTAs (primary + secondary)
- **Partner/client logo strip** — scrolling or static row of logos builds instant credibility below the hero
- **About section** — Vision, Mission, Uniqueness in a 3-card layout with icons
- **Services section** — alternating image + text layout, each service has a GIF/visual + headline + description
- **Projects/Portfolio** — showcase real work with client names and links
- **Process section** — numbered steps (01, 02, 03...) showing how they work
- **Tech Stack section** — categorized tool logos (Design, Mobile, Frontend, Backend, Cloud, AI, etc.)
- **CTA section** — full-width closing section: "Ready to bring your idea to life?" + single action button
- **Footer** — logo, tagline, nav links, contact info (address, phone, email), social icons

### Navigation Model
- Main navbar links to the 3 separate service pages (Software Studio → Academy → Co-Working)
- Footer repeats the same navigation with an "Explore" section
- WhatsApp CTA is persistent — appears in nav, hero, services section, and footer

### Tone & Copy Style
- Headlines are action-oriented and inspiring: "Building software that inspires trust, delivers beauty, and drives growth"
- Subheadlines clarify the value: "We build reliable, beautiful software that customers love and businesses need"
- Copy is concise — no long paragraphs, everything is scannable
- Nigerian context is subtle — address is local, WhatsApp is primary contact, Paystack is referenced

### What AbitHub Should Do Better Than Notzero
- **Pricing transparency** — Notzero has no pricing; AbitHub should show clear tiers (major differentiator)
- **3 distinct service identities** — each page should feel visually distinct using the service color coding
- **Lead capture forms** — Notzero only uses WhatsApp; AbitHub should have proper forms + WhatsApp
- **SEO optimization** — structured data, meta tags, sitemap that Notzero likely lacks

---

## 🌐 Website Architecture

```
abithub.tech/                    → Main hub landing page
abithub.tech/software            → Software Development service page
abithub.tech/training            → Training page (IT Skills + Software Dev)
abithub.tech/studio              → Content Studio service page
```

### Each Service Page Section Order (follow this sequence)
1. **Hero** — Bold headline, subtext, 2 CTAs (primary button + WhatsApp)
2. **Partner/Client Logos** — Scrolling strip of logos for social proof
3. **About** — Vision, Mission, Uniqueness (3-card layout with icons)
4. **Services** — What's included, alternating image/text layout
5. **Portfolio/Work** — Past projects or studio shots (use placeholders if none yet)
6. **Process** — Numbered steps (01, 02, 03...) showing how it works
7. **Tech Stack** — For software page: categorized tool logos. For training: curriculum breakdown. For studio: equipment list.
8. **Pricing** — Tiered pricing cards (AbitHub's key differentiator vs competitors)
9. **CTA Section** — Full-width "Ready to get started?" + WhatsApp + form link
10. **Footer** — Consistent across all pages

---

## 🎨 Design System

### Aesthetic
- **Vibe**: Bold & energetic — startup energy, not corporate
- **Feel**: Dark-first with brand navy/teal accents, strong typography, confident layouts
- **Avoid**: Generic AI aesthetics, purple gradients, Inter/Roboto fonts, cookie-cutter layouts

### Official Brand Colors

#### Primary Colors
```
ABIT Blue  → #003366   RGB(0, 51, 102)     HSB(210°, 100%, 40%)
ABIT Teal  → #0CC7B4   RGB(12, 199, 180)   HSB(174°, 94%, 98%)
```

#### Secondary Colors
```
Abit Purple → #660050   RGB(102, 0, 80)     HSB(312°, 100%, 40%)
Abit Green  → #146600   RGB(20, 102, 0)     HSB(108°, 100%, 40%)
Abit Orange → #C7680C   RGB(199, 104, 12)   HSB(29°, 94%, 78%)
```

#### Greyscale Palette
```
#000810   RGB(0, 8, 16)       — Deepest dark (near black, blue tint)
#1A2128   RGB(26, 33, 40)     — Dark surface
#4D5259   RGB(77, 82, 89)     — Medium dark
#808488   RGB(128, 132, 136)  — Mid grey
#999C9F   RGB(153, 156, 159)  — Light mid grey
#CDCECF   RGB(205, 206, 207)  — Light grey
#E6E6E7   RGB(230, 230, 231)  — Near white grey
#F3F3F3   RGB(243, 243, 243)  — Off white
```

### CSS Variables (use these consistently)
```css
--color-blue:    #003366;
--color-teal:    #0CC7B4;
--color-purple:  #660050;
--color-green:   #146600;
--color-orange:  #C7680C;

/* Dark theme backgrounds */
--bg:            #000810;   /* Deepest background */
--surface:       #1A2128;   /* Card / section backgrounds */
--surface2:      #4D5259;   /* Elevated surfaces, borders */
--text:          #F3F3F3;   /* Primary text on dark */
--text-muted:    #999C9F;   /* Secondary / muted text */
--border:        rgba(77, 82, 89, 0.5);
```

### Typography
```
Primary Brand Typeface: Elms Sans
  — Utilitarian geometric sans-serif
  — 9 weights: Thin, ExtraLight, Light, Regular, Medium, SemiBold, Bold, ExtraBold, Black
  — Variable axes: weight + italics
  — Use for ALL headings, UI elements, and body text
  — Self-host from /public/fonts/ directory

Fallback stack: 'Elms Sans', system-ui, sans-serif
```

> ⚠️ **Important**: Elms Sans is the ONLY typeface used across the entire brand.
> Do NOT use Google Fonts (Syne, DM Sans, etc.) — these were placeholders before brand assets were received.

### Logo Usage
```
/public/brand/
├── Logo_Original.svg      ← Primary — use on light/white backgrounds
├── Logo_White.svg         ← Use on dark/colored backgrounds (main website use)
├── Logo_Navy_Blue.svg     ← Use on light or teal backgrounds
├── Logo_Black.svg         ← Greyscale / print use
├── Icon_Original.svg      ← Favicon, app icon, small spaces (navy + teal)
└── Icon_White.svg         ← Icon on dark backgrounds
```

**Logo rules:**
- Always use SVG versions for web (never PNG unless pixel art context)
- On dark website backgrounds → use `Logo_White.svg`
- In the navbar → use `Logo_White.svg`
- Never distort, recolor, or apply effects to the logo
- Minimum clear space = height of the letter "a" on all sides

### Service Color Coding
- Software Development → `--color-teal` (#0CC7B4)
- Training (IT Skills + Software Dev) → `--color-orange` (#C7680C)
- Content Studio → `--color-purple` (#660050)

---

## 📦 Brand Assets Setup

### Font Setup (Elms Sans)

**Step 1** — Convert all `.ttf` to `.woff2` (run once in project root):
```bash
# Install conversion tool
pnpm add -g ttf2woff2

# Batch convert all fonts
for f in public/fonts/*.ttf; do ttf2woff2 < "$f" > "${f%.ttf}.woff2"; done
```

**Step 2** — Place ALL font files in `/public/fonts/` (both .ttf originals and converted .woff2)

Full font file list:
```
ElmsSans-Thin.ttf / .woff2
ElmsSans-ThinItalic.ttf / .woff2
ElmsSans-ExtraLight.ttf / .woff2
ElmsSans-ExtraLightItalic.ttf / .woff2
ElmsSans-Light.ttf / .woff2
ElmsSans-LightItalic.ttf / .woff2
ElmsSans-Regular.ttf / .woff2
ElmsSans-Italic.ttf / .woff2
ElmsSans-Medium.ttf / .woff2
ElmsSans-MediumItalic.ttf / .woff2
ElmsSans-SemiBold.ttf / .woff2
ElmsSans-SemiBoldItalic.ttf / .woff2
ElmsSans-Bold.ttf / .woff2
ElmsSans-BoldItalic.ttf / .woff2
ElmsSans-ExtraBold.ttf / .woff2
ElmsSans-ExtraBoldItalic.ttf / .woff2
ElmsSans-Black.ttf / .woff2
ElmsSans-BlackItalic.ttf / .woff2
```

**Step 3** — Declare in `src/app/globals.css`:

```css
/* Thin — 100 */
@font-face {
  font-family: 'Elms Sans';
  src: url('/fonts/ElmsSans-Thin.woff2') format('woff2'),
       url('/fonts/ElmsSans-Thin.ttf') format('truetype');
  font-weight: 100;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Elms Sans';
  src: url('/fonts/ElmsSans-ThinItalic.woff2') format('woff2'),
       url('/fonts/ElmsSans-ThinItalic.ttf') format('truetype');
  font-weight: 100;
  font-style: italic;
  font-display: swap;
}

/* ExtraLight — 200 */
@font-face {
  font-family: 'Elms Sans';
  src: url('/fonts/ElmsSans-ExtraLight.woff2') format('woff2'),
       url('/fonts/ElmsSans-ExtraLight.ttf') format('truetype');
  font-weight: 200;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Elms Sans';
  src: url('/fonts/ElmsSans-ExtraLightItalic.woff2') format('woff2'),
       url('/fonts/ElmsSans-ExtraLightItalic.ttf') format('truetype');
  font-weight: 200;
  font-style: italic;
  font-display: swap;
}

/* Light — 300 */
@font-face {
  font-family: 'Elms Sans';
  src: url('/fonts/ElmsSans-Light.woff2') format('woff2'),
       url('/fonts/ElmsSans-Light.ttf') format('truetype');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Elms Sans';
  src: url('/fonts/ElmsSans-LightItalic.woff2') format('woff2'),
       url('/fonts/ElmsSans-LightItalic.ttf') format('truetype');
  font-weight: 300;
  font-style: italic;
  font-display: swap;
}

/* Regular — 400 */
@font-face {
  font-family: 'Elms Sans';
  src: url('/fonts/ElmsSans-Regular.woff2') format('woff2'),
       url('/fonts/ElmsSans-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Elms Sans';
  src: url('/fonts/ElmsSans-Italic.woff2') format('woff2'),
       url('/fonts/ElmsSans-Italic.ttf') format('truetype');
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}

/* Medium — 500 */
@font-face {
  font-family: 'Elms Sans';
  src: url('/fonts/ElmsSans-Medium.woff2') format('woff2'),
       url('/fonts/ElmsSans-Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Elms Sans';
  src: url('/fonts/ElmsSans-MediumItalic.woff2') format('woff2'),
       url('/fonts/ElmsSans-MediumItalic.ttf') format('truetype');
  font-weight: 500;
  font-style: italic;
  font-display: swap;
}

/* SemiBold — 600 */
@font-face {
  font-family: 'Elms Sans';
  src: url('/fonts/ElmsSans-SemiBold.woff2') format('woff2'),
       url('/fonts/ElmsSans-SemiBold.ttf') format('truetype');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Elms Sans';
  src: url('/fonts/ElmsSans-SemiBoldItalic.woff2') format('woff2'),
       url('/fonts/ElmsSans-SemiBoldItalic.ttf') format('truetype');
  font-weight: 600;
  font-style: italic;
  font-display: swap;
}

/* Bold — 700 */
@font-face {
  font-family: 'Elms Sans';
  src: url('/fonts/ElmsSans-Bold.woff2') format('woff2'),
       url('/fonts/ElmsSans-Bold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Elms Sans';
  src: url('/fonts/ElmsSans-BoldItalic.woff2') format('woff2'),
       url('/fonts/ElmsSans-BoldItalic.ttf') format('truetype');
  font-weight: 700;
  font-style: italic;
  font-display: swap;
}

/* ExtraBold — 800 */
@font-face {
  font-family: 'Elms Sans';
  src: url('/fonts/ElmsSans-ExtraBold.woff2') format('woff2'),
       url('/fonts/ElmsSans-ExtraBold.ttf') format('truetype');
  font-weight: 800;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Elms Sans';
  src: url('/fonts/ElmsSans-ExtraBoldItalic.woff2') format('woff2'),
       url('/fonts/ElmsSans-ExtraBoldItalic.ttf') format('truetype');
  font-weight: 800;
  font-style: italic;
  font-display: swap;
}

/* Black — 900 */
@font-face {
  font-family: 'Elms Sans';
  src: url('/fonts/ElmsSans-Black.woff2') format('woff2'),
       url('/fonts/ElmsSans-Black.ttf') format('truetype');
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Elms Sans';
  src: url('/fonts/ElmsSans-BlackItalic.woff2') format('woff2'),
       url('/fonts/ElmsSans-BlackItalic.ttf') format('truetype');
  font-weight: 900;
  font-style: italic;
  font-display: swap;
}
```

**Step 4** — In `tailwind.config.ts`:
```ts
fontFamily: {
  sans: ['Elms Sans', 'system-ui', 'sans-serif'],
}
```

### Logo Setup
Copy all SVG/PNG brand files to `/public/brand/`:
```
/public/brand/Logo_Original.svg
/public/brand/Logo_White.svg
/public/brand/Logo_Navy_Blue.svg
/public/brand/Logo_Black.svg
/public/brand/Icon_Original.svg
/public/brand/Icon_White.svg
```

Use in code:
```tsx
import Image from 'next/image'
// On dark backgrounds (most of the site):
<Image src="/brand/Logo_White.svg" alt="AbitHub" width={120} height={40} priority />
// Favicon — in app/layout.tsx metadata:
icons: { icon: '/brand/Icon_Original.svg' }
```

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Package Manager | pnpm |
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Forms | React Hook Form + Resend (email delivery) |
| Analytics | Google Tag Manager + GA4 |
| SEO | next/metadata, next-sitemap, JSON-LD structured data |
| Animations | Framer Motion |
| Icons | Lucide React |
| Hosting | Vercel |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout — fonts, GTM, metadata
│   ├── page.tsx                # Main hub landing page (routes to 3 services)
│   ├── software/
│   │   └── page.tsx            # Software Development service page
│   ├── training/
│   │   └── page.tsx            # Training service page (IT Skills + Software Dev)
│   ├── studio/
│   │   └── page.tsx            # Content Studio service page
│   └── api/
│       └── contact/
│           └── route.ts        # Form submission → Resend email API
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky nav: logo + service links + WhatsApp CTA
│   │   └── Footer.tsx          # Logo, tagline, nav links, contact, socials
│   ├── shared/
│   │   ├── LogoStrip.tsx       # Scrolling partner/client logo strip
│   │   ├── PricingCard.tsx     # Reusable pricing tier component
│   │   ├── ContactForm.tsx     # Lead capture form (React Hook Form)
│   │   ├── ProcessSteps.tsx    # Numbered process steps (01, 02, 03...)
│   │   ├── WhatsAppButton.tsx  # Persistent WhatsApp CTA button
│   │   └── SectionHeader.tsx   # Consistent section headings
│   ├── home/
│   │   ├── Hero.tsx            # Hub hero — "Build. Learn. Innovate."
│   │   ├── ServicesGrid.tsx    # 3 service cards linking to sub-pages
│   │   └── WhyAbitHub.tsx      # Differentiators section
│   ├── software/
│   │   ├── Hero.tsx
│   │   ├── About.tsx           # Vision, Mission, Uniqueness cards
│   │   ├── Services.tsx        # Alternating image+text service list
│   │   ├── Portfolio.tsx       # Past projects showcase
│   │   ├── Process.tsx         # Numbered steps
│   │   ├── TechStack.tsx       # Categorized tool logos
│   │   └── Pricing.tsx
│   ├── training/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── TrackSelector.tsx   # Toggle between IT Skills & Software Dev tracks
│   │   ├── Curriculum.tsx      # Curriculum details per track
│   │   ├── Process.tsx
│   │   └── Pricing.tsx
│   └── studio/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── StudioFeatures.tsx  # Equipment, backgrounds, lighting
│       ├── Portfolio.tsx       # Studio shots / sample work
│       ├── Process.tsx
│       └── Pricing.tsx
├── lib/
│   ├── metadata.ts             # SEO metadata helpers
│   └── resend.ts               # Email client setup
└── types/
    └── index.ts                # Shared TypeScript types
```

---

## 📧 Forms & Lead Capture

Every service page has a contact form that:
1. Collects: Name, Email, Phone, Service Interest, Message
2. Validates with React Hook Form + Zod
3. Submits to `/api/contact` route
4. Sends email via **Resend** to abithub business email
5. Shows success/error state to user
6. Fires a Google Ads conversion event on success

### Environment Variables Required
```env
RESEND_API_KEY=           # From resend.com
CONTACT_EMAIL=            # AbitHub receiving email
NEXT_PUBLIC_GTM_ID=       # Google Tag Manager ID
```

---

## 🔍 SEO Requirements

Every page must have:

```typescript
// Unique per page
title: "Service Name | AbitHub — Location"
description: "150-160 char description with keywords"
keywords: ["ibadan", "nigeria", "tech", ...service-specific]

// Open Graph
og:title, og:description, og:image, og:url

// Structured Data (JSON-LD)
- Organization schema on homepage
- Service schema on service pages
- LocalBusiness schema (Soka, Ibadan, Nigeria)

// Technical SEO
- sitemap.xml (next-sitemap)
- robots.txt
- Canonical URLs
- Fast Core Web Vitals (images optimized, fonts preloaded)
```

### Target Keywords by Page
- **Homepage**: "tech hub ibadan", "abithub", "technology ibadan nigeria"
- **Software**: "software development ibadan", "web development nigeria", "mobile app ibadan"
- **Training**: "tech training ibadan", "coding bootcamp nigeria", "IT skills ibadan", "software development training ibadan", "learn to code nigeria"
- **Studio**: "content studio ibadan", "photo studio soka ibadan", "video studio ibadan"

---

## 📱 Responsive Breakpoints

```
Mobile:  < 640px   — single column, stacked layouts
Tablet:  640-1024px — 2 column grids
Desktop: > 1024px  — full layouts as designed
```

---

## ⚡ Performance Standards

- Lighthouse score: 90+ on all pages
- Images: Always use `next/image` with proper width/height
- Fonts: Self-hosted via @font-face in globals.css — preload critical weights in layout.tsx `<head>`
- No layout shift (CLS < 0.1)
- LCP < 2.5s

---

## 🧠 Business Context for Copy

### Tone of Voice
- Confident but not arrogant
- Warm and community-focused
- Professional but energetic
- Nigerian context — reference Ibadan, local market, naira pricing where relevant

### Key Differentiators to Emphasize
- Located in Soka, Ibadan (convenience for locals)
- Affordable excellence — quality without Lagos prices
- Triple ecosystem — one hub for software, training, and content
- Truthfulness as a core value — transparent pricing, honest timelines

### Trust Signals to Use
- "Based in Soka, Ibadan" — local credibility
- Specific pricing (no "contact for pricing" vagueness)
- Specific curriculum details (8-week program)
- Real equipment/studio specs

---

## 🚫 Never Do

- Never use placeholder "Lorem ipsum" text — always use real AbitHub copy
- Never use generic stock photo URLs — use `/public/images/` or leave as TODO
- Never hardcode email addresses in frontend — use environment variables
- Never skip mobile responsiveness
- Never use Arial, Roboto, or Inter fonts
- Never deploy with console.log statements
- Never create files outside the defined project structure without justification

---

## ✅ Definition of Done

A page/component is complete when:
1. Renders correctly on mobile, tablet, and desktop
2. All forms submit and send real emails
3. SEO metadata is fully populated
4. No TypeScript errors (`pnpm build` passes)
5. Consistent with the design system (colors, fonts, spacing)
6. Animations are smooth and don't block interaction

---

## 📞 Contact & Business Info

- **Location**: Soka, Ibadan, Oyo State, Nigeria
- **Website**: www.abithub.tech
- **Social**: Instagram, WhatsApp, LinkedIn (handles TBD)
- **Payment**: Paystack (local NGN), international via freelance platforms

---

*Last updated: March 2026 | This file must be kept in sync with business decisions.*