import Link from "next/link";
import { Home, ArrowLeft, Search, Phone, Car, MapPin, Users } from "lucide-react";

export default function SiteNotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header spacing */}
      <div className="h-[88px]"></div>
      
      {/* Main 404 Content */}
      <div className="flex-1 flex items-center justify-center px-6 sm:px-12 md:px-16 lg:px-24 py-12">
        <div className="max-w-5xl mx-auto text-center">
          {/* 404 Number with Animation */}
          <div className="mb-8">
            <h1 className="text-8xl sm:text-9xl md:text-[12rem] font-bold leading-none">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
                404
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 to-yellow-400 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Error Message */}
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-yellow-100">
              Lost in Lagos?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Looks like you&apos;ve taken a wrong turn! Don&apos;t worry, our professional drivers 
              know every route in Lagos. Let us help you get back on track.
            </p>
          </div>

          {/* Illustration */}
          <div className="mb-12 relative">
            <div className="relative w-80 h-80 mx-auto">
              {/* Background decorative elements */}
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-yellow-400 rounded-full mix-blend-multiply opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-yellow-600 rounded-full mix-blend-multiply opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-yellow-500 rounded-full mix-blend-multiply opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
              
              {/* Main illustration */}
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="relative">
                    <Car className="w-32 h-32 text-yellow-400 mx-auto mb-4 animate-bounce" />
                    <MapPin className="w-8 h-8 text-red-400 absolute -top-2 -right-2 animate-ping" />
                  </div>
                  <div className="text-yellow-300 text-lg font-medium">Lost Driver in Lagos</div>
                  <div className="text-gray-400 text-sm mt-1">But we know the way!</div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-lg font-semibold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50 transform hover:scale-105"
            >
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            
            <Link
              href="/hire"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-yellow-500 text-yellow-400 rounded-lg font-semibold text-lg hover:bg-yellow-500/10 transition-all duration-300 transform hover:scale-105"
            >
              <Car className="w-5 h-5 mr-2" />
              Hire a Driver
            </Link>
          </div>

          {/* Popular Pages Grid */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-yellow-100 mb-8">Popular Destinations</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <Link
                href="/hire"
                className="group p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                <Car className="w-8 h-8 text-yellow-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-semibold text-white mb-2">Hire Drivers</h4>
                <p className="text-sm text-gray-400">Book professional drivers</p>
              </Link>

              <Link
                href="/recruit"
                className="group p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                <Users className="w-8 h-8 text-yellow-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-semibold text-white mb-2">Recruit</h4>
                <p className="text-sm text-gray-400">Join our driver network</p>
              </Link>

              <Link
                href="/contact"
                className="group p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                <Phone className="w-8 h-8 text-yellow-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-semibold text-white mb-2">Contact</h4>
                <p className="text-sm text-gray-400">Get in touch with us</p>
              </Link>

              <Link
                href="/corporate"
                className="group p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                <Search className="w-8 h-8 text-yellow-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-semibold text-white mb-2">Corporate</h4>
                <p className="text-sm text-gray-400">Business solutions</p>
              </Link>
            </div>
          </div>

          {/* Help Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-gradient-to-r from-yellow-900/20 to-amber-900/20 rounded-xl border border-yellow-500/20">
              <h4 className="text-xl font-bold text-yellow-200 mb-3">Need Help?</h4>
              <p className="text-yellow-100 text-sm mb-4">
                Our support team is available 24/7 to help you find what you&apos;re looking for.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-yellow-300 hover:text-yellow-200 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                Contact Support
              </Link>
            </div>

            <div className="p-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-xl border border-gray-700">
              <h4 className="text-xl font-bold text-white mb-3">Quick Navigation</h4>
              <p className="text-gray-300 text-sm mb-4">
                Use our main navigation to find the page you&apos;re looking for.
              </p>
              <Link
                href="/"
                className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Homepage
              </Link>
            </div>
          </div>

          {/* Fun Message */}
          <div className="mt-12 p-6 bg-gradient-to-r from-yellow-900/20 to-amber-900/20 rounded-xl border border-yellow-500/20">
            <p className="text-yellow-200 text-sm italic">
              &ldquo;In Lagos, every wrong turn is just an opportunity to discover a new route. 
              Our drivers know all the shortcuts!&rdquo; 
              <span className="block mt-2 text-yellow-300 font-medium">- Lagos Drivers Link Team</span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer spacing */}
      <div className="h-20"></div>
    </div>
  );
}

