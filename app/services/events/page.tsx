import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  Star,
  Calendar,
  Clock,
  Users,
  Car,
  MapPin,
  Gift,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Event Drivers Service | Lagos Drivers Link",
  description:
    "Professional event drivers for weddings, parties, corporate events, and special occasions in Lagos. Reliable transportation for your important events.",
  keywords:
    "event drivers, wedding drivers, party transportation, corporate events, special occasion drivers, Lagos events",
};

export default function EventDriversPage() {
  const eventTypes = [
    {
      icon: <Gift className="h-6 w-6" />,
      title: "Weddings",
      description:
        "Elegant transportation for the bride, groom, and wedding party. Special wedding car decorations available.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Corporate Events",
      description:
        "Professional transportation for business meetings, conferences, and corporate gatherings.",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Parties & Celebrations",
      description:
        "Reliable drivers for birthday parties, anniversaries, and other special celebrations.",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Airport Pickups",
      description:
        "VIP airport transfers for important guests and business travelers.",
    },
  ];

  const features = [
    {
      title: "Event-Specific Planning",
      description:
        "Customized transportation plans tailored to your event timeline and requirements.",
    },
    {
      title: "Professional Attire",
      description:
        "Drivers dressed appropriately for your event - formal wear for weddings, business attire for corporate events.",
    },
    {
      title: "Flexible Scheduling",
      description:
        "Extended hours and flexible timing to accommodate your event schedule.",
    },
    {
      title: "Backup Vehicles",
      description:
        "Contingency plans with backup vehicles to ensure your event runs smoothly.",
    },
  ];

  const testimonials = [
    {
      name: "Adunni & Tunde",
      role: "Wedding Couple",
      content:
        "Our wedding day transportation was flawless. The driver was professional, punctual, and made our special day even more memorable.",
      rating: 5,
    },
    {
      name: "TechCorp Nigeria",
      role: "Corporate Client",
      content:
        "We've used Lagos Drivers Link for multiple corporate events. Always reliable and professional - highly recommended for business events.",
      rating: 5,
    },
    {
      name: "Mrs. Adebayo",
      role: "Event Organizer",
      content:
        "The event drivers are exceptional. They understand the importance of timing and always deliver beyond expectations.",
      rating: 5,
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
                Event Drivers
              </h1>
              <p className="text-xl mb-8 text-gray-800">
                Make your special occasions unforgettable with our professional
                event drivers. From weddings to corporate events, we provide
                reliable, elegant transportation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/hire"
                  className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-center"
                >
                  Book Event Driver
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors text-center"
                >
                  Plan Your Event
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/young-black-handsome-cab-driver-600nw-1434428810.webp"
                alt="Professional Event Driver"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="w-[85%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Perfect for Every Occasion
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our event drivers are experienced in handling all types of special
              occasions with professionalism and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventTypes.map((event, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-yellow-500 mb-4 flex justify-center">
                  {event.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="w-[85%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Why Choose Our Event Drivers?
              </h2>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/close-portrait-happy-black-man-600nw-151566872.webp"
                alt="Happy Professional Driver"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="w-[85%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to book your event transportation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-yellow-500 text-black w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Book Your Event</h3>
              <p className="text-gray-600">
                Contact us with your event details, date, and specific
                requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-500 text-black w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Customize Service</h3>
              <p className="text-gray-600">
                We'll create a tailored transportation plan for your event.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-500 text-black w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Enjoy Your Event</h3>
              <p className="text-gray-600">
                Relax and enjoy your special occasion with reliable
                transportation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="w-[85%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Event Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Hear from clients who made their events memorable with our
              drivers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg">
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
            Make Your Event Unforgettable
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Trust Lagos Drivers Link to provide professional, reliable
            transportation for your special occasions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/hire"
              className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
            >
              Book Event Transportation
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors"
            >
              Discuss Your Event
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
