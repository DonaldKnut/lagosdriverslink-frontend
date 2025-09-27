"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ShieldCheck,
  BadgeCheck,
  Clock,
  Star,
  MapPin,
  Award,
  Car,
  CheckCircle,
  Phone,
  Mail,
  ArrowRight,
  Zap,
  Globe,
} from "lucide-react";
import Link from "next/link";

export default function DriversPage() {
  const stats = [
    {
      value: "1000+",
      label: "Verified Drivers",
      icon: <BadgeCheck className="h-8 w-8 text-yellow-500" />,
      description: "Professionally trained and background-checked",
    },
    {
      value: "24/7",
      label: "Availability",
      icon: <Clock className="h-8 w-8 text-yellow-500" />,
      description: "Round-the-clock service availability",
    },
    {
      value: "4.9",
      label: "Average Rating",
      icon: <Star className="h-8 w-8 text-yellow-500" />,
      description: "Based on client satisfaction surveys",
    },
    {
      value: "50+",
      label: "Locations Covered",
      icon: <MapPin className="h-8 w-8 text-yellow-500" />,
      description: "Across Lagos and surrounding areas",
    },
  ];

  const features = [
    {
      title: "Thoroughly Vetted",
      description:
        "Every driver undergoes comprehensive background checks, identity verification, and police clearance reports.",
      icon: <ShieldCheck className="h-6 w-6 text-yellow-500" />,
      details: [
        "Criminal background check",
        "Identity verification",
        "Police clearance",
        "Reference checks",
      ],
    },
    {
      title: "Professional Training",
      description:
        "Certified drivers with defensive driving, customer service, and safety training programs.",
      icon: <BadgeCheck className="h-6 w-6 text-yellow-500" />,
      details: [
        "Defensive driving certification",
        "Customer service training",
        "Safety protocols",
        "Route optimization",
      ],
    },
    {
      title: "Flexible Options",
      description:
        "Choose from hourly, daily, weekly, or long-term driver solutions tailored to your needs.",
      icon: <Clock className="h-6 w-6 text-yellow-500" />,
      details: [
        "Hourly bookings",
        "Daily services",
        "Weekly contracts",
        "Long-term arrangements",
      ],
    },
    {
      title: "Premium Fleet",
      description:
        "Well-maintained vehicles with modern amenities and safety features for your comfort.",
      icon: <Car className="h-6 w-6 text-yellow-500" />,
      details: [
        "Regular maintenance",
        "Modern amenities",
        "Safety features",
        "Comfort accessories",
      ],
    },
    {
      title: "Quality Assurance",
      description:
        "Continuous monitoring and feedback systems ensure consistent high-quality service delivery.",
      icon: <Award className="h-6 w-6 text-yellow-500" />,
      details: [
        "Performance monitoring",
        "Client feedback system",
        "Quality standards",
        "Service improvements",
      ],
    },
    {
      title: "Global Standards",
      description:
        "International best practices in driver management and customer service excellence.",
      icon: <Globe className="h-6 w-6 text-yellow-500" />,
      details: [
        "International standards",
        "Best practices",
        "Industry compliance",
        "Continuous improvement",
      ],
    },
  ];

  const driverCategories = [
    {
      title: "Executive Drivers",
      description:
        "Premium chauffeur services for corporate executives and VIPs",
      features: [
        "Luxury vehicles",
        "Discrete service",
        "Professional attire",
        "Advanced scheduling",
      ],
      price: "From ₦50,000/day",
      image: "/professional-driver-service.webp",
    },
    {
      title: "Daily Commute Drivers",
      description:
        "Reliable transportation for daily work commutes and routine travel",
      features: [
        "Consistent scheduling",
        "Familiar routes",
        "Time efficiency",
        "Cost-effective",
      ],
      price: "From ₦35,000/day",
      image: "/confident-professional-driver-side-view-600nw-2149539983.webp",
    },
    {
      title: "Logistics Drivers",
      description:
        "Specialized drivers for business logistics and cargo transportation",
      features: [
        "Cargo handling",
        "Route planning",
        "Documentation",
        "Delivery tracking",
      ],
      price: "From ₦40,000/day",
      image: "/young-black-handsome-cab-driver-600nw-1434428810.webp",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, Tech Solutions Ltd",
      content:
        "LagosDriversLink has been instrumental in our business operations. Their drivers are professional, punctual, and reliable.",
      rating: 5,
    },
    {
      name: "Michael Adebayo",
      role: "Managing Director, Finance Corp",
      content:
        "The quality of service is exceptional. Our executive driver has become an integral part of our team.",
      rating: 5,
    },
    {
      name: "Jennifer Okonkwo",
      role: "Operations Manager, Logistics Plus",
      content:
        "Their logistics drivers have significantly improved our delivery efficiency and customer satisfaction.",
      rating: 5,
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-black to-yellow-900/10 text-white py-24 px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('/professional-driver-service.webp')] bg-cover bg-center opacity-5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-6 py-2 mb-6">
              <Zap className="h-4 w-4 text-yellow-400" />
              <span className="text-yellow-300 text-sm font-medium">
                Premium Driver Network
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Access Our Network of{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                1000+ Professional Drivers
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-yellow-100 max-w-4xl mx-auto mb-10 leading-relaxed">
              Verified, trained, and ready to serve your transportation needs
              across Lagos and surrounding areas. Experience the gold standard
              in professional chauffeur services.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto"
          >
            <Link href="/hire">
              <button className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-yellow-500/25 flex items-center gap-2">
                Request a Driver Now
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <button className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold px-8 py-4 rounded-xl transition-all duration-300">
              View Our Fleet
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-black border-t border-yellow-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
              Trusted by Thousands of Clients
            </h2>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
              Our numbers speak for themselves - we deliver exceptional service
              consistently.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-black to-yellow-900/5 p-8 rounded-2xl border border-yellow-700/30 text-center hover:border-yellow-500/50 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <h3 className="text-4xl font-bold text-yellow-400 mb-2">
                  {stat.value}
                </h3>
                <p className="text-yellow-200 font-medium mb-2">{stat.label}</p>
                <p className="text-yellow-300/70 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Driver Categories Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-black to-yellow-900/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
              Choose Your Perfect Driver Category
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
              We offer specialized driver services tailored to different
              business needs and requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {driverCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-black to-yellow-900/5 rounded-2xl border border-yellow-700/30 overflow-hidden hover:border-yellow-500/50 transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-yellow-400 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-yellow-200 text-sm">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                        <span className="text-yellow-100 text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-yellow-400 font-bold text-lg">
                      {category.price}
                    </span>
                    <Link href="/hire">
                      <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-4 py-2 rounded-lg transition-colors text-sm">
                        Book Now
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
              Why Choose Our Professional Drivers
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
              Our drivers are more than just chauffeurs — they&apos;re trained
              professionals dedicated to your safety and comfort.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-black to-yellow-900/5 p-8 rounded-2xl border border-yellow-700/30 hover:border-yellow-500/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-yellow-500/10 p-3 rounded-xl border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-yellow-400 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-yellow-100 mb-4">
                      {feature.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                      <span className="text-yellow-300 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-yellow-900/5 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
              What Our Clients Say
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
              Don&apos;t just take our word for it - hear from satisfied clients
              who trust our services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-black to-yellow-900/5 p-8 rounded-2xl border border-yellow-700/30"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-yellow-100 mb-6 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div>
                  <p className="text-yellow-400 font-bold">
                    {testimonial.name}
                  </p>
                  <p className="text-yellow-300 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-yellow-900/10 to-black rounded-2xl border border-yellow-700/30 p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">
              Ready to Experience Premium Driver Services?
            </h2>
            <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
              Join thousands of satisfied clients who trust LagosDriversLink for
              their transportation needs. Get started today with our
              professional driver network.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/hire">
                <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-yellow-500/25">
                  Request a Driver Now
                </button>
              </Link>
              <Link href="/contact">
                <button className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold px-8 py-4 rounded-xl transition-all duration-300">
                  Contact Us
                </button>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-yellow-300">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>+234 123 456 7890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>info@lagosdriverslink.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
