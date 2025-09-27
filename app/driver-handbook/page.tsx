import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Download,
  Eye,
  CheckCircle,
  Car,
  Shield,
  Clock,
  Users,
  MapPin,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Driver Handbook | Lagos Drivers Link",
  description:
    "Complete guide for drivers on Lagos Drivers Link platform. Learn about policies, procedures, safety guidelines, and best practices for professional driving.",
  keywords:
    "driver handbook, driver guide, driving policies, safety guidelines, professional driving, Lagos drivers",
};

export default function DriverHandbookPage() {
  const handbookSections = [
    {
      icon: <Car className="h-6 w-6" />,
      title: "Vehicle Requirements",
      content: [
        "Valid vehicle registration and insurance",
        "Regular maintenance and safety inspections",
        "Clean and well-maintained interior and exterior",
        "Working air conditioning and heating",
        "First aid kit and emergency equipment",
      ],
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Safety Guidelines",
      content: [
        "Always wear seatbelts and ensure passengers do the same",
        "Follow speed limits and traffic regulations",
        "Maintain safe following distances",
        "Avoid distracted driving (no phone use while driving)",
        "Report any safety incidents immediately",
      ],
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Customer Service",
      content: [
        "Greet passengers professionally and courteously",
        "Assist with luggage and personal items",
        "Maintain professional appearance and hygiene",
        "Respect passenger privacy and preferences",
        "Handle complaints professionally and escalate when needed",
      ],
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Punctuality",
      content: [
        "Arrive 5 minutes before scheduled pickup time",
        "Notify passengers of any delays immediately",
        "Plan routes to account for traffic conditions",
        "Update ETA if circumstances change",
        "Wait for passengers for reasonable time periods",
      ],
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Navigation",
      content: [
        "Use GPS navigation systems effectively",
        "Know major landmarks and routes in Lagos",
        "Plan alternative routes for traffic avoidance",
        "Stay updated on road closures and construction",
        "Communicate route choices with passengers when appropriate",
      ],
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Communication",
      content: [
        "Respond to booking requests promptly",
        "Maintain clear communication with passengers",
        "Use professional language at all times",
        "Report issues to support team immediately",
        "Keep contact information updated",
      ],
    },
  ];

  const policies = [
    {
      title: "Code of Conduct",
      description:
        "Professional behavior standards and ethical guidelines for all drivers on our platform.",
    },
    {
      title: "Payment Policy",
      description:
        "How payments are processed, when you'll receive payments, and fee structures.",
    },
    {
      title: "Cancellation Policy",
      description:
        "Guidelines for handling cancellations, no-shows, and refunds.",
    },
    {
      title: "Rating System",
      description:
        "How the rating system works and how to maintain high ratings.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="w-[85%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Driver Handbook
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                Your complete guide to success on the Lagos Drivers Link
                platform. Learn about policies, procedures, and best practices
                for professional driving.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-600 transition-colors flex items-center justify-center">
                  <Download className="h-5 w-5 mr-2" />
                  Download PDF
                </button>
                <Link
                  href="/driver-request"
                  className="border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 hover:text-black transition-colors text-center"
                >
                  Join Our Network
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/confident-professional-driver-side-view-600nw-2149539983.webp"
                alt="Professional Driver with Handbook"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-16 bg-black">
        <div className="w-[85%] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Quick Access
            </h2>
            <p className="text-xl text-gray-300">
              Jump to the section you need most
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {policies.map((policy, index) => (
              <div
                key={index}
                className="bg-black border border-yellow-700/50 p-6 rounded-lg shadow-lg text-center hover:shadow-yellow-500/20 transition-shadow"
              >
                <BookOpen className="h-8 w-8 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{policy.title}</h3>
                <p className="text-gray-300 text-sm">{policy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Handbook Sections */}
      <section className="py-20">
        <div className="w-[85%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Essential Guidelines
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Follow these guidelines to provide excellent service and maintain
              your status as a professional driver.
            </p>
          </div>

          <div className="space-y-12">
            {handbookSections.map((section, index) => (
              <div
                key={index}
                className="bg-black border border-yellow-700/50 p-8 rounded-lg"
              >
                <div className="flex items-center mb-6">
                  <div className="text-yellow-500 mr-4">{section.icon}</div>
                  <h3 className="text-2xl font-bold">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Procedures */}
      <section className="py-20 bg-black">
        <div className="w-[85%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Emergency Procedures
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Accident Response
                    </h3>
                    <p className="text-gray-300">
                      Ensure safety, call emergency services, document the
                      incident, and contact support immediately.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Medical Emergency
                    </h3>
                    <p className="text-gray-300">
                      Call emergency services, provide first aid if trained, and
                      notify support team.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Vehicle Breakdown
                    </h3>
                    <p className="text-gray-300">
                      Move to safe location, contact roadside assistance,
                      arrange alternative transportation for passengers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/professional-driver-service.webp"
                alt="Emergency Procedures"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20">
        <div className="w-[85%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-gray-300">
              Tools and resources to help you succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black border border-yellow-700/50 p-6 rounded-lg shadow-lg text-center">
              <Eye className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Training Videos</h3>
              <p className="text-gray-300 mb-4">
                Watch instructional videos on best practices and platform
                features.
              </p>
              <button className="text-yellow-400 font-semibold hover:text-yellow-300">
                Watch Now
              </button>
            </div>
            <div className="bg-black border border-yellow-700/50 p-6 rounded-lg shadow-lg text-center">
              <Download className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Mobile App Guide</h3>
              <p className="text-gray-300 mb-4">
                Learn how to use the driver app effectively for maximum
                efficiency.
              </p>
              <button className="text-yellow-400 font-semibold hover:text-yellow-300">
                Download Guide
              </button>
            </div>
            <div className="bg-black border border-yellow-700/50 p-6 rounded-lg shadow-lg text-center">
              <Phone className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Support Center</h3>
              <p className="text-gray-300 mb-4">
                Get help when you need it with our 24/7 support team.
              </p>
              <Link
                href="/help"
                className="text-yellow-400 font-semibold hover:text-yellow-300"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="w-[85%] mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Driving?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Join our network of professional drivers and start earning with
            Lagos Drivers Link.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/driver-request"
              className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
            >
              Apply to Drive
            </Link>
            <Link
              href="/contact"
              className="border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 hover:text-black transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
