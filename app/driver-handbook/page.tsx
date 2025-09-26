import Link from "next/link";
import {
  Shield,
  Car,
  Users,
  Clock,
  MapPin,
  Phone,
  AlertTriangle,
  CheckCircle,
  Star,
  Download,
} from "lucide-react";

const handbookSections = [
  {
    id: "safety",
    title: "Safety Protocols",
    icon: <Shield className="w-8 h-8" />,
    description:
      "Essential safety guidelines and protocols for professional driving",
    topics: [
      "Vehicle inspection checklist",
      "Emergency procedures",
      "Defensive driving techniques",
      "Weather-related safety",
      "Incident reporting",
    ],
  },
  {
    id: "professionalism",
    title: "Professional Standards",
    icon: <Star className="w-8 h-8" />,
    description: "Maintaining the highest standards of professional conduct",
    topics: [
      "Dress code and appearance",
      "Communication with clients",
      "Punctuality and reliability",
      "Confidentiality and discretion",
      "Customer service excellence",
    ],
  },
  {
    id: "navigation",
    title: "Lagos Navigation",
    icon: <MapPin className="w-8 h-8" />,
    description: "Mastering Lagos roads and traffic patterns",
    topics: [
      "Major routes and landmarks",
      "Traffic patterns and peak hours",
      "Alternative routes and shortcuts",
      "Parking and waiting areas",
      "GPS and navigation tools",
    ],
  },
  {
    id: "vehicle-care",
    title: "Vehicle Maintenance",
    icon: <Car className="w-8 h-8" />,
    description: "Keeping your vehicle in optimal condition",
    topics: [
      "Daily inspection routine",
      "Basic maintenance tasks",
      "Fuel efficiency tips",
      "Cleaning and presentation",
      "Reporting mechanical issues",
    ],
  },
  {
    id: "client-relations",
    title: "Client Relations",
    icon: <Users className="w-8 h-8" />,
    description: "Building and maintaining positive client relationships",
    topics: [
      "First impressions",
      "Communication best practices",
      "Handling special requests",
      "Conflict resolution",
      "Building client loyalty",
    ],
  },
  {
    id: "scheduling",
    title: "Scheduling & Time Management",
    icon: <Clock className="w-8 h-8" />,
    description: "Effective time management and scheduling",
    topics: [
      "Route planning and optimization",
      "Buffer time management",
      "Handling delays and disruptions",
      "Multi-stop trips",
      "End-of-day procedures",
    ],
  },
];

const quickTips = [
  {
    icon: <CheckCircle className="w-6 h-6 text-green-400" />,
    tip: "Always arrive 5-10 minutes early for pickups",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-green-400" />,
    tip: "Keep your vehicle clean and well-maintained at all times",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-green-400" />,
    tip: "Maintain professional communication with all clients",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-green-400" />,
    tip: "Follow all traffic laws and safety regulations",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-green-400" />,
    tip: "Report any incidents or issues immediately",
  },
];

const emergencyContacts = [
  {
    name: "Lagos Drivers Link Support",
    number: "+234-706-620-8246",
    description: "24/7 driver support hotline",
  },
  {
    name: "Emergency Services",
    number: "199",
    description: "Police, Fire, Ambulance",
  },
  {
    name: "Lagos Traffic Management",
    number: "+234-1-270-0000",
    description: "Traffic control and assistance",
  },
];

export default function DriverHandbookPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header spacing */}
      <div className="h-[88px]"></div>

      {/* Hero Section */}
      <section className="py-20 px-6 sm:px-12 md:px-16 lg:px-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
              Driver Handbook
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your comprehensive guide to professional driving excellence with
            Lagos Drivers Link. Master the skills, standards, and practices that
            set our drivers apart.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 to-yellow-400 mx-auto rounded-full mb-8"></div>

          {/* Download Button */}
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-lg font-semibold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50">
            <Download className="w-5 h-5 mr-2" />
            Download PDF Version
          </button>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-16 px-6 sm:px-12 md:px-16 lg:px-24 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-yellow-100 mb-8 text-center">
            Quick Tips for Success
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickTips.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-gray-800/50 rounded-xl border border-gray-700"
              >
                {item.icon}
                <p className="text-gray-300">{item.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Handbook Sections */}
      <section className="py-16 px-6 sm:px-12 md:px-16 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-yellow-100 mb-12 text-center">
            Handbook Sections
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {handbookSections.map((section) => (
              <div
                key={section.id}
                className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="text-yellow-400 mb-4 group-hover:scale-110 transition-transform">
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {section.title}
                </h3>
                <p className="text-gray-300 mb-6 text-sm">
                  {section.description}
                </p>
                <ul className="space-y-2">
                  {section.topics.map((topic, index) => (
                    <li
                      key={index}
                      className="flex items-center text-gray-400 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full py-2 border border-yellow-500 text-yellow-400 rounded-lg hover:bg-yellow-500/10 transition-all duration-300">
                  Read Section
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-16 px-6 sm:px-12 md:px-16 lg:px-24 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-yellow-100 mb-8 text-center">
            Emergency Contacts
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {emergencyContacts.map((contact, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-xl p-6 border border-red-500/20 text-center"
              >
                <Phone className="w-8 h-8 text-red-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">
                  {contact.name}
                </h3>
                <p className="text-2xl font-bold text-red-400 mb-2">
                  {contact.number}
                </p>
                <p className="text-gray-300 text-sm">{contact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Reminders */}
      <section className="py-16 px-6 sm:px-12 md:px-16 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-900/20 to-amber-900/20 rounded-2xl p-8 border border-yellow-500/20">
            <div className="flex items-start gap-6">
              <AlertTriangle className="w-12 h-12 text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-yellow-100 mb-4">
                  Important Safety Reminders
                </h2>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    Always perform a pre-trip vehicle inspection before starting
                    your shift
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    Never drive under the influence of alcohol or drugs
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    Maintain a safe following distance and obey all speed limits
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    Keep your phone hands-free and avoid distractions while
                    driving
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    Report any safety concerns or incidents immediately to
                    support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 sm:px-12 md:px-16 lg:px-24 bg-gradient-to-r from-yellow-900/20 to-amber-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-yellow-100 mb-4">
            Questions or Need Help?
          </h2>
          <p className="text-gray-300 mb-8">
            Our support team is available 24/7 to help you with any questions
            about the driver handbook or your role with Lagos Drivers Link.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-lg font-semibold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact Support
            </Link>
            <Link
              href="/recruit"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-yellow-500 text-yellow-400 rounded-lg font-semibold text-lg hover:bg-yellow-500/10 transition-all duration-300"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}




