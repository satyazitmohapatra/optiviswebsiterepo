import type { Metadata } from "next";

export const siteConfig = {
  name: "Optivis",
  description: "Premium web development, software consulting, and digital transformation services for startups and enterprises.",
  url: "https://optivis.com",
  ogImage: "https://optivis.com/og-image.png",
  links: {
    twitter: "https://twitter.com/optivis",
    linkedin: "https://linkedin.com/company/optivis",
    github: "https://github.com/optivis",
  },
};

export const defaultMetadata: Metadata = {
  title: {
    default: "Optivis | Digital Transformation & Web Development Services",
    template: "%s | Optivis",
  },
  description: siteConfig.description,
  keywords: [
    "web development",
    "software consulting",
    "digital transformation",
    "web applications",
    "enterprise solutions",
    "tech consulting",
    "full-stack development",
    "business websites",
  ],
  authors: [{ name: "Optivis" }],
  creator: "Optivis",
  metadataBase: new URL(siteConfig.url),
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
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Optivis | Digital Transformation & Web Development Services",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Optivis - Premium Web Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Optivis | Digital Transformation & Web Development Services",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@optivis",
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE", // Replace with your actual Google Search Console verification code
  },
};

export const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Optivis",
    alternateName: "Optivis Enterprise Solutions",
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    sameAs: [
      siteConfig.links.twitter,
      siteConfig.links.linkedin,
      siteConfig.links.github,
    ],
    contact: {
      "@type": "ContactPoint",
      telephone: "+91-7978289942",
      contactType: "Customer Service",
      email: "optivis.ocs.support@gmail.com",
    },
  },

  service: (title: string, description: string) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description: description,
    provider: {
      "@type": "Organization",
      name: "Optivis",
      url: siteConfig.url,
    },
  }),

  webpage: (title: string, description: string) => ({
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: siteConfig.url,
    publisher: {
      "@type": "Organization",
      name: "Optivis",
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
  }),
};
