import { Helmet } from 'react-helmet-async';

const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=1200&h=630&fit=crop',
  ogType = 'website',
  structuredData,
  noindex = false,
}) => {
  const siteName = 'Rudhra Bakes';
  const baseUrl = 'https://rudhrabakes.com';
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} | 24/7 Bakery & Cafe in Coimbatore`;
  const defaultDescription = 'Rudhra Bakes - Your 24/7 bakery in Coimbatore. Fresh cakes, puffs, pizza, coffee & quick bites ready whenever hunger hits. Located near Sakthi Engineering College.';
  const metaDescription = description || defaultDescription;
  const canonical = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO Meta Tags */}
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Coimbatore" />
      <meta name="geo.position" content="11.0395907;77.0775582" />
      <meta name="ICBM" content="11.0395907, 77.0775582" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

// Local Business Schema for the bakery
export const getLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Bakery',
  '@id': 'https://rudhrabakes.com/#bakery',
  name: 'Rudhra Bakes',
  alternateName: 'Rudhra Bakes - 24/7 Bakery & Cafe',
  description: 'Fresh bakery items, cakes, puffs, pizza, burgers, and beverages served 24/7 in Coimbatore. Known for authentic filter coffee and crispy veg puffs.',
  url: 'https://rudhrabakes.com',
  telephone: '+918778873773',
  email: 'contact@rudhrabakes.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '66/3C Milakai Thottam, Opposite Sakthi Engineering College',
    addressLocality: 'Coimbatore',
    addressRegion: 'Tamil Nadu',
    postalCode: '641062',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 11.0395907,
    longitude: 77.0775582,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  image: [
    'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1200&h=800&fit=crop',
  ],
  priceRange: '₹₹',
  servesCuisine: ['Bakery', 'Indian', 'Fast Food', 'Coffee'],
  hasMenu: 'https://rudhrabakes.com/menu',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.1',
    reviewCount: '207',
    bestRating: '5',
    worstRating: '1',
  },
  sameAs: [
    'https://www.google.com/maps/place/Rudhra+bakes/@11.039596,77.0749833,17z',
  ],
});

// Menu/Restaurant Schema
export const getMenuSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Menu',
  '@id': 'https://rudhrabakes.com/menu#menu',
  name: 'Rudhra Bakes Menu',
  description: 'Complete menu of cakes, snacks, pizza, burgers, and beverages at Rudhra Bakes',
  hasMenuSection: [
    {
      '@type': 'MenuSection',
      name: 'Cakes',
      description: 'Freshly baked cakes and pastries',
      hasMenuItem: [
        {
          '@type': 'MenuItem',
          name: 'Chocolate Truffle Cake',
          description: 'Rich, decadent chocolate layers with ganache',
          offers: {
            '@type': 'Offer',
            price: '450',
            priceCurrency: 'INR',
          },
        },
        {
          '@type': 'MenuItem',
          name: 'Black Forest Cake',
          description: 'Classic cherry and cream delight',
          offers: {
            '@type': 'Offer',
            price: '400',
            priceCurrency: 'INR',
          },
        },
      ],
    },
    {
      '@type': 'MenuSection',
      name: 'Snacks & Puffs',
      description: 'Crispy snacks and fresh puffs',
      hasMenuItem: [
        {
          '@type': 'MenuItem',
          name: 'Veg Puff',
          description: 'Flaky pastry with spiced potato filling',
          offers: {
            '@type': 'Offer',
            price: '20',
            priceCurrency: 'INR',
          },
        },
        {
          '@type': 'MenuItem',
          name: 'Samosa (2 pcs)',
          description: 'Crispy triangles with potato masala',
          offers: {
            '@type': 'Offer',
            price: '30',
            priceCurrency: 'INR',
          },
        },
      ],
    },
    {
      '@type': 'MenuSection',
      name: 'Beverages',
      description: 'Hot and cold beverages',
      hasMenuItem: [
        {
          '@type': 'MenuItem',
          name: 'Filter Coffee',
          description: 'Strong, authentic South Indian brew',
          offers: {
            '@type': 'Offer',
            price: '25',
            priceCurrency: 'INR',
          },
        },
      ],
    },
  ],
});

// FAQ Schema for Reviews page
export const getFAQSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Rudhra Bakes open 24 hours?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Rudhra Bakes is open 24/7, including weekends and holidays. You can visit us anytime for fresh bakery items, snacks, and beverages.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Rudhra Bakes located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rudhra Bakes is located at 66/3C Milakai Thottam, opposite Sakthi Engineering College, Venkitapuram Post, Coimbatore, Tamil Nadu 641062.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the popular items at Rudhra Bakes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our most popular items include Veg Puff (Rs.20), Filter Coffee (Rs.25), Chocolate Truffle Cake (Rs.450), and Pizza starting from Rs.120. We are especially known for fresh puffs and authentic South Indian filter coffee.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Rudhra Bakes deliver?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can place orders via WhatsApp at +91 8778873773 or call us directly. We offer quick pickup service with most orders ready in 15-20 minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the price range at Rudhra Bakes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rudhra Bakes offers budget-friendly options starting from Rs.15. Snacks range from Rs.20-35, beverages from Rs.20-70, and cakes from Rs.45 per slice to Rs.500 for full cakes.',
      },
    },
  ],
});

// BreadcrumbList Schema
export const getBreadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `https://rudhrabakes.com${item.path}`,
  })),
});

// Organization Schema
export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Rudhra Bakes',
  url: 'https://rudhrabakes.com',
  logo: 'https://rudhrabakes.com/favicon.svg',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-8778873773',
    contactType: 'customer service',
    availableLanguage: ['English', 'Tamil'],
    areaServed: 'IN',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '66/3C Milakai Thottam, Opposite Sakthi Engineering College',
    addressLocality: 'Coimbatore',
    addressRegion: 'Tamil Nadu',
    postalCode: '641062',
    addressCountry: 'IN',
  },
});

export default SEO;
