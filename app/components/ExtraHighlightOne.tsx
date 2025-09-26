"use client";

import {
  Sparkles,
  CheckCircle2,
  Car,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ExtraHighlightOne() {
  const bullets = [
    "Pre-vetted professional drivers",
    "Fast matching for your schedule",
    "Transparent fees and clear salaries",
  ];

  return (
    <section className="bg-black py-14">
      <div className="w-[85%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-yellow-400 font-semibold mb-3">
              <Sparkles className="w-5 h-5" /> Why Lagos Drivers Link
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white">
              Reliable, Verified, Ready to Drive
            </h3>
            <p className="text-yellow-100/80 mt-3 max-w-xl">
              Get matched with trusted, background-checked drivers. We handle
              the vetting so you can focus on what matters.
            </p>

            <ul className="mt-6 space-y-3">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-yellow-100">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-4 py-2 text-yellow-200 text-sm">
              <Sparkles className="w-4 h-4" /> Seamless driver placement
              experience
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-yellow-500/30 bg-gradient-to-br from-yellow-900/20 to-yellow-600/10 p-6">
              <div className="pointer-events-none absolute -top-16 -left-16 w-56 h-56 rounded-full bg-yellow-400/15 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-yellow-300/10 blur-3xl" />

              <motion.div
                className="relative z-10 grid grid-cols-3 gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ staggerChildren: 0.08 }}
              >
                <IllustrationTile
                  icon={<ShieldCheck className="w-6 h-6 text-yellow-300" />}
                  title="Verified"
                />
                <IllustrationTile
                  icon={<Car className="w-6 h-6 text-yellow-300" />}
                  title="Placement"
                />
                <IllustrationTile
                  icon={<BadgeCheck className="w-6 h-6 text-yellow-300" />}
                  title="Qualified"
                />
                <IllustrationTile
                  icon={<CheckCircle2 className="w-6 h-6 text-yellow-300" />}
                  title="Trained"
                />
                <IllustrationTile
                  icon={<Sparkles className="w-6 h-6 text-yellow-300" />}
                  title="Vetted"
                />
                <IllustrationTile
                  icon={<Car className="w-6 h-6 text-yellow-300" />}
                  title="Ready"
                />
              </motion.div>

              <div className="relative z-10 mt-6 text-yellow-300/80 text-xs">
                Abstract driver services illustration
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IllustrationTile({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 px-4 py-6 flex flex-col items-center justify-center text-center">
      <div className="mb-2">{icon}</div>
      <div className="text-yellow-100 text-sm font-semibold">{title}</div>
    </div>
  );
}
