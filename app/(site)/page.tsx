// pages/index.tsx
import FAQ from "../components/FAQ";
import FeaturedDrivers from "../components/FeaturedDrivers";
import HeroSection from "../components/HeroSection";
import Testimonials from "../components/Testimonials";
import { sanityClient } from "@/lib/sanity";
import { HOMEPAGE_QUERY } from "@/lib/queries";
import HirePlansSection from "../components/HirePlansSection";
import WhatsAppFloatingButton from "../components/WhatsAppFloatingButton";
import { HomepageData } from "@/types/homepage";

// Fallback image
const BASE_URL = process.env.NEXTAUTH_URL || "https://lagosdriverslink.com";

// ISR: Revalidate every 60 seconds
export const revalidate = 60;

export default async function HomePage() {
  const data: HomepageData | null = await sanityClient
    .fetch(HOMEPAGE_QUERY)
    .catch((error) => {
      console.error("Sanity fetch failed:", error);
      return null;
    });

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <h1 className="text-3xl font-bold text-yellow-400">
          Oops, something went wrong
        </h1>
        <p className="mt-2 text-lg">
          Unable to load content. Please try again later.
        </p>
        <a
          href="https://wa.me/+234 903 270 2233"
          className="mt-4 px-6 py-3 bg-yellow-400 text-black rounded-lg"
        >
          Contact Support
        </a>
      </div>
    );
  }

  return (
    <div>
      <HeroSection
        heroTitle={data.heroTitle ?? "Hire Verified Drivers in Lagos"}
        heroSubtitle={
          data.heroSubtitle ?? "Pre-vetted professionals for all driving needs"
        }
        heroImage={data.heroImage?.asset?.url ?? `${BASE_URL}/ldl_logo.png`}
        ctaText={data.ctaText ?? "Book a Driver"}
        ctaLink={data.ctaLink ?? "/hire"}
      />
      <FeaturedDrivers />
      <HirePlansSection />
      <Testimonials />
      <FAQ />
      <WhatsAppFloatingButton />
    </div>
  );
}
