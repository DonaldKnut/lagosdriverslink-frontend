import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";
import { Providers } from "./providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Lagos Drivers Link - Professional Driver Services in Lagos",
    template: "%s | Lagos Drivers Link",
  },
  description:
    "Hire a Pro Driver in Lagos. Pre-vetted professionals for all driving needs.",
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
    "professional drivers",
    "hire a professional driver",
    "get a pro driver in lagos",
    "recruit professional",
    "hire a pro driver in lagos",
    "professional driver services",
    "pro driver hire",
    "professional chauffeur Lagos",
    "experienced drivers Lagos",
    "qualified drivers Nigeria",
  ],
  authors: [{ name: "Lagos Drivers Link" }],
  creator: "Lagos Drivers Link",
  publisher: "Lagos Drivers Link",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXTAUTH_URL || "https://lagosdriverslink.com"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    title:
      "Professional Drivers Lagos - Hire a Pro Driver in Lagos | Lagos Drivers Link",
    description:
      "Hire a Pro Driver in Lagos. Pre-vetted professionals for all driving needs.",
    siteName: "Lagos Drivers Link",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lagos Drivers Link - Professional Driver Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Professional Drivers Lagos - Hire a Pro Driver in Lagos | Lagos Drivers Link",
    description:
      "Hire a Pro Driver in Lagos. Pre-vetted professionals for all driving needs.",
    images: ["/og-image.jpg"],
    creator: "@lagosdriverslink",
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
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        <StructuredData type="Organization" data={{}} />
        <StructuredData type="WebSite" data={{}} />
        <StructuredData type="LocalBusiness" data={{}} />
        <StructuredData type="Service" data={{}} />
      </head>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
