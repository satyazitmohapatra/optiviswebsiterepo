// This file contains the enhanced metadata configuration for the root layout
// Import this metadata in layout.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Optivis | Digital Transformation & Web Development Services",
    template: "%s | Optivis",
  },
  description:
    "Premium web development, software consulting, and digital transformation services for startups and enterprises. 95% client retention, 50+ successful projects.",
  keywords: [
    "web development",
    "software consulting",
    "digital transformation",
    "web applications",
    "enterprise solutions",
    "tech consulting",
    "full-stack development",
    "business websites",
    "cloud consulting",
    "AI solutions",
    "startup technology",
  ],
  authors: [{ name: "Optivis", url: "https://optivis.com" }],
  creator: "Optivis",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "ttps://optivisconsultancyservices.tech",
    siteName: "Optivis",
    title: "Optivis | Digital Transformation & Web Development Services",
    description:
      "Premium web development, software consulting, and digital transformation services for startups and enterprises.",
    images: [
      {
        url: "ttps://optivisconsultancyservices.tech/og-image.png",
        width: 1200,
        height: 630,
        alt: "Optivis - Premium Web Development Services",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Optivis | Digital Transformation & Web Development Services",
    description:
      "Premium web development, software consulting, and digital transformation services for startups and enterprises.",
    images: ["ttps://optivisconsultancyservices.tech/og-image.png"],
    creator: "@optivis",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE", // Replace with your actual code from Google Search Console
  },
  alternates: {
    canonical: "ttps://optivisconsultancyservices.tech",
  },
};
