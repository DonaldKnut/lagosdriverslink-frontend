"use client";

import {
  CheckCircle2,
  Star,
  ShieldCheck,
  Clock,
  BadgeCheck,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ExtraHighlightTwo() {
  const bullets = [
    { icon: CheckCircle2, text: "Fully Vetted Professional Drivers" },
    { icon: Star, text: "4.9/5 Satisfaction Rating" },
    { icon: Clock, text: "24/7 Availability" },
    { icon: BadgeCheck, text: "Verified Experience" },
  ];

  return (
    <section className="bg-black py-14">
      <div className="w-[85%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-yellow-400 font-semibold mb-2">
              <ShieldCheck className="w-5 h-5" /> Premium Driver Hire
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white">
              Service in Lagos
            </h3>
            <p className="text-yellow-100/80 mt-3 max-w-xl">
              Experience the gold standard in professional chauffeur services.
              Our vetted, experienced drivers deliver unmatched reliability for
              your personal and business needs.
            </p>

            <motion.ul
              className="mt-6 space-y-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
              }}
            >
              {bullets.map(({ icon: Icon, text }, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-yellow-100"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Icon className="w-5 h-5 text-yellow-400 mt-0.5" />
                  <span>{text}</span>
                </motion.li>
              ))}
            </motion.ul>

            <div className="mt-6">
              <a
                href="/hire"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-lg font-semibold text-sm hover:from-yellow-500 hover:to-yellow-600 transition-all shadow-md hover:shadow-yellow-500/50"
              >
                Hire a Driver Now
              </a>
            </div>
          </div>

          <div>
            <div className="relative overflow-hidden rounded-2xl border border-yellow-500/30 bg-gradient-to-br from-yellow-900/20 to-yellow-600/10 p-6">
              <div className="pointer-events-none absolute -top-16 -left-16 w-56 h-56 rounded-full bg-yellow-400/15 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-yellow-300/10 blur-3xl" />

              <motion.div
                className="relative z-10 grid grid-cols-2 gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ staggerChildren: 0.08 }}
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <BadgeTile title="Vetted" subtitle="Background-checked" />
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <BadgeTile
                    title="Rated 4.9/5"
                    subtitle="Client satisfaction"
                  />
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <BadgeTile title="24/7" subtitle="Always available" />
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <BadgeTile title="Experienced" subtitle="Verified history" />
                </motion.div>
              </motion.div>

              <div className="relative z-10 mt-6 text-yellow-300/80 text-xs">
                Premium chauffeur service illustration
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BadgeTile({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 px-4 py-6 text-center">
      <div className="text-yellow-100 font-bold">{title}</div>
      <div className="text-yellow-200/80 text-xs mt-1">{subtitle}</div>
    </div>
  );
}
