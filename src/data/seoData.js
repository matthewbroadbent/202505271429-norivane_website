// SEO data for each page
export const seoData = {
  home: {
    title: 'Norivane | Expert Business Exit Strategy Consultants',
    description: 'Specialised coaching for business owners with companies with turnover between £1M-£20M looking to maximise their exit value.',
    canonicalUrl: '/',
    ogImage: '/images/og-image.jpg',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Norivane',
      url: 'https://norivane.com',
      logo: 'https://norivane.com/images/logo.png',
      description: 'Expert business exit strategy consultants for companies with £1M-£20M turnover.',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'UK'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+447356224125',
        contactType: 'customer service',
        email: 'us@norivane.com'
      },
      sameAs: [
        'https://www.linkedin.com/company/norivane',
        'https://twitter.com/norivane'
      ]
    }
  },
  about: {
    title: 'About Norivane | Our Expertise in Business Exit Strategies',
    description: 'Learn about Norivane\'s team of expert consultants specialising in maximising business exit value for companies with £1M-£20M turnover.',
    canonicalUrl: '/about',
    ogImage: '/images/about-og.jpg',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      mainEntity: {
        '@type': 'Organization',
        name: 'Norivane',
        description: 'Expert business exit strategy consultants for companies with £1M-£20M turnover.'
      }
    }
  },
  services: {
    title: 'Our Services | Business Exit Strategy & Valuation | Norivane',
    description: 'Comprehensive exit strategy services including business valuation, buyer identification, negotiation support, and post-sale transition planning.',
    canonicalUrl: '/services',
    ogImage: '/images/services-og.jpg',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      provider: {
        '@type': 'Organization',
        name: 'Norivane'
      },
      serviceType: 'Business Exit Strategy Consulting',
      description: 'Comprehensive exit strategy services including business valuation, buyer identification, negotiation support, and post-sale transition planning.'
    }
  },
  process: {
    title: 'Our Process | How We Maximise Your Business Exit Value | Norivane',
    description: 'Discover Norivane\'s proven 5-step process for maximising business exit value, from initial assessment to successful transition.',
    canonicalUrl: '/process',
    ogImage: '/images/process-og.jpg',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Norivane Business Exit Process',
      description: 'Our proven 5-step process for maximising business exit value',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Initial Assessment',
          text: 'Comprehensive evaluation of your business'
        },
        {
          '@type': 'HowToStep',
          name: 'Strategy Development',
          text: 'Creating a tailored exit strategy'
        },
        {
          '@type': 'HowToStep',
          name: 'Value Enhancement',
          text: 'Implementing improvements to increase business value'
        },
        {
          '@type': 'HowToStep',
          name: 'Buyer Matching',
          text: 'Identifying and approaching potential buyers'
        },
        {
          '@type': 'HowToStep',
          name: 'Transaction & Transition',
          text: 'Managing the sale and ensuring smooth transition'
        }
      ]
    }
  },
  contact: {
    title: 'Contact Norivane | Business Exit Strategy Consultants',
    description: 'Get in touch with our team of expert business exit consultants. Schedule a consultation to discuss maximising your business exit value.',
    canonicalUrl: '/contact',
    ogImage: '/images/contact-og.jpg',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      mainEntity: {
        '@type': 'Organization',
        name: 'Norivane',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+447356224125',
          contactType: 'customer service',
          email: 'us@norivane.com'
        }
      }
    }
  },
  booking: {
    title: 'Book a Consultation | Norivane Business Exit Consultants',
    description: 'Schedule a consultation with our expert business exit consultants. Take the first step towards maximising your business exit value.',
    canonicalUrl: '/booking',
    ogImage: '/images/booking-og.jpg',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      provider: {
        '@type': 'Organization',
        name: 'Norivane'
      },
      serviceType: 'Business Exit Strategy Consultation',
      description: 'Expert consultation on business exit strategies for companies with £1M-£20M turnover.'
    }
  }
};
