"use client";
import {
  Building2,
  Users,
  ShieldCheck,
  Clock,
  Check,
  Zap,
  Star,
} from "lucide-react";
import Image from "next/image";

export default function CorporatePage() {
  const features = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-yellow-400" />,
      title: "Fully Vetted Professionals",
      description:
        "Each driver undergoes rigorous background checks and verification processes",
    },
    {
      icon: <Clock className="h-6 w-6 text-yellow-400" />,
      title: "24/7 Availability",
      description: "Round-the-clock service for your business needs",
    },
    {
      icon: <Users className="h-6 w-6 text-yellow-400" />,
      title: "HR Management Included",
      description: "We handle all personnel administration for your drivers",
    },
    {
      icon: <Check className="h-6 w-6 text-yellow-400" />,
      title: "Quick Replacement",
      description: "Subsidized replacement within 48 hours when needed",
    },
  ];

  const pricingPlans = [
    {
      name: "Basic Corporate",
      price: "₦150,000",
      period: "/month",
      features: [
        "1 Dedicated Driver",
        "40 Hours/Week",
        "Basic Background Check",
        "Monthly Performance Report",
      ],
      cta: "Get Started",
    },
    {
      name: "Premium Corporate",
      price: "₦300,000",
      period: "/month",
      features: [
        "2 Dedicated Drivers",
        "24/7 Availability",
        "Comprehensive Vetting",
        "Weekly Performance Reports",
        "Priority Replacement",
      ],
      popular: true,
      cta: "Get Premium",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Fleet Solutions",
        "Dedicated Account Manager",
        "Custom Reporting",
        "Advanced Analytics",
        "Tailored HR Solutions",
      ],
      cta: "Contact Sales",
    },
  ];

  const testimonials = [
    {
      quote:
        "LagosDriversLink transformed our executive transportation. Their professionalism is unmatched.",
      author: "Olamide Johnson",
      position: "COO, TechSolutions NG",
      image: "/corporate-client-1.jpg",
    },
    {
      quote:
        "We&apos;ve reduced our transportation costs by 30% while improving service quality.",
      author: "Amina Mohammed",
      position: "HR Director, GreenEnergy Africa",
      image: "/corporate-client-2.jpg",
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-6 sm:px-12 md:px-16 lg:px-24 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/10 to-black z-0" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-400/5 -skew-x-12 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="h-6 w-6 text-yellow-400" />
              <span className="text-yellow-400 font-medium">
                CORPORATE SOLUTIONS
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-300">
                Enterprise-Grade
              </span>{" "}
              <br />
              Driver Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Elevate your corporate transportation with our premium driver
              service. Designed for businesses that demand reliability,
              discretion, and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#pricing"
                className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-yellow-500/30 flex items-center gap-2"
              >
                <Zap className="h-5 w-5" />
                View Pricing Plans
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-yellow-500 text-yellow-300 font-bold rounded-lg hover:bg-yellow-500/10 transition-all duration-300 flex items-center gap-2"
              >
                Contact Our Team
              </a>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-600/20 rounded-full blur-xl"></div>
            <Image
              src="/confident-professional-driver-side-view-600nw-2149539983.webp"
              alt="Corporate driver service"
              width={600}
              height={600}
              className="w-full h-auto rounded-xl shadow-2xl border border-gray-700/50"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-20 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why <span className="text-yellow-400">Corporate Clients</span>{" "}
              Choose Us
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We understand the unique transportation needs of businesses in
              Lagos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-yellow-500/30 transition-all duration-300"
              >
                <div className="bg-yellow-400/10 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="px-6 sm:px-12 md:px-16 lg:px-24 py-20 bg-black"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Flexible <span className="text-yellow-400">Corporate Plans</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the package that fits your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-xl overflow-hidden border ${
                  plan.popular
                    ? "border-yellow-400 shadow-lg shadow-yellow-500/20"
                    : "border-gray-800"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-yellow-400 text-black px-4 py-1 text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-end mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`w-full block text-center px-6 py-3 rounded-lg font-bold ${
                      plan.popular
                        ? "bg-yellow-400 text-black hover:bg-yellow-500"
                        : "bg-gray-800 text-white hover:bg-gray-700"
                    } transition-all duration-300`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-20 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Trusted by{" "}
              <span className="text-yellow-400">Leading Businesses</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Don&apos;t just take our word for it
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-900/50 p-8 rounded-xl border border-gray-800"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-400">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">{testimonial.author}</h4>
                    <p className="text-yellow-400">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-xl italic mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="px-6 sm:px-12 md:px-16 lg:px-24 py-32 bg-black relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/corporate-pattern.svg')] bg-cover opacity-5"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Elevate Your{" "}
            <span className="text-yellow-400">Corporate Transportation?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Our team is ready to design a custom solution for your business
            needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+2349032702233"
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-yellow-500/30"
            >
              Call Us Now
            </a>
            <a
              href="mailto:info@lagosdriverslink.com"
              className="px-8 py-4 border border-yellow-500 text-yellow-300 font-bold rounded-lg hover:bg-yellow-500/10 transition-all duration-300"
            >
              Email Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
