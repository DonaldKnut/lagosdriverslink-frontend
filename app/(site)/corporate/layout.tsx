import type { Metadata } from "next";

export const metadata: Metadata = {
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
  openGraph: {
    title: "Corporate Driver Services Lagos | Executive Transportation",
    description:
      "Premium corporate driver services in Lagos for executives, VIPs, and business professionals. Reliable, professional chauffeurs for corporate transportation needs.",
    url: "/corporate",
    type: "website",
    images: [
      {
        url: "/og-corporate.jpg",
        width: 1200,
        height: 630,
        alt: "Corporate Driver Services Lagos",
      },
    ],
  },
  twitter: {
    title: "Corporate Driver Services Lagos | Executive Transportation",
    description:
      "Premium corporate driver services in Lagos for executives, VIPs, and business professionals. Reliable, professional chauffeurs.",
    images: ["/og-corporate.jpg"],
  },
  alternates: {
    canonical: "/corporate",
  },
};

export default function CorporateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
