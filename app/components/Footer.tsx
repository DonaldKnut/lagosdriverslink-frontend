"use client";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Globe,
  HelpCircle,
  Shield,
  FileText,
  Heart,
  Phone,
  Mail,
} from "lucide-react";
import Link from "next/link";

// Custom X (formerly Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function PremiumFooter() {
  const categories = [
    {
      title: "Services",
      links: [
        { name: "Private Drivers", href: "/services/private" },
        { name: "Corporate Drivers", href: "/services/corporate" },
        { name: "Logistics Drivers", href: "/services/logistics" },
        { name: "Event Drivers", href: "/services/events" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
        { name: "Partnerships", href: "/partners" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Safety", href: "/safety" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Driver Handbook", href: "/handbook" },
        { name: "Community", href: "/community" },
        { name: "FAQs", href: "/faq" },
      ],
    },
  ];

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="w-[85%] mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Logo and Social */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center w-[120px] h-[80px] relative"
            >
              <Image
                src="/ldl_logo.png"
                alt="Lagos Drivers Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>
            <p className="text-gray-300 mb-6 mt-6">
              Connecting you with trusted professional <br /> drivers in Lagos
              since 2023.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-yellow-500 rounded-full hover:bg-yellow-600 transition"
              >
                <Facebook className="text-black hover:text-white" />
              </a>
              <a
                href="#"
                className="p-2 bg-yellow-500 rounded-full hover:bg-yellow-600 transition"
              >
                <XIcon className="w-5 h-5 text-black hover:text-white" />
              </a>
              <a
                href="#"
                className="p-2 bg-yellow-500 rounded-full hover:bg-yellow-600 transition"
              >
                <Instagram className="text-black hover:text-white" />
              </a>
              <a
                href="#"
                className="p-2 bg-yellow-500 rounded-full hover:bg-yellow-600 transition"
              >
                <Linkedin className="text-black hover:text-white" />
              </a>
              <a
                href="#"
                className="p-2 bg-yellow-500 rounded-full hover:bg-yellow-600 transition"
              >
                <Youtube className="text-black hover:text-white" />
              </a>
            </div>
          </div>

          {/* Category Links */}
          {categories.map((category, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4 text-lg">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-yellow-500 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <span className="text-gray-300 text-sm">
              © 2023 LagosDriversLink
            </span>
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4 text-yellow-500" />
              <span className="text-gray-300 text-sm">English</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-300 text-sm">₦ NGN</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="text-gray-300 text-xs sm:text-sm flex items-center gap-2 bg-white/5 px-3 py-2 rounded-md">
              <span className="font-semibold text-white">Head Office:</span>
              <span>
                24a Bashorun Okunsanya Street, Off Admiralty Way, Lekki Phase 1,
                Lagos
              </span>
            </div>
            <div className="text-gray-300 text-xs sm:text-sm flex items-center gap-2 bg-white/5 px-3 py-2 rounded-md">
              <span className="font-semibold text-white">Alt:</span>
              <span>94 Badore Road, Ajah</span>
            </div>
            <Link
              href="#"
              className="flex items-center text-gray-300 hover:text-yellow-500 text-sm"
            >
              <Shield className="h-4 w-4 mr-1 text-yellow-500" /> Safety
            </Link>
            <Link
              href="#"
              className="flex items-center text-gray-300 hover:text-yellow-500 text-sm"
            >
              <FileText className="h-4 w-4 mr-1 text-yellow-500" /> Terms
            </Link>
            <Link
              href="#"
              className="flex items-center text-gray-300 hover:text-yellow-500 text-sm"
            >
              <HelpCircle className="h-4 w-4 mr-1 text-yellow-500" /> Help
            </Link>
            <Link
              href="mailto:samsonenoch@lagosdriverslink.com"
              className="flex items-center text-gray-300 hover:text-yellow-500 text-sm"
            >
              <Mail className="h-4 w-4 mr-1 text-yellow-500" />{" "}
              teams@lagosdriverslink.com
            </Link>
            <Link
              href="tel:+2349032702233"
              className="flex items-center text-gray-300 hover:text-yellow-500 text-sm"
            >
              <Phone className="h-4 w-4 mr-1 text-yellow-500" /> +234 903 270
              2233
            </Link>
            <Link
              href="#"
              className="flex items-center text-gray-300 hover:text-yellow-500 text-sm"
            >
              <Heart className="h-4 w-4 mr-1 text-yellow-500" /> Donate
            </Link>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex justify-center mt-8 space-x-6">
          <div className="bg-yellow-500 px-4 py-2 rounded-lg flex items-center">
            <span className="text-black text-sm font-medium">
              ✓ Verified Drivers
            </span>
          </div>
          <div className="bg-yellow-500 px-4 py-2 rounded-lg flex items-center">
            <span className="text-black text-sm font-medium">
              🔒 Secure Payments
            </span>
          </div>
          <div className="bg-yellow-500 px-4 py-2 rounded-lg flex items-center">
            <span className="text-black text-sm font-medium">
              ⭐ 4.9/5 Ratings
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
