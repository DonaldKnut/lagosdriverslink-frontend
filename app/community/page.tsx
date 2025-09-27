/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  MessageCircle,
  Calendar,
  Award,
  Heart,
  Globe,
  Star,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Community | Lagos Drivers Link",
  description:
    "Join the Lagos Drivers Link community. Connect with drivers, share experiences, get support, and be part of Nigeria's premier transportation network.",
  keywords:
    "driver community, Lagos drivers, transportation community, driver support, networking, driver forum",
};

export default function CommunityPage() {
  const communityFeatures = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Driver Forum",
      description:
        "Connect with fellow drivers, share tips, and discuss industry trends in our active community forum.",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Events & Meetups",
      description:
        "Join regular meetups, training sessions, and networking events for drivers in Lagos.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Recognition Program",
      description:
        "Get recognized for excellent service with our monthly driver awards and achievement badges.",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Support Network",
      description:
        "Access peer support, mentorship programs, and resources to help you succeed as a driver.",
    },
  ];

  const communityStats = [
    {
      number: "2,500+",
      label: "Active Drivers",
      icon: <Users className="h-8 w-8" />,
    },
    {
      number: "50,000+",
      label: "Monthly Rides",
      icon: <TrendingUp className="h-8 w-8" />,
    },
    {
      number: "4.9/5",
      label: "Average Rating",
      icon: <Star className="h-8 w-8" />,
    },
    {
      number: "24/7",
      label: "Community Support",
      icon: <Globe className="h-8 w-8" />,
    },
  ];

  const testimonials = [
    {
      name: "Emeka Okafor",
      role: "Driver Partner",
      content:
        "The community has been amazing. I've learned so much from other drivers and made great connections. The support is incredible.",
      rating: 5,
    },
    {
      name: "Funmi Adebayo",
      role: "Driver Partner",
      content:
        "Being part of this community has helped me improve my service and increase my earnings. The mentorship program is fantastic.",
      rating: 5,
    },
    {
      name: "Tunde Johnson",
      role: "Driver Partner",
      content:
        "The monthly meetups are great for networking and learning new skills. I've grown both personally and professionally.",
      rating: 5,
    },
  ];

  const upcomingEvents = [
    {
      title: "Monthly Driver Meetup",
      date: "February 15, 2025",
      location: "Victoria Island, Lagos",
      description:
        "Network with fellow drivers and learn about new platform features.",
    },
    {
      title: "Safety Training Workshop",
      date: "February 22, 2025",
      location: "Ikeja, Lagos",
      description: "Advanced safety training and defensive driving techniques.",
    },
    {
      title: "Customer Service Excellence",
      date: "March 1, 2025",
      location: "Lekki, Lagos",
      description:
        "Learn how to provide exceptional customer service and boost your ratings.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="w-[85%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Community</h1>
              <p className="text-xl mb-8 text-gray-300">
                Join Nigeria's largest network of professional drivers. Connect,
                learn, and grow together in our supportive community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/driver-request"
                  className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-600 transition-colors text-center"
                >
                  Join Our Community
                </Link>
                <Link
                  href="#events"
                  className="border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 hover:text-black transition-colors text-center"
                >
                  View Events
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/smiling-cheerful-young-adult-african-600nw-1850821510.webp"
                alt="Driver Community"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 bg-black">
        <div className="w-[85%] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Growing Community
            </h2>
            <p className="text-xl text-gray-300">
              Join thousands of drivers who are part of our thriving community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityStats.map((stat, index) => (
              <div
                key={index}
                className="bg-black border border-yellow-700/50 p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-yellow-500 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-20">
        <div className="w-[85%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What Our Community Offers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Be part of a supportive network that helps you succeed as a
              professional driver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-black border border-yellow-700/50 p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-yellow-500 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="events" className="py-20 bg-black">
        <div className="w-[85%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-300">
              Join our community events and activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-black border border-yellow-700/50 p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <Calendar className="h-5 w-5 text-yellow-500 mr-2" />
                  <span className="text-sm text-gray-400">{event.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                <p className="text-gray-300 mb-3">{event.description}</p>
                <p className="text-sm text-gray-400">{event.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="w-[85%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Community Stories
            </h2>
            <p className="text-xl text-gray-300">
              Hear from drivers who are thriving in our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-black border border-yellow-700/50 p-6 rounded-lg shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-20 bg-black">
        <div className="w-[85%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Community Guidelines
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    Respect all community members and maintain professional
                    conduct
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    Share knowledge and experiences to help others succeed
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    Follow platform policies and safety guidelines
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    Report any inappropriate behavior or safety concerns
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    Participate actively and contribute positively to
                    discussions
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/portrait-of-a-confident-young-black-man-for-lifestyle-or-fashion-marketing-free-photo.jpeg"
                alt="Community Guidelines"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="w-[85%] mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Become part of Nigeria's most supportive driver community and take
            your career to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/driver-request"
              className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
            >
              Join Now
            </Link>
            <Link
              href="/contact"
              className="border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 hover:text-black transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
