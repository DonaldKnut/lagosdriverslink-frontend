import Link from "next/link";
import { Home, ArrowLeft, Search, Phone, Car } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header spacing */}
      <div className="h-[88px]"></div>
      
      {/* Main 404 Content */}
      <div className="flex-1 flex items-center justify-center px-6 sm:px-12 md:px-16 lg:px-24 py-12">
        <div className="max-w-4xl mx-auto text-center">
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
              Oops! Page Not Found
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              The page you&apos;re looking for seems to have taken a wrong turn. 
              Don&apos;t worry, our professional drivers are here to help you get back on track!
            </p>
          </div>

          {/* Illustration */}
          <div className="mb-12 relative">
            <div className="relative w-64 h-64 mx-auto">
              {/* Background decorative elements */}
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-yellow-400 rounded-full mix-blend-multiply opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-yellow-600 rounded-full mix-blend-multiply opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
              
              {/* Main illustration */}
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center">
                  <Car className="w-24 h-24 text-yellow-400 mx-auto mb-4 animate-bounce" />
                  <div className="text-yellow-300 text-sm font-medium">Lost Driver</div>
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
              Go Home
            </Link>
            
            <Link
              href="/hire"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-yellow-500 text-yellow-400 rounded-lg font-semibold text-lg hover:bg-yellow-500/10 transition-all duration-300 transform hover:scale-105"
            >
              <Car className="w-5 h-5 mr-2" />
              Hire a Driver
            </Link>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Link
              href="/contact"
              className="group p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <Phone className="w-8 h-8 text-yellow-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">Contact Us</h3>
              <p className="text-sm text-gray-400">Get help from our support team</p>
            </Link>

            <Link
              href="/recruit"
              className="group p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <Search className="w-8 h-8 text-yellow-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">Find Drivers</h3>
              <p className="text-sm text-gray-400">Browse our driver network</p>
            </Link>

            <Link
              href="/about"
              className="group p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <ArrowLeft className="w-8 h-8 text-yellow-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">About Us</h3>
              <p className="text-sm text-gray-400">Learn more about our services</p>
            </Link>
          </div>

          {/* Fun Message */}
          <div className="mt-12 p-6 bg-gradient-to-r from-yellow-900/20 to-amber-900/20 rounded-xl border border-yellow-500/20">
            <p className="text-yellow-200 text-sm italic">
              &ldquo;Even the best drivers sometimes take a wrong turn. The important thing is knowing how to get back on the right road!&rdquo; 
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

