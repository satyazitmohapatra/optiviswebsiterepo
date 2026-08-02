export function generateStructuredData() {
  const baseUrl = "https://optivisconsultancyservices.tech";

  return {
    "@context": "https://schema.org",
    "@graph": [
      // ── Organization ──
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: "Optivis Consultancy Services",
        alternateName: ["Optivis", "OCS", "Optivis Enterprise Solutions", "Optivis Global"],
        url: baseUrl,
        logo: {
          "@type": "ImageObject",
          "@id": `${baseUrl}/#logo`,
          url: `${baseUrl}/images/logo.png`,
          contentUrl: `${baseUrl}/images/logo.png`,
          width: 500,
          height: 150,
          caption: "Optivis Consultancy Services — Enterprise Digital Transformation",
        },
        image: `${baseUrl}/images/og-image.png`,
        description:
          "Optivis Consultancy Services is an enterprise IT consulting firm specializing in digital transformation, cloud architecture, AI analytics, custom full-stack web & mobile engineering, and multilingual G2C public sector portals.",
        slogan: "Engineering Digital Excellence",
        email: "optivis.ocs.support@gmail.com",
        telephone: "+91-7978289942",
        foundingDate: "2020",
        foundingLocation: {
          "@type": "Place",
          name: "Bhubaneswar, Odisha, India",
        },
        numberOfEmployees: {
          "@type": "QuantitativeValue",
          minValue: 5,
          maxValue: 20,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Bhubaneswar",
          addressLocality: "Bhubaneswar",
          addressRegion: "Odisha",
          postalCode: "751001",
          addressCountry: "IN",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+91-7978289942",
            contactType: "customer service",
            email: "optivis.ocs.support@gmail.com",
            availableLanguage: ["English", "Hindi", "Odia"],
            areaServed: ["IN", "GB", "US", "AE", "SG"],
            hoursAvailable: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "18:00",
            },
          },
          {
            "@type": "ContactPoint",
            telephone: "+91-7978289942",
            contactType: "sales",
            email: "optivis.ocs.support@gmail.com",
            availableLanguage: ["English", "Hindi", "Odia"],
          },
          {
            "@type": "ContactPoint",
            telephone: "+91-7978289942",
            contactType: "technical support",
            email: "optivis.ocs.support@gmail.com",
            availableLanguage: ["English"],
          },
        ],
        sameAs: [
          "https://www.linkedin.com/company/optivisconsultancy",
          "https://github.com/satyajitmohapatra",
          "https://github.com/rudraprasadrout",
          "https://instagram.com/optivisconsultancy",
        ],
        knowsAbout: [
          "Digital Transformation",
          "Enterprise Cloud Engineering",
          "Artificial Intelligence & Machine Learning",
          "Web & Mobile Application Development",
          "Multilingual G2C Public Sector Portals",
          "DevOps & CI/CD Pipelines",
          "Cybersecurity & Zero-Trust Architecture",
          "React & Next.js Development",
          "Node.js & TypeScript Engineering",
          "AWS Cloud Infrastructure",
          "SEO & Digital Marketing",
          "Enterprise UI/UX Design",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Optivis Enterprise Services",
          itemListElement: [
            {
              "@type": "OfferCatalog",
              name: "Web Development",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Starter Package — Foundation Build",
                    description: "Production-quality single page website with contact form, SEO, and responsive design.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Growth Package — Multi-Page Business Platform",
                    description: "5-page SEO-optimized platform with CMS, analytics, and premium design system.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Enterprise — Full-Scale Digital Ecosystem",
                    description: "Full-stack enterprise platform with API gateway, dashboard portal, AI integrations, and cloud infrastructure.",
                  },
                },
              ],
            },
          ],
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "52",
          bestRating: "5",
          worstRating: "1",
        },
      },

      // ── Founders & Key People ──
      {
        "@type": "Person",
        "@id": `${baseUrl}/#satyajit-mohapatra`,
        name: "Satyajit Mohapatra",
        jobTitle: "CEO & Co-Founder",
        description: "Satyajit drives Optivis' vision, strategic partnerships, and global growth across enterprise digital transformation.",
        worksFor: { "@id": `${baseUrl}/#organization` },
        alumniOf: "Technology Leadership",
        knowsAbout: ["Executive Strategy", "Digital Transformation", "Corporate Growth", "Client Relations"],
        sameAs: [
          "https://www.linkedin.com/in/satyajit-mohapatra-48838a343/",
          "https://github.com/satyajitmohapatra",
        ],
      },
      {
        "@type": "Person",
        "@id": `${baseUrl}/#rudra-prasad-rout`,
        name: "Rudra Prasad Rout",
        jobTitle: "CTO & Co-Founder",
        description: "Rudra leads technology innovation, distributed systems architecture, and AI-driven platform integrations at Optivis.",
        worksFor: { "@id": `${baseUrl}/#organization` },
        knowsAbout: ["System Architecture", "Cloud Infrastructure", "Full-Stack Engineering", "AI & RAG Systems"],
        sameAs: [
          "https://www.linkedin.com/in/routrp07/",
          "https://github.com/rudraprasadrout",
          "https://rprout07.netlify.app",
        ],
      },
      {
        "@type": "Person",
        "@id": `${baseUrl}/#t-omkar`,
        name: "T. Omkar",
        jobTitle: "COO & Co-Founder",
        description: "Omkar oversees daily operations, delivery pipelines, and client service management ensuring enterprise quality standards.",
        worksFor: { "@id": `${baseUrl}/#organization` },
        knowsAbout: ["Operational Excellence", "Agile Delivery", "Resource Management"],
        sameAs: ["https://www.linkedin.com/in/t-omkar-025383382/"],
      },
      {
        "@type": "Person",
        "@id": `${baseUrl}/#abhisekh-das`,
        name: "Abhisekh Das",
        jobTitle: "Marketing Manager & Co-Founder",
        description: "Abhisekh leads marketing strategies, brand identity, and B2B client acquisition at Optivis.",
        worksFor: { "@id": `${baseUrl}/#organization` },
        knowsAbout: ["Brand Strategy", "Growth Marketing", "B2B Client Acquisition"],
        sameAs: ["https://www.linkedin.com/in/abhisekh-das-b98828305/"],
      },

      // ── ProfessionalService (Local Business) ──
      {
        "@type": "ProfessionalService",
        "@id": `${baseUrl}/#local-business`,
        name: "Optivis Consultancy Services",
        url: baseUrl,
        telephone: "+91-7978289942",
        email: "optivis.ocs.support@gmail.com",
        priceRange: "₹50,000 - ₹5,000,000+",
        image: `${baseUrl}/images/og-image.png`,
        currenciesAccepted: "INR, USD, GBP",
        paymentAccepted: "Bank Transfer, UPI, International Wire",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Bhubaneswar",
          addressLocality: "Bhubaneswar",
          addressRegion: "Odisha",
          postalCode: "751001",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "20.2961",
          longitude: "85.8245",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday"],
            opens: "10:00",
            closes: "16:00",
          },
        ],
        areaServed: [
          { "@type": "Country", name: "India" },
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "United Arab Emirates" },
          { "@type": "Country", name: "Singapore" },
        ],
        hasMap: "https://maps.google.com/?q=20.2961,85.8245",
      },

      // ── WebSite ──
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "Optivis Consultancy Services",
        description: "Enterprise Digital Transformation, Cloud Architecture & Custom Software Engineering",
        publisher: { "@id": `${baseUrl}/#organization` },
        inLanguage: "en",
        copyrightYear: 2020,
        copyrightHolder: { "@id": `${baseUrl}/#organization` },
      },

      // ── WebPage (main landing page) ──
      {
        "@type": "WebPage",
        "@id": `${baseUrl}/#webpage`,
        url: baseUrl,
        name: "Optivis — Enterprise Digital Transformation & IT Consulting",
        description:
          "Transform your business with Optivis: enterprise web development, cloud architecture, AI analytics, and custom software engineering from Bhubaneswar, India.",
        isPartOf: { "@id": `${baseUrl}/#website` },
        about: { "@id": `${baseUrl}/#organization` },
        inLanguage: "en",
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${baseUrl}/images/og-image.png`,
        },
        datePublished: "2024-01-15",
        dateModified: new Date().toISOString().split("T")[0],
        breadcrumb: { "@id": `${baseUrl}/#breadcrumb` },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "#about h2", "#services h2"],
        },
      },

      // ── BreadcrumbList ──
      {
        "@type": "BreadcrumbList",
        "@id": `${baseUrl}/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
          { "@type": "ListItem", position: 2, name: "About", item: `${baseUrl}/#about` },
          { "@type": "ListItem", position: 3, name: "Services", item: `${baseUrl}/#services` },
          { "@type": "ListItem", position: 4, name: "Team", item: `${baseUrl}/#team` },
          { "@type": "ListItem", position: 5, name: "Pricing", item: `${baseUrl}/#pricing` },
          { "@type": "ListItem", position: 6, name: "Free Audit", item: `${baseUrl}/#free-audit` },
          { "@type": "ListItem", position: 7, name: "FAQ", item: `${baseUrl}/#faq` },
          { "@type": "ListItem", position: 8, name: "Contact", item: `${baseUrl}/#contact` },
        ],
      },

      // ── FAQPage (all 5 questions) ──
      {
        "@type": "FAQPage",
        "@id": `${baseUrl}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "What core services does Optivis Consultancy Services specialize in?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Optivis specializes in Enterprise Digital Transformation, Custom Full-Stack Web & Mobile Engineering, AI & Neural Workload Analytics, Cloud Infrastructure & DevOps, Multilingual G2C Public Sector Portals, and High-Impact IT Strategy Consulting.",
            },
          },
          {
            "@type": "Question",
            name: "How does Optivis guarantee data security and compliance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Security is baked into our engineering lifecycle from sprint zero. We implement Zero-Trust cloud architectures, ISO/IEC 27001 compliance standards, automated CI/CD static security scanning, end-to-end encryption, and role-based access control.",
            },
          },
          {
            "@type": "Question",
            name: "What tech stack powers Optivis enterprise builds?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We build on high-throughput modern stacks: React, Next.js (SSR/SSG), TypeScript, Node.js, Python, PyTorch, Docker, Kubernetes, AWS, Google Cloud, and enterprise relational/NoSQL datastores optimized for sub-10ms latencies.",
            },
          },
          {
            "@type": "Question",
            name: "Does Optivis deliver multilingual civic and government solutions?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We specialize in accessible, high-concurrency Government-to-Citizen (G2C) portals with native multilingual support (English, Odia, Hindi), built to WCAG 2.1 accessibility benchmarks.",
            },
          },
          {
            "@type": "Question",
            name: "How can I schedule a consultation or request a bespoke proposal?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can click any 'Book a Consultation' button to open our interactive session scheduler, or use the Custom Package Builder under the Pricing section to tailor your required stack, budget, and timeline. We also offer a free 48-hour technical audit.",
            },
          },
          {
            "@type": "Question",
            name: "Where is Optivis Consultancy Services located?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Optivis Consultancy Services is headquartered in Bhubaneswar, Odisha, India. We serve enterprise clients globally across India, United Kingdom, United States, UAE, and Singapore.",
            },
          },
          {
            "@type": "Question",
            name: "Does Optivis offer free website audits?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, Optivis provides a completely free 48-hour technical & code audit. Our senior architects will analyze your website's Core Web Vitals, security vulnerabilities, mobile UX, and deliver a 5-page PDF report with actionable priority fixes.",
            },
          },
        ],
      },

      // ── Individual Service entries ──
      {
        "@type": "Service",
        "@id": `${baseUrl}/#service-web-development`,
        name: "Full-Stack Web & Mobile App Development",
        serviceType: "Software Engineering",
        description:
          "High-throughput React, Next.js, TypeScript, and Node.js enterprise web applications with responsive design, SEO optimization, and scalable API architecture.",
        provider: { "@id": `${baseUrl}/#organization` },
        areaServed: ["India", "United Kingdom", "United States"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Web Development Plans",
          itemListElement: [
            {
              "@type": "Offer",
              name: "Starter Package",
              priceCurrency: "INR",
              price: "49999",
              description: "Production-quality single page website with contact form, SEO, and responsive design.",
              availability: "https://schema.org/InStock",
            },
            {
              "@type": "Offer",
              name: "Growth Package",
              priceCurrency: "INR",
              price: "149999",
              description: "5-page SEO-optimized platform with CMS, analytics, and premium design system.",
              availability: "https://schema.org/InStock",
            },
            {
              "@type": "Offer",
              name: "Enterprise Package",
              priceCurrency: "INR",
              price: "499999",
              description: "Full-stack enterprise platform with API gateway, dashboard portal, AI integrations, and cloud infrastructure.",
              availability: "https://schema.org/InStock",
            },
          ],
        },
      },
      {
        "@type": "Service",
        "@id": `${baseUrl}/#service-digital-transformation`,
        name: "Enterprise Digital Transformation",
        serviceType: "IT Consulting & System Modernization",
        description:
          "Modernize legacy enterprise architectures to become an agile, data-driven enterprise with cloud-native systems and automated workflows.",
        provider: { "@id": `${baseUrl}/#organization` },
        areaServed: ["India", "United Kingdom", "United States"],
      },
      {
        "@type": "Service",
        "@id": `${baseUrl}/#service-cloud-devops`,
        name: "High-Performance Cloud & DevOps Architecture",
        serviceType: "Cloud Engineering",
        description:
          "Scalable, secure multi-region cloud infrastructure engineering on AWS, Google Cloud, and Azure with CI/CD pipeline automation.",
        provider: { "@id": `${baseUrl}/#organization` },
      },
      {
        "@type": "Service",
        "@id": `${baseUrl}/#service-ai-engineering`,
        name: "AI & Neural Workload Engineering",
        serviceType: "Artificial Intelligence",
        description:
          "Machine learning models, predictive analytics, NLP, computer vision, and enterprise RAG AI integrations for data-driven decision making.",
        provider: { "@id": `${baseUrl}/#organization` },
      },
      {
        "@type": "Service",
        "@id": `${baseUrl}/#service-digital-marketing`,
        name: "Digital Marketing & SEO",
        serviceType: "Marketing Services",
        description:
          "Strategic SEO, content marketing, social media management, PPC campaigns, and brand identity development for enterprise growth.",
        provider: { "@id": `${baseUrl}/#organization` },
      },
      {
        "@type": "Service",
        "@id": `${baseUrl}/#service-content-creative`,
        name: "Content & Creative Services",
        serviceType: "Creative Services",
        description:
          "Enterprise brand design, UI/UX, copywriting, video production, and creative campaign development.",
        provider: { "@id": `${baseUrl}/#organization` },
      },

      // ── HowTo: Free Audit Process ──
      {
        "@type": "HowTo",
        "@id": `${baseUrl}/#howto-free-audit`,
        name: "How to Get a Free 48-Hour Technical Audit from Optivis",
        description: "Request a complimentary code and performance audit for your website or app.",
        totalTime: "PT48H",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Submit Your Website URL",
            text: "Enter your website or app URL in the Free Audit form on our homepage.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Provide Your Business Email",
            text: "Enter your business email address so we can deliver the audit report.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Receive Your 5-Page PDF Report",
            text: "Our senior architects analyze Core Web Vitals, security vulnerabilities, and mobile UX, delivering a detailed PDF roadmap within 48 hours.",
          },
        ],
      },
    ],
  };
}
