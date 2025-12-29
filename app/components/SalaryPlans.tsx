"use client";

import { BadgeCheck, CalendarDays, Wallet, Info } from "lucide-react";

export default function SalaryPlans() {
  const salaries = [
    {
      title: "Mon – Fri",
      amount: "₦175,000",
      subtitle: "Standard weekday placement",
    },
    {
      title: "Mon – Sat",
      amount: "₦195,000",
      subtitle: "Extended to Saturdays",
      popular: true,
    },
    {
      title: "Mon – Sun",
      amount: "₦225,000",
      subtitle: "Full week placement",
    },
  ];

  return (
    <section className="bg-zinc-50 py-16">
      <div className="w-[85%] mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-yellow-700 font-semibold mb-2">
            <Wallet className="w-5 h-5" />
            Monthly Driver Salaries (Separate from Processing Fee)
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Driver Salary Bands
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The amounts below represent the typical monthly salary to be paid to
            the driver based on schedule. These are separate from the one-time
            processing fee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {salaries.map((s, idx) => (
            <div
              key={idx}
              className={`rounded-xl border p-6 bg-white shadow-sm ${
                s.popular ? "border-yellow-500 bg-yellow-50" : "border-gray-200"
              }`}
            >
              {s.popular && (
                <div className="text-xs font-semibold text-yellow-700 mb-2 inline-flex items-center">
                  <BadgeCheck className="w-4 h-4 mr-1" /> Most Requested
                </div>
              )}
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold">{s.title}</h3>
                <CalendarDays className="w-5 h-5 text-yellow-600" />
              </div>
              <div className="text-3xl font-extrabold text-yellow-600 mb-1">
                {s.amount}
              </div>
              <p className="text-gray-600 mb-4">{s.subtitle}</p>
              <div className="text-xs text-gray-500 flex items-start gap-2">
                <Info className="w-4 h-4 mt-0.5" />
                Salaries may vary slightly with experience, distance and special
                requirements.
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

