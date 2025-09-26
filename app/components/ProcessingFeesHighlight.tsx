"use client";

import { ShieldCheck, AlertCircle, CheckCircle2, X, Info } from "lucide-react";
import { useState } from "react";

export default function ProcessingFeesHighlight() {
  const [selectedModal, setSelectedModal] = useState<number | null>(null);

  const plans = [
    {
      name: "Managed Service Plan",
      fee: "₦50,000",
      bullets: [
        "LagosDriversLink handles all HR administration",
        "Driver remains our qualified staff",
        "Includes full training & verification",
        "Replacement at subsidized fee",
      ],
      note: "Note: Businesses wanting worry-free driver management",
      popular: true,
      detailedInfo: `In this plan, driver(s) are assigned to clients but all issues relating to salaries, statutory payments, promotion, benefits and other personnel and administrative matters are handled by LagosDriversLink. We also carry out background checks, security checks on the drivers and maintain our findings in a dedicated file for the driver, not transferable to the client. This means that LagosDriversLink serves as the ultimate guarantor for the driver(s). 

Also, the client is entitled to up to 3 free replacements within a year where the driver resigns, sick or is dismissed from the contract. This plan attracts a Service Charge of ₦50,000 per request which entitles you to see 2 driver candidates to select from. This one-time, non-refundable fee covers the cost of training, verification and background checks for one driver. It is not the same as the monthly salary of the driver which is only paid every month end after the commencement of the contract.

In summary, the driver remains the staff of LagosDriversLink and is only assigned to the client for the period of contract. He can be changed or released at the discretion of the client in line with our replacement policy or termination of contract policy.`,
    },
    {
      name: "Direct Employment Plan",
      fee: "₦70,000",
      bullets: [
        "Driver becomes your direct employee",
        "Complete background checks documentation",
        "Full control over driver management",
        "Thoroughly verified & background-checked drivers",
      ],
      note: "Note: Those wanting complete employment control",
      popular: false,
      detailedInfo: `This plan provides a verified driver to individuals and companies who want to have complete control over the welfare of the driver. This is a one-off service where the driver subsequently becomes the direct employee of the client.

Cost Implication: A one-off service charge of ₦70,000 to be paid before deployment. You get 2 drivers to select from. The background check details and personal data of the selected driver will be transferred to you as the direct employer. You are only entitled to 1 free replacement within the first month after selecting a driver. 

Background check details to transfer include:
• Driver Proof of Address
• Driver Employment History Check
• NIN verification
• Guarantor Checks

This service ensures complete transparency and gives you full control over your driver's employment while maintaining the highest standards of verification and background checking.`,
    },
  ];

  return (
    <section className="bg-black py-14">
      <div className="w-[85%] mx-auto">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="inline-flex items-center gap-2 text-yellow-400 font-semibold mb-2">
            <AlertCircle className="w-5 h-5" />
            One-time Processing Fee (Not Salary)
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Start Your Request
          </h2>
          {/* <p className="text-yellow-100/80 mt-2 max-w-2xl">
            This one-time fee helps us provide you with thoroughly vetted,
            verified drivers. It covers our comprehensive background checks,
            documentation, and seamless onboarding process.
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <ShieldCheck className="w-4 h-4 mr-1" /> Most Chosen
                </div>
              )}
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-bold text-yellow-100">{p.name}</h3>
                <div className="text-3xl md:text-4xl font-extrabold text-yellow-400">
                  {p.fee}
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                {p.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-yellow-100"
                  >
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-sm text-yellow-200/90">{p.note}</div>

              <button
                onClick={() => setSelectedModal(idx)}
                className="mt-4 w-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 px-4 py-2 rounded-lg hover:bg-yellow-500/20 hover:border-yellow-500/50 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Info className="w-4 h-4" />
                Know More
              </button>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center text-sm text-yellow-200">
          To avoid confusion: these amounts are processing fees only and are
          separate from monthly salaries.
        </div>
      </div>

      {/* Modal */}
      {selectedModal !== null && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-yellow-500/30 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-yellow-500/20">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {plans[selectedModal].name}
                </h3>
                <p className="text-yellow-400 text-lg font-semibold">
                  {plans[selectedModal].fee}
                </p>
              </div>
              <button
                onClick={() => setSelectedModal(null)}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-yellow-400" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="prose prose-invert max-w-none">
                <div className="text-yellow-100 leading-relaxed whitespace-pre-line">
                  {plans[selectedModal].detailedInfo}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-yellow-500/20 bg-gray-800/50">
              <button
                onClick={() => setSelectedModal(null)}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Got it, thanks!
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
