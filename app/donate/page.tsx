import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Gift,
  Users,
  Globe,
  CheckCircle,
  Star,
  Shield,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Donate | Lagos Drivers Link",
  description:
    "Support Lagos Drivers Link and help us improve transportation services in Lagos. Your donation helps us provide better services, support drivers, and expand our reach.",
  keywords:
    "donate, support, charity, transportation, Lagos, driver support, community development",
};

export default function DonatePage() {
  const donationCauses = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Driver Support Fund",
      description:
        "Help us provide financial assistance, training, and resources to drivers in need.",
      impact: "Support 100+ drivers with emergency funds and training programs",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Safety Initiatives",
      description:
        "Fund safety training programs, vehicle inspections, and emergency response systems.",
      impact: "Improve safety standards for 2,500+ drivers and passengers",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Community Expansion",
      description:
        "Help us expand our services to underserved areas in Lagos and beyond.",
      impact: "Bring reliable transportation to 10+ new communities",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Technology Development",
      description:
        "Support the development of better apps, features, and platform improvements.",
      impact: "Enhance user experience for 50,000+ monthly users",
    },
  ];

  const donationAmounts = [
    { amount: "₦5,000", description: "Support a driver for one week" },
    { amount: "₦15,000", description: "Fund safety training for 3 drivers" },
    { amount: "₦25,000", description: "Help expand to a new community" },
    { amount: "₦50,000", description: "Support technology development" },
    { amount: "₦100,000", description: "Major impact donation" },
    { amount: "Custom", description: "Choose your own amount" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Regular Donor",
      content:
        "I donate monthly because I believe in the mission. Seeing how Lagos Drivers Link has improved transportation in my area makes it worth every naira.",
      rating: 5,
    },
    {
      name: "Michael Adebayo",
      role: "Corporate Donor",
      content:
        "Our company supports Lagos Drivers Link because we see the positive impact on our employees' daily commutes. It's an investment in our community.",
      rating: 5,
    },
    {
      name: "Grace Okafor",
      role: "Driver Partner",
      content:
        "The support fund helped me during a difficult time. Now I'm proud to give back and help other drivers who might need assistance.",
      rating: 5,
    },
  ];

  const impactStats = [
    {
      number: "₦2.5M+",
      label: "Raised for Driver Support",
      icon: <Heart className="h-8 w-8" />,
    },
    {
      number: "500+",
      label: "Drivers Supported",
      icon: <Users className="h-8 w-8" />,
    },
    {
      number: "15",
      label: "Communities Reached",
      icon: <Globe className="h-8 w-8" />,
    },
    {
      number: "95%",
      label: "Donation Efficiency",
      icon: <Star className="h-8 w-8" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-20">
        <div className="w-[85%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Support Our Mission
              </h1>
              <p className="text-xl mb-8 text-gray-800">
                Help us improve transportation in Lagos and support our
                community of drivers. Your donation makes a real difference in
                people's lives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center">
                  <Heart className="h-5 w-5 mr-2" />
                  Donate Now
                </button>
                <Link
                  href="#impact"
                  className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors text-center"
                >
                  See Our Impact
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/smiling-cheerful-young-adult-african-600nw-1850821510.webp"
                alt="Community Support"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section id="impact" className="py-16 bg-gray-50">
        <div className="w-[85%] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Impact So Far
            </h2>
            <p className="text-xl text-gray-600">
              Thanks to generous donors like you, we've made a real difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-yellow-500 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Causes */}
      <section className="py-20">
        <div className="w-[85%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Where Your Donation Goes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your contribution directly supports these important initiatives
              that make transportation better for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {donationCauses.map((cause, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="text-yellow-500 mt-1">{cause.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      {cause.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{cause.description}</p>
                    <div className="bg-yellow-100 p-3 rounded-lg">
                      <p className="text-sm font-medium text-yellow-800">
                        {cause.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Amounts */}
      <section className="py-20 bg-gray-50">
        <div className="w-[85%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Choose Your Impact
            </h2>
            <p className="text-xl text-gray-600">
              Every donation, no matter the size, makes a difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {donationAmounts.map((donation, index) => (
              <button
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow border-2 border-transparent hover:border-yellow-500"
              >
                <div className="text-2xl font-bold text-yellow-500 mb-2">
                  {donation.amount}
                </div>
                <p className="text-gray-600">{donation.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-20">
        <div className="w-[85%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Why Donate to Lagos Drivers Link?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Transparent Use of Funds
                    </h3>
                    <p className="text-gray-600">
                      We provide detailed reports on how every naira is spent,
                      ensuring maximum impact.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Local Impact</h3>
                    <p className="text-gray-600">
                      Your donation directly benefits Lagos communities and
                      improves local transportation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Sustainable Growth
                    </h3>
                    <p className="text-gray-600">
                      We focus on long-term solutions that create lasting
                      positive change.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Community Driven
                    </h3>
                    <p className="text-gray-600">
                      Our initiatives are developed with input from drivers and
                      community members.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/portrait-of-a-confident-young-black-man-for-lifestyle-or-fashion-marketing-free-photo.jpeg"
                alt="Community Impact"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="w-[85%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What Our Donors Say
            </h2>
            <p className="text-xl text-gray-600">
              Hear from people who support our mission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="w-[85%] mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Make a Difference Today
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Join hundreds of supporters who are helping us improve
            transportation in Lagos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-600 transition-colors flex items-center justify-center">
              <Heart className="h-5 w-5 mr-2" />
              Donate Now
            </button>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Tax Information */}
      <section className="py-16 bg-gray-50">
        <div className="w-[85%] mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">
              Tax-Deductible Donations
            </h3>
            <p className="text-gray-600 mb-4">
              Lagos Drivers Link is a registered non-profit organization. All
              donations are tax-deductible to the full extent allowed by law.
              You will receive a receipt for your donation.
            </p>
            <p className="text-sm text-gray-500">
              Tax ID: LAG-DRIVERS-2025 | Registered in Nigeria
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
