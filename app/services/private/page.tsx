import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Star, Shield, Clock, Users, Car } from "lucide-react";

export const metadata: Metadata = {
  title: "Private Drivers Service | Lagos Drivers Link",
  description:
    "Professional private drivers for personal transportation in Lagos. Reliable, safe, and experienced drivers for your daily commute and special occasions.",
  keywords:
    "private drivers, personal driver, Lagos transportation, chauffeur service, professional driver",
};

export default function PrivateDriversPage() {
  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Verified & Safe",
      description:
        "All drivers are thoroughly vetted with background checks and safety certifications.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Availability",
      description:
        "Round-the-clock service for your convenience, whenever you need transportation.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Experienced Professionals",
      description:
        "Skilled drivers with extensive knowledge of Lagos roads and traffic patterns.",
    },
    {
      icon: <Car className="h-6 w-6" />,
      title: "Well-Maintained Vehicles",
      description:
        "Clean, comfortable, and regularly serviced vehicles for your comfort.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Business Executive",
      content:
        "The private driver service has been exceptional. Professional, punctual, and always reliable for my daily commute.",
      rating: 5,
    },
    {
      name: "Michael Adebayo",
      role: "Entrepreneur",
      content:
        "Perfect for business meetings and personal errands. The drivers are courteous and know Lagos like the back of their hand.",
      rating: 5,
    },
    {
      name: "Grace Okafor",
      role: "Doctor",
      content:
        "As a healthcare worker with irregular hours, having a reliable private driver has been a game-changer for me.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="w-[85%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-yellow-400 font-semibold mb-4">
                <Car className="w-5 h-5" /> Private Driver Service
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
                Premium Private Drivers
              </h1>
              <p className="text-xl mb-8 text-yellow-100">
                Professional, reliable private drivers for your personal
                transportation needs in Lagos. Experience comfort, safety, and
                convenience with our premium service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/hire"
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all shadow-md hover:shadow-yellow-500/50 text-center"
                >
                  Hire a Private Driver
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-yellow-500 text-yellow-400 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 hover:text-black transition-colors text-center"
                >
                  Get Quote
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl border border-yellow-500/30 bg-yellow-500/5 p-2">
                <Image
                  src="/professional-driver-service.webp"
                  alt="Professional Private Driver"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="w-[85%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Why Choose Our Private Drivers?
            </h2>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
              We provide the highest quality private driver service with
              unmatched professionalism and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-yellow-500/5 border border-yellow-500/30 p-6 rounded-lg text-center"
              >
                <div className="text-yellow-400 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-yellow-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-black">
        <div className="w-[85%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Comprehensive Private Driver Service
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-white">
                      Daily Commute
                    </h3>
                    <p className="text-yellow-100">
                      Regular transportation to and from work, school, or other
                      daily activities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-white">
                      Special Events
                    </h3>
                    <p className="text-yellow-100">
                      Weddings, parties, business meetings, and other important
                      occasions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-white">
                      Airport Transfers
                    </h3>
                    <p className="text-yellow-100">
                      Reliable pickup and drop-off services to and from Lagos
                      airports.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-white">
                      City Tours
                    </h3>
                    <p className="text-yellow-100">
                      Explore Lagos with knowledgeable drivers who know all the
                      best spots.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl border border-yellow-500/30 bg-yellow-500/5 p-2">
                <Image
                  src="/confident-professional-driver-side-view-600nw-2149539983.webp"
                  alt="Professional Driver in Lagos"
                  width={500}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black">
        <div className="w-[85%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              What Our Clients Say
            </h2>
            <p className="text-xl text-yellow-100">
              Don't just take our word for it - hear from satisfied customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-yellow-500/5 border border-yellow-500/30 p-6 rounded-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-yellow-100 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-yellow-200 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="w-[85%] mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
            Ready to Experience Premium Private Driver Service?
          </h2>
          <p className="text-xl mb-8 text-yellow-100">
            Join thousands of satisfied customers who trust Lagos Drivers Link
            for their transportation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/hire"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all shadow-md hover:shadow-yellow-500/50"
            >
              Book Your Driver Now
            </Link>
            <Link
              href="/contact"
              className="border-2 border-yellow-500 text-yellow-400 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 hover:text-black transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
