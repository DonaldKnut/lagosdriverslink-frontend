"use client";

import { Mail, Phone, MapPin, Clock, Send, ArrowRight } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black text-yellow-50">
      {/* Hero Section */}
      <section className="relative py-28 px-6 md:px-12 lg:px-24 bg-black overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-600">
            Get In Touch
          </h1>
          <p className="text-xl text-yellow-100 mb-10 max-w-3xl mx-auto">
            We&apos;d love to hear from you! Reach out for inquiries, support,
            or just to say hello.
          </p>

          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-yellow-900/10 blur-3xl"></div>
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-yellow-900/10 blur-3xl"></div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Mail className="w-8 h-8 text-yellow-500" />,
              title: "Email Us",
              info: "teams@lagosdriverslink.com",
              action: "Send a message",
              link: "mailto:teams@lagosdriverslink.com",
            },
            {
              icon: <Phone className="w-8 h-8 text-yellow-500" />,
              title: "Call Us",
              info: "+234 903 270 2233",
              action: "Call now",
              link: "tel:+2349032702233",
            },
            {
              icon: <MapPin className="w-8 h-8 text-yellow-500" />,
              title: "Visit Us",
              info: "Lagos",
              action: "Get directions",
              link: "#",
            },
            {
              icon: <Clock className="w-8 h-8 text-yellow-500" />,
              title: "Working Hours",
              info: "Mon-Fri: 8am - 6pm",
              action: "See calendar",
              link: "#",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 border border-yellow-700 hover:border-yellow-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-yellow-500/20"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-yellow-900/20 mr-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-yellow-400">
                  {item.title}
                </h3>
              </div>
              <p className="text-yellow-100 mb-5">{item.info}</p>
              <a
                href={item.link}
                className="inline-flex items-center text-yellow-400 font-medium group hover:text-yellow-300 transition-colors"
              >
                {item.action}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
              Send Us a Message
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-yellow-100 max-w-2xl mx-auto">
              Have questions or special requests? Fill out the form below and
              our team will get back to you within 24 hours.
            </p>
          </div>

          <form className="space-y-6 bg-gray-900 p-8 md:p-10 rounded-xl border border-yellow-700 shadow-lg shadow-yellow-500/20">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-medium text-yellow-100">
                  Your Name
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-yellow-500" />
                  <input
                    type="text"
                    className="w-full bg-gray-800 border border-yellow-700 rounded-lg p-3 pl-10 text-yellow-50 focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-yellow-200"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 font-medium text-yellow-100">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-yellow-500" />
                  <input
                    type="email"
                    className="w-full bg-gray-800 border border-yellow-700 rounded-lg p-3 pl-10 text-yellow-50 focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-yellow-200"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block mb-2 font-medium text-yellow-100">
                Subject
              </label>
              <div className="relative">
                <Send className="absolute left-3 top-3 h-5 w-5 text-yellow-500" />
                <input
                  type="text"
                  className="w-full bg-gray-800 border border-yellow-700 rounded-lg p-3 pl-10 text-yellow-50 focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-yellow-200"
                  placeholder="How can we help?"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 font-medium text-yellow-100">
                Your Message
              </label>
              <div className="relative">
                <Send className="absolute left-3 top-3 h-5 w-5 text-yellow-500" />
                <textarea
                  className="w-full bg-gray-800 border border-yellow-700 rounded-lg p-3 pl-10 text-yellow-50 focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-yellow-200 h-40"
                  placeholder="Tell us about your inquiry..."
                  required
                ></textarea>
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="consent"
                className="w-4 h-4 text-yellow-600 bg-gray-800 border-yellow-700 rounded focus:ring-yellow-500"
                required
              />
              <label htmlFor="consent" className="ml-2 text-sm text-yellow-100">
                I agree to the privacy policy and terms of service
              </label>
            </div>

            <button
              type="submit"
              className="w-full group relative overflow-hidden bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-black font-bold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-yellow-500/20"
            >
              <span className="relative z-10 flex items-center justify-center">
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-yellow-400">
              Our Locations
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-xl overflow-hidden border border-yellow-700 hover:border-yellow-500 transition-colors">
              <div className="h-64 bg-gray-800 flex items-center justify-center">
                <MapPin className="w-12 h-12 text-yellow-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-yellow-400">
                  Lagos Office
                </h3>
                <p className="text-yellow-100 mb-4">
                  24a Bashorun R.I. Okusanya Ave, Lekki Phase 1, Lagos 105102,
                  Lagos
                </p>
                <a
                  href="#"
                  className="text-yellow-400 font-medium inline-flex items-center hover:text-yellow-300 transition-colors"
                >
                  Get Directions <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
