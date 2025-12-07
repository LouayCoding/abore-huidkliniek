// Schema.org structured data voor SEO

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": "https://huidkliniekabore.nl/#organization",
  "name": "Aboré Huidkliniek",
  "alternateName": "Aboré",
  "url": "https://huidkliniekabore.nl",
  "logo": "https://huidkliniekabore.nl/logo.png",
  "image": "https://huidkliniekabore.nl/hero/11.jpg",
  "description": "Luxe laser- en huidkliniek in Rijswijk gespecialiseerd in acne behandeling, laserontharing, pigmentbehandeling en huidverjonging.",
  "priceRange": "€€",
  "telephone": "+31634533358",
  "email": "info@huidkliniekabore.nl",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Waldhoornplein 14",
    "addressLocality": "Rijswijk",
    "addressRegion": "Zuid-Holland",
    "postalCode": "2282",
    "addressCountry": "NL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "52.0456789",
    "longitude": "4.3234567"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "16:00"
    }
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Rijswijk"
    },
    {
      "@type": "City",
      "name": "Den Haag"
    },
    {
      "@type": "City",
      "name": "Delft"
    },
    {
      "@type": "City",
      "name": "Voorburg"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  },
  "sameAs": [
    "https://www.instagram.com/abore_huidkliniek",
    "https://www.facebook.com/aborehuidkliniek"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://huidkliniekabore.nl/#website",
  "url": "https://huidkliniekabore.nl",
  "name": "Aboré Huidkliniek",
  "publisher": {
    "@id": "https://huidkliniekabore.nl/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://huidkliniekabore.nl/zoeken?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const serviceSchema = (service: {
  name: string;
  description: string;
  url: string;
  price?: string;
  priceRange?: string;
  duration?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": service.name,
  "description": service.description,
  "url": service.url,
  "provider": {
    "@id": "https://huidkliniekabore.nl/#organization"
  },
  ...(service.price && {
    "offers": {
      "@type": "Offer",
      "price": service.price,
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock"
    }
  }),
  ...(service.priceRange && {
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "EUR",
      "lowPrice": service.priceRange.split("-")[0],
      "highPrice": service.priceRange.split("-")[1],
      "availability": "https://schema.org/InStock"
    }
  }),
  ...(service.duration && {
    "duration": service.duration
  })
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const articleSchema = (article: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "url": article.url,
  "image": article.image,
  "datePublished": article.datePublished,
  "dateModified": article.dateModified || article.datePublished,
  "author": {
    "@type": "Organization",
    "name": article.author || "Aboré Huidkliniek"
  },
  "publisher": {
    "@id": "https://huidkliniekabore.nl/#organization"
  }
});

export const priceTableSchema = (prices: { name: string; price: string; duration: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": prices.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Offer",
      "name": item.name,
      "price": item.price.replace(/[^0-9]/g, ''),
      "priceCurrency": "EUR",
      "description": `Duur: ${item.duration}`
    }
  }))
});
