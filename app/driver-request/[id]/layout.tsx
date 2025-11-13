import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Professional Driver - Lagos Drivers Link",
  description:
    "Book a professional driver in Lagos. Choose from our premium driver services with verified, experienced chauffeurs.",
};

export default function DriverPlanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-black">{children}</div>;
}

