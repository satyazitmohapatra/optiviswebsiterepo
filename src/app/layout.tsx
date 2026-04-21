import type { Metadata } from "next";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import { generateStructuredData } from "@/lib/seo-schema";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digital Transformation & Enterprise Solutions | Optivis Consultancy",
  description:
    "Optivis provides cutting-edge digital transformation, engineering excellence, and AI-powered insights for enterprises. Navigate your digital transformation with our consulting services.",
  keywords: "digital transformation, consulting services, web development, AI insights, enterprise software, business consulting",
  authors: [{ name: "Optivis Consultancy Services" }],
  creator: "Optivis Consultancy Services",
  publisher: "Optivis Consultancy Services",
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
  metadataBase: new URL("https://optivisconsultancyservices.tech"),
  alternates: {
    canonical: "https://optivisconsultancyservices.tech",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://optivisconsultancyservices.tech",
    siteName: "Optivis Consultancy Services",
    title: "Digital Transformation & Enterprise Solutions | Optivis",
    description:
      "Transform your enterprise with our cutting-edge digital solutions. Explore our services in digital transformation, engineering excellence, and AI-powered insights.",
    images: [
      {
        url: "https://optivisconsultancyservices.tech/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Optivis Consultancy Services",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Transformation & Enterprise Solutions | Optivis",
    description: "Transform your enterprise with cutting-edge digital solutions",
    images: ["https://optivisconsultancyservices.tech/images/og-image.png"],
  },
  verification: {
    google: "gv-ai4ka5f77ibkeo.dv.googlehosted.com",
  },
  category: "business",
  classification: "Business Consulting & Software Development",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
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
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
          strategy="afterInteractive"
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
