import type { Metadata } from "next";

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  url: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export function generateMetadata(config: SEOConfig): Metadata {
  const baseUrl = process.env.NEXTAUTH_URL || "https://lagosdriverslink.com";
  const fullUrl = `${baseUrl}${config.url}`;
  const imageUrl = config.image
    ? `${baseUrl}${config.image}`
    : `${baseUrl}/og-image.jpg`;

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    authors: config.author ? [{ name: config.author }] : undefined,
    openGraph: {
      title: config.title,
      description: config.description,
      url: fullUrl,
      type: config.type || "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: config.title,
        },
      ],
      publishedTime: config.publishedTime,
      modifiedTime: config.modifiedTime,
      authors: config.author ? [config.author] : undefined,
      section: config.section,
      tags: config.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
      images: [imageUrl],
      creator: "@lagosdriverslink",
    },
    alternates: {
      canonical: fullUrl,
    },
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
  };
}

// Common SEO configurations for different page types
export const seoConfigs = {
  home: {
    title: "Lagos Drivers Link - Professional Driver Services in Lagos",
    description:
      "Hire verified, professional drivers in Lagos for corporate, private, and logistics needs. Pre-vetted chauffeurs available 24/7. Book your driver today!",
    keywords: [
      "Lagos drivers",
      "professional drivers Lagos",
      "chauffeur services Lagos",
      "driver hire Lagos",
      "corporate drivers",
      "private drivers",
      "logistics drivers",
      "verified drivers",
      "driver services Nigeria",
      "Lagos transportation",
    ],
    url: "/",
  },

  hire: {
    title: "Hire Professional Drivers in Lagos",
    description:
      "Book verified, professional drivers in Lagos for corporate, private, and logistics needs. Easy online booking with transparent pricing. Get your driver today!",
    keywords: [
      "hire driver Lagos",
      "book driver Lagos",
      "professional driver hire",
      "corporate driver services",
      "private driver Lagos",
      "chauffeur booking",
      "driver services Lagos",
      "verified drivers Lagos",
    ],
    url: "/hire",
    image: "/og-hire.jpg",
  },

  recruit: {
    title: "Recruit Professional Drivers | Partner with Lagos Drivers Link",
    description:
      "Partner with Lagos Drivers Link to recruit experienced, professional drivers across Lagos. Join our network and find trusted drivers fast. Easy recruitment process.",
    keywords: [
      "driver recruitment Lagos",
      "hire drivers Lagos",
      "driver hiring Nigeria",
      "chauffeur recruitment",
      "driving jobs Lagos",
      "professional driver recruitment",
      "driver agency partnership",
      "recruit drivers Nigeria",
    ],
    url: "/recruit",
    image: "/og-recruit.jpg",
  },

  corporate: {
    title: "Corporate Driver Services Lagos | Executive Transportation",
    description:
      "Premium corporate driver services in Lagos for executives, VIPs, and business professionals. Reliable, professional chauffeurs for corporate transportation needs.",
    keywords: [
      "corporate drivers Lagos",
      "executive transportation Lagos",
      "business driver services",
      "VIP chauffeur services",
      "corporate transportation Lagos",
      "executive driver hire",
      "professional chauffeur Lagos",
      "business travel drivers",
    ],
    url: "/corporate",
    image: "/og-corporate.jpg",
  },

  contact: {
    title: "Contact Lagos Drivers Link | Get in Touch",
    description:
      "Contact Lagos Drivers Link for professional driver services. Call +234-903-270-2233 or visit our Lagos office. Get quotes, support, and driver bookings.",
    keywords: [
      "contact Lagos drivers",
      "Lagos Drivers Link contact",
      "driver services contact",
      "Lagos office address",
      "driver booking contact",
      "professional driver support",
      "Lagos transportation contact",
    ],
    url: "/contact",
    image: "/og-contact.jpg",
  },
};

// Generate breadcrumb structured data
export function generateBreadcrumbData(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${process.env.NEXTAUTH_URL || "https://lagosdriverslink.com"}${item.url}`,
    })),
  };
}

// Generate FAQ structured data
export function generateFAQData(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Generate review structured data
export function generateReviewData(
  reviews: Array<{
    author: string;
    rating: number;
    reviewBody: string;
    datePublished: string;
  }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Lagos Drivers Link",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue:
        reviews.reduce((sum, review) => sum + review.rating, 0) /
        reviews.length,
      reviewCount: reviews.length,
    },
    review: reviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.author,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
      },
      reviewBody: review.reviewBody,
      datePublished: review.datePublished,
    })),
  };
}
