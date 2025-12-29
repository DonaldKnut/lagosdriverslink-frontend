"use client";

import { CheckCircle, Star, ChevronRight, Shield } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";

const packages = [
  {
    title: "Daily Driver Service",
    price: "₦30,000",
    description:
      "Perfect for one-time needs or short-term requirements. Book by the day for maximum flexibility.",
    features: [
      "8-hour minimum",
      "Flexible scheduling",
      "Professional demeanor",
      "Basic route knowledge",
      "Same-day booking available",
    ],
    popular: false,
    type: "daily",
    planValue: "daily",
  },
  {
    title: "Weekday Driver (Mon-Fri)",
    price: "₦175,000",
    description:
      "Professional driver for your weekday needs. Perfect for work commutes and business meetings.",
    features: [
      "Daily schedule",
      "Familiarity with Lagos routes",
      "Defensive driving",
      "Background checked & verified",
      "Neat Appearance",
    ],
    popular: false,
    type: "standard",
    planValue: "weekday",
  },
  {
    title: "Weekday+ Driver (Mon-Sat)",
    price: "₦195,000",
    description:
      "Extended coverage including Saturdays. Ideal for professionals with weekend commitments.",
    features: [
      "Defensive driving",
      "Flexible scheduling",
      "Professional demeanor",
      "Basic route knowledge",
      "Background checked & verified",
    ],
    popular: true,
    type: "standard",
    planValue: "weekdayPlus",
  },
  {
    title: "Full Week Driver (Mon-Sun)",
    price: "₦225,000",
    description:
      "Complete 7-day coverage for those needing full-time personal driver services.",
    features: [
      "Flexible scheduling",
      "Professional demeanor",
      "Basic route knowledge",
      "Background checked & verified",
    ],
    popular: false,
    type: "standard",
    planValue: "fullWeek",
  },
  {
    title: "VIP Spy Police Driver",
    price: "₦280,000",
    description:
      "Elite driver with police training for confidential transportation. Discreet yet secure service for high-profile individuals.",
    features: [
      "Undercover police certified",
      "Tactical driving skills",
      "Route security expertise",
      "Emergency response trained",
      "Absolute confidentiality",
    ],
    popular: false,
    type: "vip",
    planValue: "vipSpy",
  },
];

// Motion variants
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
  const router = useRouter();

  const handlePlanSelect = (plan: string) => {
    router.push(`/driver-request?plan=${plan}`);
  };

  return (
    <section className="bg-gradient-to-b from-black to-zinc-900 text-yellow-50 py-28 px-6 sm:px-12 md:px-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
              Premium Driver Services
            </span>
            <br />
            <span className="text-xl md:text-2xl font-medium text-yellow-200">
              Trusted by Nigeria&apos;s Elite
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-300 mx-auto mb-6 rounded-full" />
          <p className="text-yellow-200 max-w-3xl mx-auto text-lg leading-relaxed">
            Choose from our exclusive driver packages featuring the highest
            quality professionals. All drivers are thoroughly vetted and trained
            to Nigerian elite standards.
          </p>
          <p className="mt-4 text-yellow-300/90 text-sm">
            Note: Package amounts shown elsewhere as salaries are monthly driver
            pay. The Processing Fees displayed above are one-time setup fees and
            not salaries.
          </p>
        </motion.div>

        {/* Packages */}
        <div className="mb-16">
          {/* Standard Packages */}
          <motion.h3
            variants={fadeIn}
            className="text-2xl md:text-3xl font-bold text-yellow-300 mb-8 text-center"
          >
            Standard Driver Packages
          </motion.h3>
          <motion.div
            variants={fadeIn}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-20"
          >
            {packages
              .filter((pkg) => pkg.type === "daily" || pkg.type === "standard")
              .map((pkg, index) => (
                <div
                  key={index}
                  className={`relative rounded-xl p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                    pkg.popular
                      ? "border-2 border-yellow-400 bg-gradient-to-b from-yellow-900/30 to-black"
                      : pkg.type === "daily"
                        ? "border-2 border-yellow-300 bg-gradient-to-b from-black to-yellow-900/20"
                        : "border border-yellow-600/50 bg-gradient-to-b from-black to-yellow-900/10"
                  } hover:shadow-yellow-500/20`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-4 py-1 rounded-full text-xs font-bold flex items-center shadow-md">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      MOST POPULAR
                    </div>
                  )}
                  {pkg.type === "daily" && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-300 text-black px-4 py-1 rounded-full text-xs font-bold flex items-center shadow-md">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      DAILY RATE
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-yellow-300 mb-2">
                      {pkg.title}
                    </h3>
                    <p
                      className={`text-2xl font-extrabold mb-3 ${
                        pkg.type === "daily"
                          ? "text-yellow-300"
                          : pkg.popular
                            ? "text-yellow-400"
                            : "text-yellow-500"
                      }`}
                    >
                      {pkg.price}
                      <span
                        className={`text-sm font-normal ml-1 ${
                          pkg.type === "daily"
                            ? "text-yellow-300/90"
                            : "text-yellow-400"
                        }`}
                      >
                        {pkg.type === "daily" ? "/day" : "/month"}
                      </span>
                    </p>
                    <p className="text-yellow-200 mb-4 text-sm leading-relaxed">
                      {pkg.description}
                    </p>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-yellow-100 text-xs"
                      >
                        <CheckCircle
                          className={`${
                            pkg.type === "daily"
                              ? "text-yellow-300"
                              : pkg.popular
                                ? "text-yellow-400"
                                : "text-yellow-500"
                          } w-4 h-4 mt-0.5 flex-shrink-0`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handlePlanSelect(pkg.planValue)}
                    className={`w-full py-2 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      pkg.popular
                        ? "bg-yellow-500 text-black hover:bg-yellow-400 shadow-md"
                        : pkg.type === "daily"
                          ? "bg-yellow-300 text-black hover:bg-yellow-200 shadow-md"
                          : "bg-yellow-600/30 text-yellow-300 hover:bg-yellow-600/40 border border-yellow-500/30"
                    } text-sm`}
                  >
                    Select Plan <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
          </motion.div>

          {/* VIP Package */}
          <motion.h3
            variants={fadeIn}
            className="text-2xl md:text-3xl font-bold text-yellow-400 mb-8 text-center flex items-center justify-center gap-3"
          >
            <Shield className="w-8 h-8 text-yellow-500 fill-yellow-500/20" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
              VIP Executive Service
            </span>
            <Shield className="w-8 h-8 text-yellow-500 fill-yellow-500/20" />
          </motion.h3>
          <motion.div variants={fadeIn} className="flex justify-center">
            {packages
              .filter((pkg) => pkg.type === "vip")
              .map((pkg, index) => (
                <div
                  key={index}
                  className={`relative rounded-xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-2 border-yellow-500 bg-gradient-to-b from-yellow-900/40 to-black max-w-2xl w-full`}
                >
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-6 py-1 rounded-full text-sm font-bold flex items-center shadow-lg">
                    <Shield className="w-5 h-5 mr-2 fill-current" />
                    ELITE SECURITY DRIVER
                  </div>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
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
                    <div className="flex-1">
                      <ul className="space-y-2 mb-6">
                        {pkg.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-yellow-100 text-sm"
                          >
                            <CheckCircle className="text-yellow-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <button
                    onClick={() => handlePlanSelect(pkg.planValue)}
                    className={`w-full py-3 px-6 rounded-lg font-bold flex items-center justify-center gap-2 transition-all cursor-pointer bg-gradient-to-r from-yellow-500 to-yellow-600 text-black hover:from-yellow-600 hover:to-yellow-700 shadow-lg mt-4`}
                  >
                    Request VIP Service <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              ))}
          </motion.div>
        </div>

        {/* Process */}
        <motion.div
          variants={fadeIn}
          className="mt-20 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black rounded-xl p-8 md:p-10 text-center shadow-2xl shadow-yellow-500/30"
        >
          <h4 className="text-2xl md:text-3xl font-bold mb-6">
            Our Exclusive 3-Step Process
          </h4>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                step: "1",
                title: "Select Your Package",
                desc: "Choose from our premium driver services tailored for Nigerian professionals",
              },
              {
                step: "2",
                title: "Interview & Vetting",
                desc: "We present thoroughly screened candidates matching your requirements",
              },
              {
                step: "3",
                title: "Begin Service",
                desc: "Your professional driver begins service with complete paperwork",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-black/10 p-6 rounded-lg backdrop-blur-sm border border-yellow-400/20"
              >
                <div className="text-yellow-900 font-bold text-lg mb-3 flex items-center gap-2">
                  <span className="bg-yellow-500 rounded-full w-6 h-6 flex items-center justify-center text-sm">
                    {item.step}
                  </span>
                  {item.title}
                </div>
                <p className="text-black/90">{item.desc}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => handlePlanSelect("daily")}
            className="mt-8 bg-black text-yellow-400 hover:bg-black/90 px-8 py-3 rounded-lg font-bold flex items-center gap-2 mx-auto transition-all shadow-lg border border-yellow-400/30 cursor-pointer"
          >
            Get Started Now <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
