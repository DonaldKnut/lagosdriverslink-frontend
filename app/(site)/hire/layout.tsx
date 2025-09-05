import type { Metadata } from "next";

export const metadata: Metadata = {
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
  openGraph: {
    title: "Hire Professional Drivers in Lagos | Lagos Drivers Link",
    description:
      "Book verified, professional drivers in Lagos for corporate, private, and logistics needs. Easy online booking with transparent pricing.",
    url: "/hire",
    type: "website",
    images: [
      {
        url: "/og-hire.jpg",
        width: 1200,
        height: 630,
        alt: "Hire Professional Drivers in Lagos",
      },
    ],
  },
  twitter: {
    title: "Hire Professional Drivers in Lagos | Lagos Drivers Link",
    description:
      "Book verified, professional drivers in Lagos for corporate, private, and logistics needs. Easy online booking with transparent pricing.",
    images: ["/og-hire.jpg"],
  },
  alternates: {
    canonical: "/hire",
  },
};

export default function HireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
