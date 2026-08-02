import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { BookingProvider } from "@/lib/booking/booking-context";
import { BookingModal } from "@/components/ui/booking-modal";
import { generateStructuredData } from "@/lib/seo-schema";
import "./globals.css";

const BASE_URL = "https://optivisconsultancyservices.tech";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#060B15" },
  ],
};

export const metadata: Metadata = {
  // ── Core Title & Description ──
  title: {
    default: "Optivis — Enterprise Digital Transformation & IT Consulting | Bhubaneswar, India",
    template: "%s | Optivis Consultancy Services",
  },
  description:
    "Optivis Consultancy Services provides enterprise digital transformation, cloud architecture, AI analytics, custom full-stack web & mobile development, and IT strategy consulting. Based in Bhubaneswar, serving globally.",
  keywords: [
    // Brand
    "Optivis",
    "Optivis Consultancy Services",
    "OCS",
    // Primary services
    "digital transformation consulting",
    "enterprise software development",
    "custom web development",
    "cloud architecture consulting",
    "AI solutions India",
    "full-stack development services",
    // Location-based
    "IT consultancy Bhubaneswar",
    "web development Bhubaneswar",
    "software company Odisha",
    "IT services India",
    "web development company India",
    // Technology
    "React Next.js development",
    "Node.js TypeScript development",
    "AWS cloud infrastructure",
    "enterprise API development",
    // Niche
    "G2C portal development",
    "multilingual government portals",
    "enterprise UI UX design",
    "DevOps CI CD pipeline",
    "zero trust security architecture",
    // Long-tail
    "best IT consulting company Bhubaneswar",
    "affordable enterprise web development India",
    "free website technical audit",
    "custom software engineering consultancy",
  ],

  // ── Authorship ──
  authors: [
    { name: "Optivis Consultancy Services", url: BASE_URL },
    { name: "Satyajit Mohapatra", url: "https://www.linkedin.com/in/satyajit-mohapatra-48838a343/" },
    { name: "Rudra Prasad Rout", url: "https://rprout07.netlify.app" },
  ],
  creator: "Optivis Consultancy Services",
  publisher: "Optivis Consultancy Services",

  // ── Crawling ──
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "en-IN": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Format detection ──
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // ── Open Graph ──
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["en_IN", "en_GB"],
    url: BASE_URL,
    siteName: "Optivis Consultancy Services",
    title: "Optivis — Enterprise Digital Transformation & IT Consulting",
    description:
      "Transform your enterprise with cutting-edge digital solutions, AI analytics, cloud engineering, and custom full-stack web development. Free 48-hour technical audit available.",
    images: [
      {
        url: `${BASE_URL}/images/og-image.png`,
        secureUrl: `${BASE_URL}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Optivis Consultancy Services — Enterprise Digital Transformation & IT Consulting",
        type: "image/png",
      },
    ],
    countryName: "India",
  },

  // ── Twitter ──
  twitter: {
    card: "summary_large_image",
    title: "Optivis — Enterprise Digital Transformation & IT Consulting",
    description:
      "Enterprise software, cloud architecture, AI analytics, and custom web development. Free 48-hour technical audit. Based in Bhubaneswar, India.",
    images: {
      url: `${BASE_URL}/images/og-image.png`,
      alt: "Optivis Consultancy Services",
    },
    creator: "@optivis",
    site: "@optivis",
  },

  // ── Verification ──
  verification: {
    google: "n529leUKmndk9dbzmJNDGLuiREJk6swagJQSr-DnnV0",
    // Add these when you register:
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },

  // ── Classification ──
  category: "Technology",
  classification: "Business Consulting & Software Development",

  // ── App Links ──
  applicationName: "Optivis Consultancy Services",
  referrer: "origin-when-cross-origin",

  // ── Geo & Local ──
  other: {
    "geo.region": "IN-OR",
    "geo.placename": "Bhubaneswar",
    "geo.position": "20.2961;85.8245",
    ICBM: "20.2961, 85.8245",
    "DC.title": "Optivis Consultancy Services — Enterprise IT Consulting",
    "DC.creator": "Optivis Consultancy Services",
    "DC.subject": "Digital Transformation, Cloud Architecture, AI, Web Development",
    "DC.description": "Enterprise IT consulting and custom software engineering from Bhubaneswar, India.",
    "DC.publisher": "Optivis Consultancy Services",
    "DC.language": "en",
    "revisit-after": "3 days",
    "rating": "general",
    "distribution": "global",
    "coverage": "Worldwide",
    "target": "all",
    "HandheldFriendly": "True",
    "MobileOptimized": "320",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = generateStructuredData();

  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        {/* JSON-LD: inline script for immediate crawlability (no afterInteractive delay) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS Prefetch for analytics and CDNs */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Canonical (backup — Next.js also adds this via metadata) */}
        <link rel="canonical" href={BASE_URL} />

        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-full bg-background text-foreground transition-colors duration-500" suppressHydrationWarning>
        <ThemeProvider defaultTheme="system">
          <BookingProvider>
            <SmoothScroll>
              <CustomCursor />
              <BookingModal />
              {children}
            </SmoothScroll>
          </BookingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
