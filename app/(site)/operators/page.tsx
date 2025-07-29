"use client";

import { motion } from "framer-motion";
import {
  Search,
  ShieldCheck,
  BadgeCheck,
  Clock,
  Star,
  Users,
} from "lucide-react";

export default function DriversPage() {
  const stats = [
    {
      value: "1000+",
      label: "Verified Drivers",
      icon: <BadgeCheck className="h-8 w-8" />,
    },
    {
      value: "24/7",
      label: "Availability",
      icon: <Clock className="h-8 w-8" />,
    },
    {
      value: "4.9",
      label: "Average Rating",
      icon: <Star className="h-8 w-8" />,
    },
    {
      value: "50+",
      label: "Locations Covered",
      icon: <Users className="h-8 w-8" />,
    },
  ];

  const features = [
    {
      title: "Thoroughly Vetted",
      description:
        "Every driver undergoes comprehensive background checks and verification.",
      icon: <ShieldCheck className="h-6 w-6 text-yellow-500" />,
    },
    {
      title: "Professional Training",
      description:
        "Certified drivers with defensive driving and customer service training.",
      icon: <BadgeCheck className="h-6 w-6 text-yellow-500" />,
    },
    {
      title: "Flexible Options",
      description: "Choose from hourly, daily, or long-term driver solutions.",
      icon: <Clock className="h-6 w-6 text-yellow-500" />,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Access Our Network of <span className="text-yellow-400">1000+</span>{" "}
            Professional Drivers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-10"
          >
            Verified, trained, and ready to serve your transportation needs
            across multiple locations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto relative"
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search by location or service type..."
              className="w-full bg-gray-800 border border-gray-700 rounded-full px-6 py-4 pl-14 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium px-6 py-2 rounded-full transition-colors">
              Find Drivers
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center"
              >
                <div className="flex justify-center text-yellow-500 mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Professional Drivers
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our drivers are more than just chauffeurs &mdash; they&apos;re
              trained professionals dedicated to your safety and comfort.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-50 p-2 rounded-full mr-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Find Your Perfect Driver?
          </h2>
          <p className="text-xl text-yellow-100 mb-8">
            Join thousands of satisfied clients who trust our professional
            driver network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-yellow-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition-colors">
              Request a Driver Now
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-yellow-700 font-bold px-8 py-4 rounded-lg transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
