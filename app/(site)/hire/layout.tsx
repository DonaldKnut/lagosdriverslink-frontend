import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Hire a Professional Driver in Lagos - Get a Pro Driver | Lagos Drivers Link",
  description:
    "Professional drivers, hire a professional driver, get a pro driver in Lagos. Recruit professional drivers and hire a pro driver in Lagos. Easy online booking with transparent pricing. Get your professional driver today!",
  keywords: [
    "hire driver Lagos",
    "book driver Lagos",
    "professional driver hire",
    "corporate driver services",
    "private driver Lagos",
    "chauffeur booking",
    "driver services Lagos",
    "verified drivers Lagos",
    "hire a professional driver",
    "get a pro driver in lagos",
    "recruit professional",
    "hire a pro driver in lagos",
    "professional driver services",
    "pro driver hire",
    "professional chauffeur Lagos",
    "experienced drivers Lagos",
  ],
  openGraph: {
    title:
      "Hire a Professional Driver in Lagos - Get a Pro Driver | Lagos Drivers Link",
    description:
      "Professional drivers, hire a professional driver, get a pro driver in Lagos. Recruit professional drivers and hire a pro driver in Lagos. Easy online booking with transparent pricing.",
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
    title:
      "Hire a Professional Driver in Lagos - Get a Pro Driver | Lagos Drivers Link",
    description:
      "Professional drivers, hire a professional driver, get a pro driver in Lagos. Recruit professional drivers and hire a pro driver in Lagos. Easy online booking with transparent pricing.",
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
