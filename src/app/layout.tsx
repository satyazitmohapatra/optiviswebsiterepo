import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

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
  ],
  authors: [{ name: "Optivis", url: "https://optivisconsultancyservices.tech" }],
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
    url: "https://optivisconsultancyservices.tech",
    siteName: "Optivis",
    title: "Optivis | Digital Transformation & Web Development Services",
    description:
      "Premium web development, software consulting, and digital transformation services for startups and enterprises.",
    images: [
      {
        url: "https://optivisconsultancyservices.tech/og-image.png",
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
    images: ["https://optivisconsultancyservices.tech/og-image.png"],
    creator: "@optivis",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
  alternates: {
    canonical: "https://optivisconsultancyservices.tech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://optivisconsultancyservices.tech" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Optivis",
              alternateName: "Optivis Enterprise Solutions",
              url: "ttps://optivisconsultancyservices.tech",
              logo: "ttps://optivisconsultancyservices.tech/logo.png",
              description:
                "Premium web development, software consulting, and digital transformation services for startups and enterprises.",
              sameAs: [
                "https://twitter.com/optivis",
                "https://linkedin.com/company/optivisconsultancyservices",
                "https://github.com/optivis",
              ],
              contact: {
                "@type": "ContactPoint",
                telephone: "+91-7978289942",
                contactType: "Customer Service",
                email: "optivis.ocs.support@gmail.com",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full bg-background text-foreground transition-colors duration-500" suppressHydrationWarning>
        <ThemeProvider defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
