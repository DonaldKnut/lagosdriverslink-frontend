"use client";
import {
  CheckCircle,
  UserCheck,
  FileText,
  Clock,
  Handshake,
  ShieldCheck,
  ArrowRight,
  Check,
  Users,
  Zap,
  Star,
} from "lucide-react";
import Image from "next/image";

export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      icon: <FileText className="h-8 w-8 text-yellow-400" />,
      title: "Submit Your Request",
      description:
        "Fill out our simple form with your requirements. Tell us what type of driver you need, working hours, and any specific qualifications.",
      image: "/confident-professional-driver-side-view-600nw-2149539983.webp",
    },
    {
      number: "02",
      icon: <UserCheck className="h-8 w-8 text-yellow-400" />,
      title: "We Match You",
      description:
        "Our team reviews your requirements and matches you with the best vetted professional drivers from our network that meet your criteria.",
      image: "/young-black-handsome-cab-driver-600nw-1434428810.webp",
    },
    {
      number: "03",
      icon: <Handshake className="h-8 w-8 text-yellow-400" />,
      title: "Interview & Selection",
      description:
        "Review driver profiles and conduct interviews. We facilitate the process to ensure you find the perfect match for your needs.",
      image: "/smiling-cheerful-young-adult-african-600nw-1850821510.webp",
    },
    {
      number: "04",
      icon: <ShieldCheck className="h-8 w-8 text-yellow-400" />,
      title: "Background Verification",
      description:
        "We handle all background checks, reference verification, and credential validation before finalizing any placement.",
      image: "/close-portrait-happy-black-man-600nw-151566872.webp",
    },
    {
      number: "05",
      icon: <Clock className="h-8 w-8 text-yellow-400" />,
      title: "Onboarding & Start",
      description:
        "Once verified, we help with onboarding and documentation. Your driver is ready to start, and we provide ongoing support.",
      image: "/driver.jpg",
    },
  ];

  const benefits = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-yellow-400" />,
      title: "Fully Vetted",
      description: "All drivers undergo comprehensive background checks",
    },
    {
      icon: <Users className="h-6 w-6 text-yellow-400" />,
      title: "Extensive Network",
      description: "Access to hundreds of pre-screened professional drivers",
    },
    {
      icon: <Zap className="h-6 w-6 text-yellow-400" />,
      title: "Quick Matching",
      description: "Get matched with qualified drivers within 48 hours",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-yellow-400" />,
      title: "Ongoing Support",
      description: "We provide continuous support throughout the hiring process",
    },
  ];

  const faqs = [
    {
      question: "How long does the hiring process take?",
      answer:
        "Typically, you can have a matched driver within 2-5 business days after submitting your request. The timeline depends on your specific requirements and the verification process.",
    },
    {
      question: "What qualifications do your drivers have?",
      answer:
        "All our drivers are professionally trained, licensed, and undergo rigorous background checks. They must meet our strict standards for experience, reliability, and professionalism.",
    },
    {
      question: "Can I interview drivers before hiring?",
      answer:
        "Absolutely! We encourage interviews to ensure the perfect match. We facilitate the interview process and provide all necessary driver information beforehand.",
    },
    {
      question: "What happens if a driver doesn't work out?",
      answer:
        "We offer a replacement guarantee. If a driver doesn't meet your expectations, we'll provide a qualified replacement quickly, usually within 48 hours.",
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-6 sm:px-12 md:px-16 lg:px-24 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/10 to-black z-0" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-400/5 -skew-x-12 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <CheckCircle className="h-6 w-6 text-yellow-400" />
            <span className="text-yellow-400 font-medium">
              SIMPLE PROCESS
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-300">
              How It Works
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Getting a professional driver in Lagos is simple. Follow our
            streamlined 5-step process and have your driver ready in days.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-20 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our <span className="text-yellow-400">5-Step Process</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From request to onboarding, we make it easy
            </p>
          </div>

          <div className="space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`order-2 ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-6xl font-bold text-yellow-400/20">
                      {step.number}
                    </div>
                    <div className="bg-yellow-400/10 w-16 h-16 rounded-full flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-yellow-400">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                  {index < steps.length - 1 && (
                    <div className="flex items-center gap-2 mt-8 text-yellow-400">
                      <ArrowRight className="h-5 w-5" />
                      <span className="font-medium">Next Step</span>
                    </div>
                  )}
                </div>
                <div
                  className={`relative order-1 ${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}
                >
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-600/20 rounded-full blur-xl"></div>
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-gray-700/50">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                      priority={index < 2}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-20 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Choose <span className="text-yellow-400">Our Process</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We've streamlined the driver hiring process to save you time and
              ensure quality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-yellow-500/30 transition-all duration-300"
              >
                <div className="bg-yellow-400/10 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-20 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-yellow-400">Questions</span>
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to know about our process
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900/50 p-8 rounded-xl border border-gray-800"
              >
                <h3 className="text-xl font-bold mb-3 text-yellow-400">
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/5 to-black"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-yellow-400/10 w-20 h-20 rounded-full flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-yellow-400" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Get <span className="text-yellow-400">Started?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Begin the process today and have your professional driver ready in
            no time
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/hire"
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-yellow-500/30 flex items-center justify-center gap-2"
            >
              <Zap className="h-5 w-5" />
              Start Your Request
            </a>
            <a
              href="/contact"
              className="px-8 py-4 border border-yellow-500 text-yellow-300 font-bold rounded-lg hover:bg-yellow-500/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Users className="h-5 w-5" />
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}


