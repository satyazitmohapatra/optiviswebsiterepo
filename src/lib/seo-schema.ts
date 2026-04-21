export function generateStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://optivisconsultancyservices.tech/#organization',
        name: 'Optivis Consultancy Services',
        alternateName: 'Optivis',
        url: 'https://optivisconsultancyservices.tech',
        telephone: '+91 7978289942',
        email: 'optivis.ocs.support@gmail.com',
        description:
          'Digital transformation and enterprise consulting services providing software development, AI insights, and engineering excellence.',
        logo: {
          '@type': 'ImageObject',
          url: 'https://optivisconsultancyservices.tech/images/home-studio-rgb.avif',
          width: 300,
          height: 300,
        },
        sameAs: [
          'https://www.linkedin.com/company/optivis',
          'https://github.com/optivis',
          'https://twitter.com/optivis',
        ],
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'IN',
          addressLocality: 'India',
        },
        foundingDate: '2020',
        areaServed: {
          '@type': 'Country',
          name: 'India',
        },
        knowsAbout: [
          'Digital Transformation',
          'Web Development',
          'Enterprise Software',
          'AI and Machine Learning',
          'Cloud Computing',
          'Data Analytics',
        ],
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://optivisconsultancyservices.tech/#local-business',
        name: 'Optivis Consultancy Services',
        url: 'https://optivisconsultancyservices.tech',
        telephone: '+91 7978289942',
        email: 'optivis.ocs.support@gmail.com',
        priceRange: '₹1999 - ₹50000+',
        serviceScopeOffered: [
          'Digital Transformation Services',
          'Web Development',
          'AI and Data Analytics',
          'Enterprise Consulting',
          'Social Media Marketing',
          'Content Editing',
        ],
        areaServed: {
          '@type': 'Country',
          name: 'India',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://optivisconsultancyservices.tech/#website',
        url: 'https://optivisconsultancyservices.tech',
        name: 'Optivis Consultancy Services',
        description:
          'Enterprise digital transformation and consulting services',
        publisher: {
          '@id': 'https://optivisconsultancyservices.tech/#organization',
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate:
              'https://optivisconsultancyservices.tech/search?q={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://optivisconsultancyservices.tech/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://optivisconsultancyservices.tech',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: 'https://optivisconsultancyservices.tech#services',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Contact',
            item: 'https://optivisconsultancyservices.tech#contact',
          },
        ],
      },
    ],
  }

  return structuredData
}
