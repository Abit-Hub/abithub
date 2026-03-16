import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AbitHub — Build. Learn. Innovate.",
    template: "%s | AbitHub",
  },
  description:
    "AbitHub is a technology ecosystem in Soka, Ibadan — offering software development, tech training, and a professional content studio.",
  keywords: [
    "tech hub ibadan",
    "abithub",
    "technology ibadan nigeria",
    "software development ibadan",
    "tech training ibadan",
    "content studio ibadan",
  ],
  metadataBase: new URL("https://www.abithub.tech"),
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://www.abithub.tech",
    siteName: "AbitHub",
    title: "AbitHub — Build. Learn. Innovate.",
    description:
      "A convergence point for innovation, creativity, and learning in Soka, Ibadan, Nigeria.",
  },
  icons: {
    icon: "/brand/Icon_Original.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
        )}
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
