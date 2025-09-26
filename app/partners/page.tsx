import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  Star,
  Handshake,
  TrendingUp,
  Users,
  Globe,
  Award,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Partnerships | Lagos Drivers Link",
  description:
    "Partner with Lagos Drivers Link to expand your business reach. Join our network of trusted partners and grow together in the transportation industry.",
  keywords:
    "partnerships, business partners, driver network, transportation partners, Lagos business, collaboration",
};

export default function PartnersPage() {
  const partnershipTypes = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Driver Partners",
      description:
        "Join our network of professional drivers and access consistent work opportunities with competitive rates.",
    },
    {
      icon: <Handshake className="h-6 w-6" />,
      title: "Corporate Partners",
      description:
        "Partner with us to provide transportation solutions for your employees and clients.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Technology Partners",
      description:
        "Collaborate with us to enhance our platform and services through innovative technology solutions.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Service Partners",
      description:
        "Partner with complementary services to offer comprehensive solutions to our customers.",
    },
  ];

  const benefits = [
    {
      title: "Increased Revenue",
      description:
        "Access to a large customer base and consistent booking opportunities.",
    },
    {
      title: "Brand Recognition",
      description:
        "Leverage our established brand to grow your business reputation.",
    },
    {
      title: "Technology Support",
      description:
        "Access to our booking platform and customer management tools.",
    },
    {
      title: "Marketing Support",
      description:
        "Co-marketing opportunities and promotional support for your services.",
    },
  ];

  const testimonials = [
    {
      name: "David Okonkwo",
      role: "Driver Partner",
      content:
        "Joining Lagos Drivers Link as a partner has transformed my business. I now have consistent bookings and better income stability.",
      rating: 5,
    },
    {
      name: "TechStart Nigeria",
      role: "Corporate Partner",
      content:
        "The partnership has been mutually beneficial. Our employees love the reliable transportation service, and it's improved our productivity.",
      rating: 5,
    },
    {
      name: "Sarah Adebayo",
      role: "Service Partner",
      content:
        "Working with Lagos Drivers Link has expanded our customer base significantly. The partnership is professional and profitable.",
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
                Partnerships
              </h1>
              <p className="text-xl mb-8 text-gray-800">
                Grow your business with Lagos Drivers Link. Join our network of
                trusted partners and unlock new opportunities in the
                transportation industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-center"
                >
                  Become a Partner
                </Link>
                <Link
                  href="#partnership-types"
                  className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/smiling-cheerful-young-adult-african-600nw-1850821510.webp"
                alt="Business Partnership"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types Section */}
      <section id="partnership-types" className="py-20 bg-gray-50">
        <div className="w-[85%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer various partnership models to suit different business
              needs and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-yellow-500 mb-4 flex justify-center">
                  {type.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="w-[85%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Why Partner With Us?
              </h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/portrait-of-a-confident-young-black-man-for-lifestyle-or-fashion-marketing-free-photo.jpeg"
                alt="Successful Business Partnership"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-gray-50">
        <div className="w-[85%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Partnership Requirements
            </h2>
            <p className="text-xl text-gray-600">
              What we look for in our partners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Target className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Professional Standards
              </h3>
              <p className="text-gray-600">
                Maintain high standards of service quality and customer
                satisfaction.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <TrendingUp className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Growth Mindset</h3>
              <p className="text-gray-600">
                Commitment to continuous improvement and business growth.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Handshake className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Reliability</h3>
              <p className="text-gray-600">
                Consistent delivery of services and adherence to agreements.
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
              Partner Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Hear from our successful partners about their experience.
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
            Ready to Partner With Us?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Join our network of successful partners and grow your business with
            Lagos Drivers Link.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
            >
              Apply for Partnership
            </Link>
            <Link
              href="mailto:partnerships@lagosdriverslink.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors"
            >
              Email Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
