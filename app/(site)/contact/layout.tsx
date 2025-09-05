import type { Metadata } from "next";

export const metadata: Metadata = {
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
  openGraph: {
    title: "Contact Lagos Drivers Link | Get in Touch",
    description:
      "Contact Lagos Drivers Link for professional driver services. Call +234-903-270-2233 or visit our Lagos office. Get quotes, support, and driver bookings.",
    url: "/contact",
    type: "website",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Lagos Drivers Link",
      },
    ],
  },
  twitter: {
    title: "Contact Lagos Drivers Link | Get in Touch",
    description:
      "Contact Lagos Drivers Link for professional driver services. Call +234-903-270-2233 or visit our Lagos office.",
    images: ["/og-contact.jpg"],
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
