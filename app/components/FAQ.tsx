"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const faqs = [
  {
    question: "How do I hire a driver?",
    answer:
      "Click on the &quot;Need a Driver?&quot; button on our homepage, select your preferred package, and complete the booking form.",
  },
  {
    question: "Are drivers background checked?",
    answer:
      "Yes. All drivers undergo thorough identity verification, road tests, and provide official police clearance reports with full background checks.",
  },
  {
    question: "What&apos;s special about your Spy Police Drivers?",
    answer:
      "Our elite Spy Police Drivers are specially trained professionals with law enforcement backgrounds. They offer discreet, secure transportation with tactical driving skills and emergency response training - perfect for executives and high-profile individuals.",
  },
  {
    question: "Can I book a driver for short-term gigs?",
    answer:
      "Absolutely! Whether for a day, weekend, or month — you can book based on your timeline.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white dark:from-zinc-950 dark:to-black py-24 px-6 sm:px-12 md:px-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-600 dark:from-yellow-400 dark:to-amber-500"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Get answers to common questions about our driver services
          </motion.p>
        </div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden transition-all duration-300 ${
                activeIndex === index
                  ? "bg-white dark:bg-zinc-900 shadow-lg border border-gray-200 dark:border-zinc-800"
                  : "bg-white/80 dark:bg-zinc-900/80 hover:bg-white dark:hover:bg-zinc-900 shadow-sm border border-gray-100 dark:border-zinc-800"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-8 py-6 text-left group"
                aria-expanded={activeIndex === index}
              >
                <div className="flex items-start gap-5">
                  <div
                    className={`p-2 rounded-lg transition-colors ${
                      activeIndex === index
                        ? "bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400"
                        : "bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    <HelpCircle size={22} />
                  </div>
                  <span
                    className={`text-lg font-medium transition-colors ${
                      activeIndex === index
                        ? "text-gray-900 dark:text-white"
                        : "text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white"
                    }`}
                  >
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`h-5 w-5 transition-all duration-300 ${
                    activeIndex === index
                      ? "rotate-180 text-amber-500 dark:text-amber-400"
                      : "text-gray-400 dark:text-gray-500"
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 ml-16 text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Still have questions? We&apos;re here to help.
          </p>
          <Link href="/hire">
            <button className="px-8 py-3.5 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 cursor-pointer">
              Need a Driver? Book Now
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
