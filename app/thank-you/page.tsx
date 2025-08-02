"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { motion, Variants } from "framer-motion";
import { CheckCircle, ChevronRight, Home } from "lucide-react";
import Link from "next/link";

// Force dynamic rendering to disable prerendering
export const dynamic = "force-dynamic";

// Define animation variants for Framer Motion
const fadeInAnimation: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const pulseAnimation: Variants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
    },
  },
};

export default function ThankYouPage() {
  const router = useRouter();
  const session = useSession();
  const authenticationStatus = session?.status ?? "loading";

  const handleDashboardClick = (event: React.MouseEvent) => {
    if (authenticationStatus !== "authenticated") {
      event.preventDefault();
      router.push(
        `/auth/login?callbackUrl=${encodeURIComponent("/dashboard")}`
      );
    }
  };

  if (authenticationStatus === "loading") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
        <div className="animate-pulse text-yellow-400 text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center p-4">
      <motion.div
        className="w-full max-w-4xl bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-gray-700/30"
        initial="hidden"
        animate="visible"
        variants={fadeInAnimation}
      >
        <div className="grid md:grid-cols-2">
          {/* Confirmation Section */}
          <div className="p-8 md:p-12 flex flex-col items-center justify-center text-center">
            <motion.div className="relative mb-8" variants={pulseAnimation}>
              <div className="absolute inset-0 bg-yellow-400/20 rounded-full animate-ping" />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <CheckCircle className="w-24 h-24 text-yellow-400 mx-auto" />
              </motion.div>
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
              Request Confirmed!
            </h1>

            <p className="text-lg text-gray-300 mb-6 max-w-md">
              Your driver request has been received. Our team will contact you
              within 24 hours to confirm details and next steps.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs">
              <Link
                href="/"
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-500 text-black px-6 py-3 rounded-lg font-bold hover:from-yellow-600 hover:to-amber-600 transition-all shadow-lg"
              >
                <Home className="w-5 h-5" />
                Home
              </Link>
              <Link
                href="/dashboard"
                onClick={handleDashboardClick}
                className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-bold transition-all border border-gray-600"
              >
                {authenticationStatus === "authenticated" ? (
                  <>
                    Dashboard
                    <ChevronRight className="w-5 h-5" />
                  </>
                ) : (
                  "Login to Dashboard"
                )}
              </Link>
            </div>
          </div>

          {/* Next Steps Section */}
          <div className="hidden md:block bg-gradient-to-br from-yellow-900/20 to-black/70 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-10" />
            <div className="relative h-full p-8 flex flex-col justify-center">
              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                  Next Steps
                </h3>
                <div className="space-y-6 max-w-xs mx-auto">
                  {[
                    "We will verify your details and match you with the perfect driver",
                    "Our team will contact you to confirm scheduling and payment",
                    "Your driver will arrive prepared for your first service",
                  ].map((step, i) => (
                    <div className="flex items-start gap-4" key={i}>
                      <div className="bg-yellow-400 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold mt-0.5 flex-shrink-0">
                        {i + 1}
                      </div>
                      <p className="text-gray-300 text-left">{step}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="p-6 text-center border-t border-gray-700/50 bg-gray-900/20">
          <p className="text-gray-500 text-sm">
            Need immediate assistance?{" "}
            <a
              href="mailto:support@lagosdriverslink.com"
              className="text-yellow-400 hover:underline"
            >
              Contact our support team
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
