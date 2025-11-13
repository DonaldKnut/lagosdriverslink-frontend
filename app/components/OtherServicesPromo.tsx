"use client";
import { 
  Home, 
  ChefHat, 
  Baby, 
  Scissors, 
  Wrench, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export function OtherServicesPromo() {
  const services = [
    {
      icon: <Home className="h-6 w-6" />,
      title: "House Cleaners",
      description: "Professional cleaning services for your home",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <ChefHat className="h-6 w-6" />,
      title: "Chefs",
      description: "Experienced culinary professionals",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: <Baby className="h-6 w-6" />,
      title: "Nannies",
      description: "Caring and qualified childcare providers",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: <Scissors className="h-6 w-6" />,
      title: "Tailors",
      description: "Skilled fashion and alteration experts",
      color: "from-red-500 to-red-600",
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Plumbers",
      description: "Licensed plumbing professionals",
      color: "from-cyan-500 to-cyan-600",
    },
  ];

  return (
    <section className="bg-black py-14">
      <div className="w-[85%] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="h-8 w-8 text-yellow-400" />
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-300">
                Beyond Drivers
              </span>
            </h2>
          </div>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
            We connect you with trusted professionals across various sectors
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            From household help to skilled tradespeople, find the right professional for your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 hover:-translate-y-1"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color} mb-4`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Need Professional Services?
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Fill out our request form and we&apos;ll connect you with vetted professionals 
            in your area. All our service providers are thoroughly verified and background-checked.
          </p>
          <Link
            href="/service-request"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-yellow-500/30"
          >
            Request a Service Provider
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-center">
          <div className="space-y-1">
            <p className="text-3xl font-bold text-yellow-400">500+</p>
            <p className="text-sm text-gray-400">Service Providers</p>
          </div>
          <div className="w-px h-12 bg-gray-700"></div>
          <div className="space-y-1">
            <p className="text-3xl font-bold text-yellow-400">1000+</p>
            <p className="text-sm text-gray-400">Happy Clients</p>
          </div>
          <div className="w-px h-12 bg-gray-700"></div>
          <div className="space-y-1">
            <p className="text-3xl font-bold text-yellow-400">24/7</p>
            <p className="text-sm text-gray-400">Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}


