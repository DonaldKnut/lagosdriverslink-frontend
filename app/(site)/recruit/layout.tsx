import type { Metadata } from "next";

export const metadata: Metadata = {
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
  openGraph: {
    title: "Recruit Professional Drivers | Partner with Lagos Drivers Link",
    description:
      "Partner with Lagos Drivers Link to recruit experienced, professional drivers across Lagos. Join our network and find trusted drivers fast.",
    url: "/recruit",
    type: "website",
    images: [
      {
        url: "/og-recruit.jpg",
        width: 1200,
        height: 630,
        alt: "Recruit Professional Drivers with Lagos Drivers Link",
      },
    ],
  },
  twitter: {
    title: "Recruit Professional Drivers | Partner with Lagos Drivers Link",
    description:
      "Partner with Lagos Drivers Link to recruit experienced, professional drivers across Lagos. Join our network and find trusted drivers fast.",
    images: ["/og-recruit.jpg"],
  },
  alternates: {
    canonical: "/recruit",
  },
};

export default function RecruitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
