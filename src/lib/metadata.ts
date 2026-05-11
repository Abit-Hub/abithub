import type { Metadata } from "next";

const SITE_URL = "https://www.abithub.tech";
const SITE_NAME = "AbitHub";
const DEFAULT_OG_IMAGE = "/brand/Logo_Original.svg";

export function createMetadata({
  title,
  description,
  keywords,
  path = "",
}: {
  title: string;
  description: string;
  keywords: string[];
  path?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(SITE_URL),
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_NG",
      type: "website",
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${title} | ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

// JSON-LD helpers — render as <script type="application/ld+json"> in pages

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AbitHub",
    url: SITE_URL,
    logo: `${SITE_URL}/brand/Logo_Original.svg`,
    description:
      "A technology hub in Soka, Ibadan — offering software development, tech academy training, content studio, and co-working space.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 14 Unity Street, Adjacent to Addin, Along Idi Mango Rd, Soka (New Felele)",
      addressLocality: "Ibadan",
      addressRegion: "Oyo State",
      addressCountry: "NG",
    },
    sameAs: [],
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AbitHub",
    url: SITE_URL,
    logo: `${SITE_URL}/brand/Logo_Original.svg`,
    description:
      "Technology hub offering software development, tech academy training, content studio, and co-working space in Soka, Ibadan, Nigeria.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 14 Unity Street, Adjacent to Addin, Along Idi Mango Rd, Soka (New Felele)",
      addressLocality: "Ibadan",
      addressRegion: "Oyo State",
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 7.3478,
      longitude: 3.8578,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  };
}

export function serviceJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: {
      "@type": "Organization",
      name: "AbitHub",
      url: SITE_URL,
    },
    areaServed: {
      "@type": "City",
      name: "Ibadan",
    },
  };
}
