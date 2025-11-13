"use client";
import Link from "next/link";
import { 
  Home, 
  ChefHat, 
  Baby, 
  Scissors, 
  Wrench, 
  ShieldCheck, 
  Clock, 
  Star, 
  Users, 
  BadgeCheck,
  ArrowRight,
  Sparkles
} from "lucide-react";

export function DomesticStaffPromo() {
  const staffTypes = [
    {
      icon: <Home className="h-5 w-5" />,
      title: "House Cleaners",
      description: "Professional cleaning services",
    },
    {
      icon: <ChefHat className="h-5 w-5" />,
      title: "Chefs",
      description: "Experienced culinary professionals",
    },
    {
      icon: <Baby className="h-5 w-5" />,
      title: "Nannies",
      description: "Caring childcare providers",
    },
    {
      icon: <Scissors className="h-5 w-5" />,
      title: "Tailors",
      description: "Skilled fashion experts",
    },
    {
      icon: <Wrench className="h-5 w-5" />,
      title: "Plumbers",
      description: "Licensed professionals",
    },
  ];

  return (
    <section className="min-h-[90vh] bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 sm:px-12 md:px-16 lg:px-24 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="h-8 w-8 text-yellow-400" />
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-300">
                Domestic Staff
              </span>
              {" "}
              <span className="text-white">Recruitment</span>
            </h2>
          </div>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
            Find trusted, vetted domestic staff for your home
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            From house cleaners to nannies, chefs to tailors - we connect you with qualified professionals
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl sm:text-4xl font-bold text-white">
                Professional Domestic Staff
                <span className="block text-yellow-400 mt-2">Ready to Serve</span>
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our comprehensive vetting process ensures you get reliable, experienced 
                domestic staff who meet the highest standards of professionalism and trustworthiness.
              </p>
            </div>

            {/* Value Propositions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                {
                  icon: <ShieldCheck className="h-5 w-5" />,
                  text: "Fully Vetted & Background Checked",
                },
                {
                  icon: <Star className="h-5 w-5" />,
                  text: "Experienced Professionals",
                },
                { 
                  icon: <Clock className="h-5 w-5" />, 
                  text: "Flexible Work Schedules" 
                },
                {
                  icon: <BadgeCheck className="h-5 w-5" />,
                  text: "Live In or Live Out Options",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-yellow-500/20 p-2 rounded-full">
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-300">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link
                href="/service-request"
                className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-yellow-500/30 flex items-center justify-center gap-2"
              >
                <Users className="h-5 w-5" />
                Request Domestic Staff
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/faq"
                className="px-8 py-4 border border-yellow-500 text-yellow-300 font-bold rounded-lg hover:bg-yellow-500/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Learn More
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-8 border-t border-gray-800">
              <div className="space-y-1">
                <p className="text-3xl font-bold text-yellow-400">500+</p>
                <p className="text-sm text-gray-400">Staff Members</p>
              </div>
              <div className="w-px h-12 bg-gray-700"></div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-yellow-400">1000+</p>
                <p className="text-sm text-gray-400">Happy Families</p>
              </div>
              <div className="w-px h-12 bg-gray-700"></div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-yellow-400">4.9/5</p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Staff Types Grid */}
          <div className="grid grid-cols-2 gap-4">
            {staffTypes.map((staff, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 hover:-translate-y-1"
              >
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30 mb-4 group-hover:from-yellow-500/30 group-hover:to-yellow-600/30 transition-colors">
                  <div className="text-yellow-400">
                    {staff.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                  {staff.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {staff.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-yellow-500/20 mb-4">
                <ShieldCheck className="h-8 w-8 text-yellow-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Verified & Trusted</h4>
              <p className="text-gray-300 text-sm">
                All staff undergo comprehensive background checks and verification
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-yellow-500/20 mb-4">
                <Clock className="h-8 w-8 text-yellow-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Flexible Options</h4>
              <p className="text-gray-300 text-sm">
                Choose from live-in or live-out arrangements with flexible schedules
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-yellow-500/20 mb-4">
                <Star className="h-8 w-8 text-yellow-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Quality Guaranteed</h4>
              <p className="text-gray-300 text-sm">
                We only work with experienced, professional domestic staff
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

