import { Metadata } from "next";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Lagos Drivers Link",
  description:
    "Find answers to common questions about Lagos Drivers Link services, booking, payments, safety, and more. Get help with your transportation needs.",
  keywords:
    "FAQ, frequently asked questions, help, support, Lagos Drivers Link, transportation questions",
};

// Client component for FAQ accordion
function FAQAccordion() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What is Lagos Drivers Link?",
          answer:
            "Lagos Drivers Link is a professional transportation service platform that connects customers with verified, experienced drivers in Lagos, Nigeria. We provide reliable, safe, and convenient transportation solutions for various needs including daily commutes, events, and corporate transportation.",
        },
        {
          question: "How do I book a driver?",
          answer:
            "You can book a driver through our website or mobile app. Simply select your pickup and destination locations, choose your preferred time, and select from available drivers. You can also call our customer service line at +234 706 620 8246 for assistance with bookings.",
        },
        {
          question: "What areas do you serve?",
          answer:
            "We currently serve all major areas in Lagos including Victoria Island, Ikoyi, Lekki, Ikeja, Surulere, Yaba, and surrounding areas. We're continuously expanding our coverage to serve more locations across Lagos.",
        },
      ],
    },
    {
      category: "Booking & Payment",
      questions: [
        {
          question: "How far in advance can I book?",
          answer:
            "You can book drivers up to 30 days in advance for regular services. For special events and corporate bookings, we recommend booking at least 48 hours in advance to ensure availability.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept cash payments, bank transfers, and major credit/debit cards. You can also pay through our mobile app using various digital payment methods including Paystack, Flutterwave, and other secure payment gateways.",
        },
        {
          question: "Can I cancel my booking?",
          answer:
            "Yes, you can cancel your booking. Cancellation policies vary depending on the service type and timing. Free cancellation is available up to 2 hours before your scheduled pickup time. Late cancellations may incur a fee.",
        },
        {
          question: "Do you provide receipts?",
          answer:
            "Yes, we provide digital receipts for all paid services. Receipts are automatically sent to your email address and can also be accessed through your account dashboard.",
        },
      ],
    },
    {
      category: "Safety & Security",
      questions: [
        {
          question: "How do you ensure driver safety?",
          answer:
            "All our drivers undergo thorough background checks, vehicle inspections, and safety training. We verify driver licenses, conduct criminal background checks, and ensure all vehicles meet our safety standards. Drivers are also required to maintain valid insurance and registration.",
        },
        {
          question: "What if I feel unsafe during a ride?",
          answer:
            "Your safety is our top priority. If you ever feel unsafe, you can contact our 24/7 emergency support line immediately. All rides are tracked in real-time, and we have emergency protocols in place to ensure your safety.",
        },
        {
          question: "Are your vehicles insured?",
          answer:
            "Yes, all vehicles in our network are required to have comprehensive insurance coverage. This includes liability insurance and coverage for passengers and their belongings.",
        },
      ],
    },
    {
      category: "Driver Services",
      questions: [
        {
          question: "How do I become a driver partner?",
          answer:
            "To become a driver partner, visit our driver application page, complete the online application, and submit required documents including your driver's license, vehicle registration, and insurance. We'll review your application and contact you for the next steps.",
        },
        {
          question: "What are the requirements to become a driver?",
          answer:
            "Requirements include: valid Nigerian driver's license (minimum 2 years), clean driving record, vehicle in good condition (maximum 10 years old), comprehensive insurance, and passing our background check and vehicle inspection.",
        },
        {
          question: "How much can I earn as a driver?",
          answer:
            "Driver earnings vary based on hours worked, location, and service type. Our drivers typically earn competitive rates with flexible scheduling. We provide detailed earning information during the application process.",
        },
      ],
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "I'm having trouble with the app. What should I do?",
          answer:
            "If you're experiencing technical issues with our app, try updating to the latest version, clearing your app cache, or restarting your device. If problems persist, contact our technical support team at support@lagosdriverslink.com or call +234 706 620 8246.",
        },
        {
          question: "How do I update my profile information?",
          answer:
            "You can update your profile information by logging into your account on our website or mobile app. Go to 'Account Settings' or 'Profile' to make changes to your personal information, payment methods, or preferences.",
        },
        {
          question: "What if I forget my password?",
          answer:
            "You can reset your password by clicking 'Forgot Password' on the login page. Enter your email address, and we'll send you a password reset link. Follow the instructions in the email to create a new password.",
        },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      {faqs.map((category, categoryIndex) => (
        <div
          key={categoryIndex}
          className="bg-gray-900 rounded-lg shadow-lg border border-gray-700"
        >
          <div className="bg-yellow-500 text-black p-4 rounded-t-lg">
            <h2 className="text-xl font-bold">{category.category}</h2>
          </div>
          <div className="divide-y divide-gray-700">
            {category.questions.map((faq, questionIndex) => {
              const itemIndex = categoryIndex * 100 + questionIndex;
              const isOpen = openItems.includes(itemIndex);

              return (
                <div key={questionIndex} className="p-4">
                  <button
                    onClick={() => toggleItem(itemIndex)}
                    className="w-full flex items-center justify-between text-left hover:bg-gray-800 p-2 rounded transition-colors"
                  >
                    <span className="font-semibold text-white">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-yellow-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-yellow-400" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="mt-3 pl-2">
                      <p className="text-yellow-100 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="w-[85%] mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-500/20 rounded-full mb-6">
            <HelpCircle className="h-10 w-10 text-yellow-400" />
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
            Frequently Asked Questions
          </h1>
          <p className="text-xl mb-8 text-yellow-100 max-w-3xl mx-auto">
            Find answers to common questions about our services, booking
            process, payments, safety measures, and more.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-black">
        <div className="w-[85%] mx-auto">
          <FAQAccordion />
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-black">
        <div className="w-[85%] mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8 text-yellow-100 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our support team is here
            to help.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
              <div className="text-yellow-400 mb-4">
                <svg
                  className="h-8 w-8 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Call Us</h3>
              <p className="text-yellow-100 mb-4">
                Speak directly with our support team
              </p>
              <p className="text-yellow-400 font-semibold">+234 903 270 2233</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
              <div className="text-yellow-400 mb-4">
                <svg
                  className="h-8 w-8 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">
                Email Us
              </h3>
              <p className="text-yellow-100 mb-4">
                Send us your questions via email
              </p>
              <p className="text-yellow-400 font-semibold">
                teams@lagosdriverslink.com
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
              <div className="text-yellow-400 mb-4">
                <svg
                  className="h-8 w-8 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">
                Live Chat
              </h3>
              <p className="text-yellow-100 mb-4">Chat with us in real-time</p>
              <p className="text-yellow-400 font-semibold">Available 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-black">
        <div className="w-[85%] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Quick Links
            </h2>
            <p className="text-xl text-yellow-100">
              Find more information and resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="/help"
              className="bg-gray-900 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow border border-gray-700 hover:border-yellow-500/50"
            >
              <HelpCircle className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">
                Help Center
              </h3>
              <p className="text-yellow-100 text-sm">
                Comprehensive help articles and guides
              </p>
            </a>
            <a
              href="/safety"
              className="bg-gray-900 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow border border-gray-700 hover:border-yellow-500/50"
            >
              <svg
                className="h-8 w-8 text-yellow-400 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <h3 className="text-lg font-semibold mb-2 text-white">Safety</h3>
              <p className="text-yellow-100 text-sm">
                Learn about our safety measures
              </p>
            </a>
            <a
              href="/terms"
              className="bg-gray-900 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow border border-gray-700 hover:border-yellow-500/50"
            >
              <svg
                className="h-8 w-8 text-yellow-400 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <h3 className="text-lg font-semibold mb-2 text-white">
                Terms of Service
              </h3>
              <p className="text-yellow-100 text-sm">
                Read our terms and conditions
              </p>
            </a>
            <a
              href="/privacy"
              className="bg-gray-900 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow border border-gray-700 hover:border-yellow-500/50"
            >
              <svg
                className="h-8 w-8 text-yellow-400 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <h3 className="text-lg font-semibold mb-2 text-white">
                Privacy Policy
              </h3>
              <p className="text-yellow-100 text-sm">
                How we protect your data
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
