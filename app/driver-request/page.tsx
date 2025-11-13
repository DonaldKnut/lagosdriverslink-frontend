"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { render } from "@react-email/render";
import Link from "next/link";
import {
  Car,
  User,
  Mail,
  Phone,
  MapPin,
  List,
  Pen,
  ArrowLeft,
} from "lucide-react";
import { DriverRequestConfirmationEmail } from "../../emails/DriverRequestConfirmationEmail";
import DriverRequestEmail from "../../emails/DriverRequestEmail";
import { validateEmail, validatePhone } from "../../lib/validators";

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

export default function DriverRequestForm() {
  const router = useRouter();
  const [plan, setPlan] = useState("daily");

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const selectedPlan = searchParams.get("plan");
    if (selectedPlan) {
      setPlan(selectedPlan);
    }
  }, []);

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    additionalNotes: "",
    plan: "daily",
    hasAccommodation: false,
  });

  useEffect(() => {
    setFormData((prev) => ({ ...prev, plan }));
  }, [plan]);

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

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
        const errorData = await response.json().catch(() => ({}));
        const errorMessage = errorData.error || "Failed to submit request";
        throw new Error(errorMessage);
      }

      const responseData = await response.json();
      setSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        additionalNotes: "",
        plan,
        hasAccommodation: false,
      });

      // Build URL with response data
      const params = new URLSearchParams({
        success: "true",
        ...(responseData.requestId && { requestId: responseData.requestId }),
        ...(responseData.processingTime && {
          processingTime: responseData.processingTime,
        }),
      });

      setTimeout(() => router.push(`/thank-you?${params.toString()}`), 2000);
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "An unexpected error occurred. Please try again.";

      setErrors({
        ...errors,
        form: errorMessage,
      });

      // Navigate to thank-you page with error info
      const params = new URLSearchParams({
        success: "false",
        error: errorMessage,
      });
      setTimeout(() => router.push(`/thank-you?${params.toString()}`), 2000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="text-white w-full max-w-md mx-auto px-4 py-8">
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-gray-400 hover:text-yellow-500 transition-colors"
          aria-label="Return to home page"
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to home
        </Link>
      </div>

      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <Car className="h-10 w-10 text-yellow-500" aria-hidden="true" />
        </div>
        <h1 className="text-3xl font-extrabold text-yellow-100">
          Hire a Pro Driver in Lagos
        </h1>
        <p className="text-yellow-200 mt-1 text-sm">
          Pre-vetted professionals for all driving needs. Choose your preferred
          plan below or use the general form.
        </p>
      </div>

      {/* Plan Selection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Link
          href="/driver-request/daily"
          className="block p-4 bg-gray-800 border border-gray-700 rounded-lg hover:border-yellow-500 transition-colors"
        >
          <h3 className="text-lg font-semibold text-yellow-400 mb-2">
            Daily Driver
          </h3>
          <p className="text-2xl font-bold text-white mb-1">₦30,000</p>
          <p className="text-sm text-gray-400">/day</p>
          <p className="text-xs text-gray-300 mt-2">
            Perfect for one-time needs
          </p>
        </Link>

        <Link
          href="/driver-request/weekday"
          className="block p-4 bg-gray-800 border border-gray-700 rounded-lg hover:border-yellow-500 transition-colors"
        >
          <h3 className="text-lg font-semibold text-yellow-400 mb-2">
            Weekday Driver
          </h3>
          <p className="text-2xl font-bold text-white mb-1">₦175,000</p>
          <p className="text-sm text-gray-400">/month</p>
          <p className="text-xs text-gray-300 mt-2">
            Mon-Fri professional service
          </p>
        </Link>

        <Link
          href="/driver-request/weekdayPlus"
          className="block p-4 bg-gray-800 border border-gray-700 rounded-lg hover:border-yellow-500 transition-colors"
        >
          <h3 className="text-lg font-semibold text-yellow-400 mb-2">
            Weekday+ Driver
          </h3>
          <p className="text-2xl font-bold text-white mb-1">₦195,000</p>
          <p className="text-sm text-gray-400">/month</p>
          <p className="text-xs text-gray-300 mt-2">
            Mon-Sat extended coverage
          </p>
        </Link>
      </div>

      <div className="text-center mb-6">
        <p className="text-yellow-300 text-sm">
          Or use the general form below to submit your request
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-sm text-yellow-300">
            Full Name
          </label>
          <div className="relative mt-1">
            <User
              className="absolute left-3 top-3 h-5 w-5 text-yellow-500"
              aria-hidden="true"
            />
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full bg-black border border-yellow-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
            />
          </div>
          {errors.fullName && (
            <p id="fullName-error" className="mt-1 text-sm text-red-400">
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm text-yellow-300">
            Email Address
          </label>
          <div className="relative mt-1">
            <Mail
              className="absolute left-3 top-3 h-5 w-5 text-yellow-500"
              aria-hidden="true"
            />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full bg-black border border-yellow-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
          </div>
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-400">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm text-yellow-300">
            Phone Number
          </label>
          <div className="relative mt-1">
            <Phone
              className="absolute left-3 top-3 h-5 w-5 text-yellow-500"
              aria-hidden="true"
            />
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+234 123 456 7890"
              className="w-full bg-black border border-yellow-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
          </div>
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-sm text-red-400">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="location" className="block text-sm text-yellow-300">
            Location
          </label>
          <div className="relative mt-1">
            <MapPin
              className="absolute left-3 top-3 h-5 w-5 text-yellow-500"
              aria-hidden="true"
            />
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Lagos, Nigeria"
              className="w-full bg-black border border-yellow-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
              aria-invalid={!!errors.location}
              aria-describedby={errors.location ? "location-error" : undefined}
            />
          </div>
          {errors.location && (
            <p id="location-error" className="mt-1 text-sm text-red-400">
              {errors.location}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="plan" className="block text-sm text-yellow-300">
            Selected Plan
          </label>
          <div className="relative mt-1">
            <List
              className="absolute left-3 top-3 h-5 w-5 text-yellow-500"
              aria-hidden="true"
            />
            <select
              id="plan"
              name="plan"
              value={formData.plan}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 appearance-none"
              aria-label="Selected driver plan"
            >
              <option value="daily">Daily Driver Service - ₦30,000/day</option>
              <option value="weekday">
                Weekday Driver (Mon-Fri) - ₦175,000/month
              </option>
              <option value="weekdayPlus">
                Weekday+ Driver (Mon-Sat) - ₦195,000/month
              </option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="additionalNotes"
            className="block text-sm text-yellow-300"
          >
            Additional Notes
          </label>
          <div className="relative mt-1">
            <Pen
              className="absolute left-3 top-3 h-5 w-5 text-yellow-500"
              aria-hidden="true"
            />
            <textarea
              id="additionalNotes"
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleChange}
              placeholder="Any specific requirements..."
              className="w-full bg-black border border-yellow-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
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
            <span className="text-sm text-yellow-300">
              Has Accommodation for Driver
            </span>
          </label>
          <p className="text-xs text-gray-400 mt-1 ml-6">
            Check this if you have accommodation available for the driver
          </p>
        </div>

        {errors.form && (
          <div className="p-4 bg-red-500/20 text-red-300 rounded-lg text-center">
            {errors.form}
          </div>
        )}

        {success && (
          <div className="p-4 bg-green-500/20 text-green-300 rounded-lg text-center">
            Request submitted successfully! You&apos;ll be redirected shortly.
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-4 rounded-lg font-semibold text-black bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 focus:ring-offset-gray-900 transition-all duration-200 ${
            isSubmitting ? "opacity-70 cursor-not-allowed" : ""
          }`}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-yellow-900"
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
            "Submit Request"
          )}
        </button>
      </form>
    </div>
  );
}
