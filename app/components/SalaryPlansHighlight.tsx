"use client";

import { Wallet, Calendar, BadgeCheck, Clock, Shield } from "lucide-react";

export default function SalaryPlansHighlight() {
  const plans = [
    {
      title: "Daily Driver Service",
      amount: "₦30,000",
      subtitle: "Per day service",
      popular: false,
      icon: <Clock className="w-5 h-5 text-yellow-400" />,
    },
    {
      title: "Mon – Fri",
      amount: "₦175,000",
      subtitle: "Standard weekday placement",
      popular: false,
      icon: <Calendar className="w-5 h-5 text-yellow-400" />,
    },
    {
      title: "Mon – Sat",
      amount: "₦195,000",
      subtitle: "Extended to Saturdays",
      popular: true,
      icon: <Calendar className="w-5 h-5 text-yellow-400" />,
    },
    {
      title: "Mon – Sun",
      amount: "₦225,000",
      subtitle: "Full week placement",
      popular: false,
      icon: <Calendar className="w-5 h-5 text-yellow-400" />,
    },
    {
      title: "VIP Spy Police Driver",
      amount: "₦280,000",
      subtitle: "Premium security service",
      popular: false,
      icon: <Shield className="w-5 h-5 text-yellow-400" />,
    },
  ];

  return (
    <section className="bg-black py-14">
      <div className="w-[85%] mx-auto">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="inline-flex items-center gap-2 text-yellow-400 font-semibold mb-2">
            <Wallet className="w-5 h-5" /> Driver Service Pricing
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Salary Bands (Separate from Processing Fee)
          </h2>
          <p className="text-yellow-100/80 mt-2 max-w-2xl">
            Clear, upfront pricing for daily and monthly services. Processing
            fees are one-time and separate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {plans.map((p, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 border bg-yellow-500/5 ${
                p.popular
                  ? "border-yellow-500 ring-2 ring-yellow-300/30"
                  : "border-yellow-700/40"
              }`}
            >
              {p.popular && (
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-yellow-500/20 text-yellow-300 mb-3">
                  <BadgeCheck className="w-4 h-4 mr-1" /> Most Requested
                </div>
              )}
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-white">{p.title}</h3>
                {p.icon}
              </div>
              <div className="text-3xl font-extrabold text-yellow-400 mb-1">
                {p.amount}
              </div>
              <p className="text-yellow-100/90 text-sm">{p.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
