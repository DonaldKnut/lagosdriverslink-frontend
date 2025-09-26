// pages/index.tsx
import FAQ from "../components/FAQ";
import HeroSection from "../components/HeroSection";
import Testimonials from "../components/Testimonials";
import { sanityClient } from "@/lib/sanity";
import { HOMEPAGE_QUERY } from "@/lib/queries";
import HirePlansSection from "../components/HirePlansSection";
import ProcessingFeesHighlight from "../components/ProcessingFeesHighlight";
import SalaryPlansHighlight from "../components/SalaryPlansHighlight";
import ExtraHighlightOne from "../components/ExtraHighlightOne";
import ExtraHighlightTwo from "../components/ExtraHighlightTwo";
import { HomepageData } from "@/types/homepage";
import { DriverHeroPromo } from "../components/DriverHeroPromo";
import FreerowSection from "../components/FreerowSection";

// Fallback image
const BASE_URL = process.env.NEXTAUTH_URL || "https://lagosdriverslink.com";

// Always render dynamically to reflect latest homepage sections immediately
export const revalidate = 0;
export const dynamic = "force-dynamic";

async function fetchHomepageDataWithTimeout(
  timeoutMs: number
): Promise<HomepageData | null> {
  try {
    const timeoutPromise = new Promise<null>((resolve) =>
      setTimeout(() => resolve(null), timeoutMs)
    );
    const data = await Promise.race<HomepageData | null>([
      sanityClient.fetch<HomepageData>(HOMEPAGE_QUERY),
      timeoutPromise,
    ]);
    return data ?? null;
  } catch (error) {
    console.error("Sanity fetch failed:", error);
    return null;
  }
}

export default async function HomePage() {
  const data: HomepageData | null = await fetchHomepageDataWithTimeout(4000);

  // Common props for both HeroSection and FreerowSection
  const heroProps = {
    heroTitle: data?.heroTitle ?? "Hire Verified Drivers in Lagos",
    heroSubtitle:
      data?.heroSubtitle ?? "Pre-vetted professionals for all driving needs",
    heroImage: data?.heroImage?.asset?.url ?? `${BASE_URL}/ldl_logo.png`,
    ctaText: data?.ctaText ?? "Book a Driver",
    ctaLink: data?.ctaLink ?? "/hire",
  };

  const freerowProps = {
    heroTitle: "Hire Verified Drivers in Lagos",
    heroSubtitle: "Pre-vetted professionals for all driving needs",
    heroImage: data?.heroImage?.asset?.url ?? `${BASE_URL}/ldl_logo.png`,
    ctaText: data?.ctaText ?? "Book a Driver",
    ctaLink: data?.ctaLink ?? "/hire",
  };

  return (
    <div>
      <HeroSection {...heroProps} />
      <ProcessingFeesHighlight />
      <SalaryPlansHighlight />
      <ExtraHighlightOne />
      <ExtraHighlightTwo />
      <FreerowSection {...freerowProps} />
      <DriverHeroPromo />
      <HirePlansSection />
      <Testimonials />
      <FAQ />
    </div>
  );
}
