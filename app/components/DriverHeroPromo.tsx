"use client";
import Image from "next/image";
import { Car, ShieldCheck, Clock, Star, Zap, BadgeCheck } from "lucide-react";

export function DriverHeroPromo() {
  return (
    <section className="min-h-[90vh] bg-black text-white px-6 sm:px-12 md:px-16 lg:px-24 py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
      {/* Left: Promo Content */}
      <div className="max-w-2xl space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-300">
            Premium Driver Hire
          </span>{" "}
          <br />
          <span className="text-white">Service in Lagos</span>
        </h1>

        <p className="text-xl text-gray-300 leading-relaxed">
          Experience the gold standard in professional chauffeur services. Our
          <span className="font-semibold text-yellow-300">
            {" "}
            vetted, experienced{" "}
          </span>
          drivers deliver unmatched reliability for your personal and business
          needs.
        </p>

        {/* Value Propositions */}
        <div className="grid grid-cols-2 gap-4 pt-4">
          {[
            {
              icon: <ShieldCheck className="h-5 w-5" />,
              text: "Fully Vetted Professionals",
            },
            {
              icon: <Star className="h-5 w-5" />,
              text: "4.9/5 Satisfaction Rating",
            },
            { icon: <Clock className="h-5 w-5" />, text: "24/7 Availability" },
            {
              icon: <BadgeCheck className="h-5 w-5" />,
              text: "Verified Experience",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="bg-yellow-500/20 p-2 rounded-full">
                {item.icon}
              </div>
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <a
            href="/hire"
            className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-yellow-500/30 flex items-center gap-2"
          >
            <Zap className="h-5 w-5" />
            Hire a Driver Now
          </a>
          <a
            href="/corporate"
            className="px-8 py-4 border border-yellow-500 text-yellow-300 font-bold rounded-lg hover:bg-yellow-500/10 transition-all duration-300 flex items-center gap-2"
          >
            <Car className="h-5 w-5" />
            Corporate Solutions
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="flex items-center gap-4 pt-8">
          <div className="flex -space-x-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="relative w-10 h-10 rounded-full border-2 border-yellow-300 overflow-hidden"
              >
                <Image
                  src={`/client-${i}.jpg`}
                  alt={`Happy client ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div>
            <p className="text-sm text-yellow-300">
              Trusted by <span className="font-bold">200+</span> clients monthly
            </p>
            <div className="flex gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right: Promo Image */}
      <div className="relative w-full max-w-xl">
        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-600/10 rounded-full blur-xl"></div>

        {/* Main image with badge */}
        <div className="relative z-10">
          <Image
            src="/9c450f1f-9556-45a3-b13d-9912c29dff17.jpeg"
            alt="Professional chauffeur service"
            width={600}
            height={600}
            className="w-full h-auto rounded-xl shadow-2xl border border-gray-700/50"
            priority
          />

          {/* Floating badge */}
          <div className="absolute -bottom-5 -right-5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-6 py-3 rounded-lg shadow-lg border border-yellow-300/50">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              <span className="font-bold text-sm">
                47 DRIVERS AVAILABLE NOW
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
