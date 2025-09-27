"use client";

import { ShieldCheck, Info, CheckCircle } from "lucide-react";

export default function ProcessingFees() {
  const plans = [
    {
      name: "Managed Service Plan",
      fee: "₦50,000",
      highlights: [
        "LagosDriversLink handles all HR administration",
        "Driver remains our qualified staff",
        "Includes full training & verification",
        "Replacement at subsidized fee",
      ],
      idealFor: "Businesses wanting worry-free driver management",
      popular: true,
    },
    {
      name: "Direct Employment Plan",
      fee: "₦70,000",
      highlights: [
        "Driver becomes your direct employee",
        "Complete background checks documentation",
        "Full control over driver management",
        "Thoroughly verified & background-checked drivers",
      ],
      idealFor: "Those wanting complete employment control",
      popular: false,
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="w-[85%] mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-yellow-600 font-semibold mb-2">
            <Info className="w-5 h-5" />
            Processing Fee (Not Salary)
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Start Your Request
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            This is a one-time processing fee paid before we begin handling your
            request. It covers vetting, verification, documentation, and
            onboarding. It is not the driver salary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-xl border shadow-sm p-6 ${
                plan.popular
                  ? "border-yellow-500 bg-yellow-50"
                  : "border-gray-200 bg-white"
              }`}
            >
              {plan.popular && (
                <div className="flex items-center text-yellow-700 text-sm font-semibold mb-3">
                  <ShieldCheck className="w-4 h-4 mr-2" /> Most Chosen
                </div>
              )}
              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <div className="text-3xl font-extrabold text-yellow-600 mb-4">
                {plan.fee}
              </div>
              <ul className="space-y-2 mb-4">
                {plan.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="text-sm text-gray-600">{plan.idealFor}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center text-sm text-gray-600">
          To avoid confusion: the amounts above are processing fees only and are
          separate from monthly salaries.
        </div>
      </div>
    </section>
  );
}

