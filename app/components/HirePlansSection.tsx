"use client";

import { CheckCircle, Star, ChevronRight, Shield } from "lucide-react";
import { motion, Variants } from "framer-motion";

const packages = [
  {
    title: "Weekday Driver (Mon-Fri)",
    price: "₦155,000",
    description:
      "Professional driver for your weekday needs. Perfect for work commutes and business meetings.",
    features: [
      "8AM-6PM daily schedule",
      "1 hour lunch break included",
      "Fuel and maintenance not included",
      "Background checked & verified",
    ],
    popular: false,
    type: "standard",
  },
  {
    title: "Weekday+ Driver (Mon-Sat)",
    price: "₦180,000",
    description:
      "Extended coverage including Saturdays. Ideal for professionals with weekend commitments.",
    features: [
      "Mon-Fri: 8AM-6PM",
      "Sat: 9AM-3PM",
      "1 hour lunch break included",
      "Background checked & verified",
    ],
    popular: true,
    type: "standard",
  },
  {
    title: "Full Week Driver (Mon-Sun)",
    price: "₦200,000",
    description:
      "Complete 7-day coverage for those needing full-time personal driver services.",
    features: [
      "Mon-Fri: 8AM-6PM",
      "Sat-Sun: 9AM-4PM",
      "1 hour lunch break included",
      "Background checked & verified",
    ],
    popular: false,
    type: "standard",
  },
  {
    title: "VIP Security Driver (Mon-Fri)",
    price: "₦350,000",
    description:
      "Professional driver with security training for executives and VIPs. Includes basic protection services.",
    features: [
      "8AM-6PM daily schedule",
      "Tactical driving certified",
      "Basic security training",
      "Discreet and professional",
      "Armored vehicle compatible",
    ],
    popular: false,
    type: "vip",
  },
  {
    title: "24/7 Security Escort",
    price: "₦800,000",
    description:
      "Full-time security driver with advanced protection training for high-profile individuals.",
    features: [
      "24/7 availability",
      "Advanced combat training",
      "Route planning & security",
      "Emergency response certified",
      "Discreet armored vehicle handling",
    ],
    popular: false,
    type: "vip",
  },
];

// Properly typed motion variants
const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const fadeIn: Variants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      ease: "easeOut",
    },
  },
};

export default function HirePlansSection() {
  return (
    <section className="bg-gradient-to-b from-black to-zinc-900 text-yellow-50 py-28 px-6 sm:px-12 md:px-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
              Professional Driver & Security Services
            </span>
            <br />
            <span className="text-xl md:text-2xl font-medium text-yellow-200">
              Flexible Options for Every Need
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 mx-auto mb-6 rounded-full" />
          <p className="text-yellow-200 max-w-3xl mx-auto text-lg leading-relaxed">
            Choose from our range of professional driver packages, including
            specialized VIP security escorts. All personnel are thoroughly
            vetted, trained, and matched to your specific requirements.
          </p>
        </motion.div>

        <div className="mb-16">
          <motion.h3
            variants={fadeIn}
            className="text-2xl md:text-3xl font-bold text-yellow-400 mb-8 text-center"
          >
            Standard Driver Packages
          </motion.h3>
          <motion.div
            variants={fadeIn}
            className="grid gap-8 md:grid-cols-3 mb-20"
          >
            {packages
              .filter((pkg) => pkg.type === "standard")
              .map((pkg, index) => (
                <div
                  key={index}
                  className={`relative rounded-xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 ${
                    pkg.popular
                      ? "border-2 border-yellow-400 bg-gradient-to-b from-zinc-900 to-zinc-800"
                      : "border border-yellow-700/50 bg-zinc-900/80"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-4 py-1 rounded-full text-xs font-bold flex items-center">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      MOST POPULAR
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                      {pkg.title}
                    </h3>
                    <p className="text-3xl font-extrabold text-yellow-500 mb-3">
                      {pkg.price}
                      <span className="text-sm font-normal text-yellow-400 ml-1">
                        /month
                      </span>
                    </p>
                    <p className="text-yellow-200 mb-4 text-sm leading-relaxed">
                      {pkg.description}
                    </p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-yellow-100 text-sm"
                      >
                        <CheckCircle className="text-yellow-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${
                      pkg.popular
                        ? "bg-yellow-500 text-black hover:bg-yellow-600"
                        : "bg-yellow-600/20 text-yellow-400 hover:bg-yellow-600/30 border border-yellow-600/50"
                    }`}
                  >
                    Select Plan <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
          </motion.div>

          <motion.h3
            variants={fadeIn}
            className="text-2xl md:text-3xl font-bold text-yellow-400 mb-8 text-center flex items-center justify-center gap-3"
          >
            <Shield className="w-8 h-8 text-yellow-500" />
            VIP Security Escorts
            <Shield className="w-8 h-8 text-yellow-500" />
          </motion.h3>
          <motion.div variants={fadeIn} className="grid gap-8 md:grid-cols-2">
            {packages
              .filter((pkg) => pkg.type === "vip")
              .map((pkg, index) => (
                <div
                  key={index}
                  className={`relative rounded-xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 border-2 ${
                    index % 2 === 0
                      ? "border-red-500/50 bg-gradient-to-b from-zinc-900 to-zinc-800"
                      : "border-red-700/70 bg-gradient-to-b from-zinc-900 to-zinc-800"
                  }`}
                >
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold flex items-center">
                    <Shield className="w-4 h-4 mr-1 fill-current" />
                    SECURITY ESCORT
                  </div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-red-400 mb-2">
                      {pkg.title}
                    </h3>
                    <p className="text-3xl font-extrabold text-red-500 mb-3">
                      {pkg.price}
                      <span className="text-sm font-normal text-red-400 ml-1">
                        /month
                      </span>
                    </p>
                    <p className="text-yellow-200 mb-4 text-sm leading-relaxed">
                      {pkg.description}
                    </p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-yellow-100 text-sm"
                      >
                        <CheckCircle className="text-red-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${
                      index % 2 === 0
                        ? "bg-gradient-to-r from-red-600 to-red-800 text-white hover:from-red-700 hover:to-red-900"
                        : "bg-gradient-to-r from-red-700 to-red-900 text-white hover:from-red-800 hover:to-red-950"
                    }`}
                  >
                    Request Security Detail <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn}
          className="mt-20 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-xl p-8 md:p-10 text-center shadow-2xl shadow-yellow-500/20"
        >
          <h4 className="text-2xl md:text-3xl font-bold mb-6">
            Our Simple 3-Step Process
          </h4>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-black/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-yellow-900 font-bold text-lg mb-3 flex items-center gap-2">
                <span className="bg-yellow-500 rounded-full w-6 h-6 flex items-center justify-center text-sm">
                  1
                </span>
                Select Your Package
              </div>
              <p className="text-black/90">
                Choose the driver or security package that fits your needs.
              </p>
            </div>
            <div className="bg-black/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-yellow-900 font-bold text-lg mb-3 flex items-center gap-2">
                <span className="bg-yellow-500 rounded-full w-6 h-6 flex items-center justify-center text-sm">
                  2
                </span>
                Interview & Vetting
              </div>
              <p className="text-black/90">
                We provide pre-screened candidates (with additional security
                clearance for VIP packages).
              </p>
            </div>
            <div className="bg-black/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-yellow-900 font-bold text-lg mb-3 flex items-center gap-2">
                <span className="bg-yellow-500 rounded-full w-6 h-6 flex items-center justify-center text-sm">
                  3
                </span>
                Begin Service
              </div>
              <p className="text-black/90">
                Start with your professional driver or security escort.
              </p>
            </div>
          </div>
          <button className="mt-8 bg-black text-yellow-400 hover:bg-black/90 px-8 py-3 rounded-lg font-bold flex items-center gap-2 mx-auto transition-all">
            Get Started Now <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
