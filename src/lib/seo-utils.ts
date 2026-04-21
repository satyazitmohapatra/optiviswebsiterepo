// File: src/lib/seo-utils.ts
// Helper functions for SEO optimization across components

/**
 * Generate optimized meta description for services
 */
export function generateServiceDescription(
  serviceName: string,
  description: string,
  keywords?: string[]
): string {
  const keywordString = keywords ? ` ${keywords.join(', ')}` : '';
  return `${description}${keywordString}`.slice(0, 160);
}

/**
 * Generate canonical URL for a page
 */
export function getCanonicalUrl(path: string = ''): string {
  const baseUrl = 'https://optivisconsultancyservices.tech';
  return path ? `${baseUrl}${path}` : baseUrl;
}

/**
 * Generate Open Graph image URL
 */
export function getOgImageUrl(imageName: string): string {
  return `https://optivisconsultancyservices.tech/images/${imageName}`;
}

/**
 * Generate structured data for a service
 */
export function generateServiceSchema(
  name: string,
  description: string,
  price?: string,
  image?: string
) {
  return {
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: 'Optivis Consultancy Services',
      url: 'https://optivisconsultancyservices.tech',
    },
    ...(price && { priceRange: price }),
    ...(image && { image: getOgImageUrl(image) }),
  };
}

/**
 * Generate FAQ structured data
 */
export interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(items: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

/**
 * Generate blog post schema
 */
export function generateBlogPostSchema(
  headline: string,
  description: string,
  image: string,
  datePublished: Date,
  dateModified?: Date
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    description,
    image,
    datePublished: datePublished.toISOString(),
    dateModified: (dateModified || datePublished).toISOString(),
    author: {
      '@type': 'Organization',
      name: 'Optivis Consultancy Services',
      url: 'https://optivisconsultancyservices.tech',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Optivis Consultancy Services',
      logo: {
        '@type': 'ImageObject',
        url: 'https://optivisconsultancyservices.tech/images/home-studio-rgb.avif',
      },
    },
  };
}

/**
 * Generate review/rating schema
 */
export function generateAggregateRatingSchema(
  ratingValue: number,
  ratingCount: number,
  reviewCount: number
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Optivis Consultancy Services',
    url: 'https://optivisconsultancyservices.tech',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue,
      ratingCount,
      reviewCount,
    },
  };
}

/**
 * Recommended keywords by service category
 */
export const SEO_KEYWORDS = {
  digitalTransformation: [
    'digital transformation consulting',
    'enterprise digital solutions',
    'legacy system modernization',
    'business process optimization',
    'digital strategy',
  ],
  engineering: [
    'software development company',
    'enterprise software solutions',
    'web application development',
    'scalable software architecture',
    'custom software development',
  ],
  dataAi: [
    'data analytics services',
    'AI-powered insights',
    'machine learning solutions',
    'predictive analytics',
    'business intelligence',
  ],
  webDevelopment: [
    'web development services',
    'website design and development',
    'responsive web design',
    'e-commerce development',
    'web application development',
  ],
};

/**
 * Image alt text suggestions
 */
export const IMAGE_ALT_TEXT = {
  hero: 'Optivis Consultancy Services - Digital Transformation Solutions',
  service: 'Professional business consulting services',
  team: 'Optivis team collaborating on enterprise solutions',
  office: 'Modern consultancy office environment',
  technology: 'Cutting-edge technology infrastructure',
  meeting: 'Business meeting and consulting session',
};

/**
 * Common SEO best practices to remember
 */
export const SEO_BEST_PRACTICES = {
  metaDescription: {
    minLength: 120,
    maxLength: 160,
    tips: 'Include primary keyword, include call-to-action, be specific',
  },
  heading: {
    rule: 'One H1 per page, proper hierarchy H1 > H2 > H3',
    tips: 'Include target keywords naturally, use for structure not styling',
  },
  imageOptimization: {
    formats: 'Use WebP, AVIF with fallbacks',
    size: 'Compress images to <100KB for web',
    altText: 'Descriptive alt text with keywords where relevant',
  },
  internalLinks: {
    anchor: 'Use descriptive anchor text',
    relevance: 'Link to related content',
    hierarchy: 'Maintain logical site structure',
  },
  performance: {
    target: 'LCP < 2.5s, FID < 100ms, CLS < 0.1',
    tools: 'Use Google PageSpeed Insights',
  },
};
