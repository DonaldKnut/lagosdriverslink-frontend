import React from "react";

interface StructuredDataProps {
  type:
    | "Organization"
    | "Service"
    | "LocalBusiness"
    | "WebSite"
    | "BreadcrumbList";
  data: Record<string, unknown> | Array<Record<string, unknown>>;
}

export const StructuredData: React.FC<StructuredDataProps> = ({
  type,
  data,
}) => {
  const getStructuredData = () => {
    switch (type) {
      case "Organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Lagos Drivers Link",
          alternateName: "LDL",
          url: "https://lagosdriverslink.com",
          logo: "https://lagosdriverslink.com/ldl_logo.png",
          description:
            "Professional driver services in Lagos, Nigeria. Hire verified, experienced drivers for corporate, private, and logistics needs.",
          foundingDate: "2023",
          address: {
            "@type": "PostalAddress",
            streetAddress: "24a Bashorun R.I. Okusanya Ave, Lekki Phase 1",
            addressLocality: "Lagos",
            postalCode: "105102",
            addressCountry: "NG",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+234-903-270-2233",
            contactType: "customer service",
            availableLanguage: ["English"],
          },
          sameAs: ["https://wa.me/2349032702233"],
          serviceArea: {
            "@type": "GeoCircle",
            geoMidpoint: {
              "@type": "GeoCoordinates",
              latitude: 6.5244,
              longitude: 3.3792,
            },
            geoRadius: "50000",
          },
        };

      case "Service":
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Professional Driver Services",
          description:
            "Verified, professional driver services in Lagos for corporate, private, and logistics transportation needs.",
          provider: {
            "@type": "Organization",
            name: "Lagos Drivers Link",
            url: "https://lagosdriverslink.com",
          },
          areaServed: {
            "@type": "City",
            name: "Lagos",
            containedInPlace: {
              "@type": "Country",
              name: "Nigeria",
            },
          },
          serviceType: "Transportation Services",
          category: "Professional Driving Services",
          offers: {
            "@type": "Offer",
            description: "Professional driver services",
            availability: "https://schema.org/InStock",
            priceCurrency: "NGN",
          },
        };

      case "LocalBusiness":
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://lagosdriverslink.com/#business",
          name: "Lagos Drivers Link",
          image: "https://lagosdriverslink.com/ldl_logo.png",
          description: "Professional driver services in Lagos, Nigeria",
          url: "https://lagosdriverslink.com",
          telephone: "+234-903-270-2233",
          address: {
            "@type": "PostalAddress",
            streetAddress: "24a Bashorun R.I. Okusanya Ave, Lekki Phase 1",
            addressLocality: "Lagos",
            postalCode: "105102",
            addressCountry: "NG",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 6.5244,
            longitude: 3.3792,
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
          priceRange: "$$",
          paymentAccepted: "Cash, Bank Transfer, Card",
          currenciesAccepted: "NGN",
        };

      case "WebSite":
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Lagos Drivers Link",
          url: "https://lagosdriverslink.com",
          description: "Professional driver services in Lagos, Nigeria",
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate:
                "https://lagosdriverslink.com/search?q={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
          publisher: {
            "@type": "Organization",
            name: "Lagos Drivers Link",
            logo: {
              "@type": "ImageObject",
              url: "https://lagosdriverslink.com/ldl_logo.png",
            },
          },
        };

      case "BreadcrumbList":
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: (data as Array<Record<string, unknown>>).map(
            (item: Record<string, unknown>, index: number) => ({
              "@type": "ListItem",
              position: index + 1,
              name: item.name,
              item: item.url,
            })
          ),
        };

      default:
        return data;
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData(), null, 2),
      }}
    />
  );
};

export default StructuredData;
