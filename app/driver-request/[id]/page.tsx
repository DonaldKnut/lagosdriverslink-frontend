"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { render } from "@react-email/render";
import Link from "next/link";
import {
  Car,
  User,
  Mail,
  Phone,
  MapPin,
  Pen,
  ArrowLeft,
  CheckCircle,
  Star,
  Clock,
  Shield,
  Award,
} from "lucide-react";
import { DriverRequestConfirmationEmail } from "../../../emails/DriverRequestConfirmationEmail";
import DriverRequestEmail from "../../../emails/DriverRequestEmail";
import { validateEmail, validatePhone } from "../../../lib/validators";
import { driverPlans, type DriverPlanId } from "@/lib/constants/driver-plans";

// Force dynamic rendering to disable prerendering
export const dynamic = "force-dynamic";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  additionalNotes: string;
  plan: string;
  hasAccommodation: boolean;
};

type FormErrors = Partial<Record<keyof FormData, string>> & {
  form?: string;
};

export default function DriverPlanPage() {
  const router = useRouter();
  const params = useParams();
  const planId = params.id as DriverPlanId;

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    additionalNotes: "",
    plan: planId || "daily",
    hasAccommodation: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Get plan details
  const currentPlan = driverPlans[planId] || driverPlans.daily;

  useEffect(() => {
    setFormData((prev) => ({ ...prev, plan: planId }));
  }, [planId]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSuccess(false);

    try {
      const [confirmationEmailHtml, teamEmailHtml] = await Promise.all([
        render(
          <DriverRequestConfirmationEmail
            plan={formData.plan}
            fullName={formData.fullName}
            requestId={Date.now().toString()}
          />
        ),
        render(
          <DriverRequestEmail
            fullName={formData.fullName}
            email={formData.email}
            phone={formData.phone}
            location={formData.location}
            requestDetails={formData.additionalNotes}
            plan={formData.plan}
            hasAccommodation={formData.hasAccommodation}
          />
        ),
      ]);

      const response = await fetch("/api/driver-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          confirmationEmail: { html: confirmationEmailHtml },
          teamEmail: { html: teamEmailHtml },
        }),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      setSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        additionalNotes: "",
        plan: planId,
        hasAccommodation: false,
      });

      setTimeout(() => router.push("/thank-you"), 2000);
    } catch (error) {
      setErrors({
        ...errors,
        form:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Car className="h-8 w-8" />
              <span className="text-xl font-bold">Lagos Drivers Link</span>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium hover:underline"
            >
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Plan Details */}
          <div className="lg:col-span-1 space-y-6">
            {/* Plan Card */}
            <div className="bg-gray-900 rounded-xl p-6 border border-yellow-500/20">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full mb-4">
                  <Car className="h-8 w-8 text-black" />
                </div>
                <h1 className="text-2xl font-bold text-yellow-400 mb-2">
                  {currentPlan.name}
                </h1>
                <p className="text-gray-300 text-sm mb-4">
                  {currentPlan.description}
                </p>
                <div className="text-3xl font-bold text-white mb-2">
                  {formatPrice(currentPlan.baseRate)}
                  <span className="text-sm text-gray-400 ml-1">
                    {planId === "daily" ? "/day" : "/month"}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-yellow-400 mb-3">
                  What&apos;s Included:
                </h3>
                {currentPlan.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 pt-6 border-t border-gray-700">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="flex flex-col items-center">
                    <Shield className="h-6 w-6 text-yellow-400 mb-2" />
                    <span className="text-xs text-gray-400">Verified</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Award className="h-6 w-6 text-yellow-400 mb-2" />
                    <span className="text-xs text-gray-400">Professional</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ad Space */}
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 rounded-xl p-6 border border-yellow-500/20">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                  Why Choose Us?
                </h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-center justify-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span>4.9/5 Customer Rating</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="h-4 w-4 text-yellow-400" />
                    <span>24/7 Customer Support</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Shield className="h-4 w-4 text-yellow-400" />
                    <span>Fully Insured Drivers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900 rounded-xl p-8 border border-yellow-500/20">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Book Your {currentPlan.name}
                </h2>
                <p className="text-gray-400">
                  Fill out the form below and we&apos;ll connect you with a
                  professional driver
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        required
                        aria-invalid={!!errors.fullName}
                        aria-describedby={
                          errors.fullName ? "fullName-error" : undefined
                        }
                      />
                    </div>
                    {errors.fullName && (
                      <p
                        id="fullName-error"
                        className="mt-1 text-sm text-red-400"
                      >
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        required
                        aria-invalid={!!errors.email}
                        aria-describedby={
                          errors.email ? "email-error" : undefined
                        }
                      />
                    </div>
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234 123 456 7890"
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        required
                        aria-invalid={!!errors.phone}
                        aria-describedby={
                          errors.phone ? "phone-error" : undefined
                        }
                      />
                    </div>
                    {errors.phone && (
                      <p id="phone-error" className="mt-1 text-sm text-red-400">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Location *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="Lagos, Nigeria"
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        required
                        aria-invalid={!!errors.location}
                        aria-describedby={
                          errors.location ? "location-error" : undefined
                        }
                      />
                    </div>
                    {errors.location && (
                      <p
                        id="location-error"
                        className="mt-1 text-sm text-red-400"
                      >
                        {errors.location}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="additionalNotes"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Additional Notes
                  </label>
                  <div className="relative">
                    <Pen className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <textarea
                      id="additionalNotes"
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleChange}
                      placeholder="Any specific requirements, preferred pickup times, or special instructions..."
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      rows={4}
                      aria-label="Additional notes about your driver request"
                    />
                  </div>
                </div>

                <div>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="hasAccommodation"
                      checked={formData.hasAccommodation || false}
                      onChange={handleChange}
                      className="w-4 h-4 text-yellow-500 bg-gray-800 border-gray-700 rounded focus:ring-yellow-500"
                    />
                    <span className="text-sm text-gray-300">
                      Has Accommodation for Driver
                    </span>
                  </label>
                  <p className="text-xs text-gray-400 mt-1 ml-6">
                    Check this if you have accommodation available for the driver
                  </p>
                </div>

                {errors.form && (
                  <div className="p-4 bg-red-500/20 border border-red-500/50 text-red-300 rounded-lg">
                    {errors.form}
                  </div>
                )}

                {success && (
                  <div className="p-4 bg-green-500/20 border border-green-500/50 text-green-300 rounded-lg">
                    Request submitted successfully! You&apos;ll be redirected
                    shortly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-black bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 focus:ring-offset-gray-900 transition-all duration-200 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    `Book ${currentPlan.name} - ${formatPrice(currentPlan.baseRate)}`
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

