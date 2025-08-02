"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { render } from "@react-email/render";
import Link from "next/link";
import { Car, ArrowLeft } from "lucide-react";
import { DriverRequestConfirmationEmail } from "../../emails/DriverRequestConfirmationEmail";
import DriverRequestEmail from "../../emails/DriverRequestEmail";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  additionalNotes: string;
  plan: string;
}

export default function DriverRequestForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan") || "daily";

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    additionalNotes: "",
    plan,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({ ...prev, plan }));
  }, [plan]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      const [confirmationEmail, teamEmail] = await Promise.all([
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
          />
        ),
      ]);

      const response = await fetch("/api/driver-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          confirmationEmail: { html: confirmationEmail },
          teamEmail: { html: teamEmail },
        }),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      setSubmitSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        additionalNotes: "",
        plan,
      });

      setTimeout(() => router.push("/thank-you"), 2000);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "An error occurred while submitting your request. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="text-white w-full max-w-md mx-auto px-4 py-8">
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-gray-400 hover:text-amber-500 transition-colors"
          aria-label="Return to home page"
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to home
        </Link>
      </div>

      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <Car className="h-10 w-10 text-amber-500" aria-hidden="true" />
        </div>
        <h1 className="text-3xl font-extrabold text-amber-100">
          Request a Driver
        </h1>
        <p className="text-amber-200 mt-1 text-sm">
          Fill out the details to request your {plan} driver service
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Form fields would go here */}
        {/* Example field: */}
        <div>
          <label htmlFor="fullName" className="block text-sm text-gray-300">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
        </div>

        {/* Add other form fields similarly */}

        {submitError && (
          <div className="p-4 bg-red-500/20 text-red-300 rounded-lg text-center">
            {submitError}
          </div>
        )}

        {submitSuccess && (
          <div className="p-4 bg-green-500/20 text-green-300 rounded-lg text-center">
            Request submitted successfully! You&apos;ll be redirected shortly.
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-4 rounded-lg font-semibold text-black bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 focus:ring-offset-gray-900 transition-all duration-200 ${
            isSubmitting ? "opacity-70 cursor-not-allowed" : ""
          }`}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-amber-900"
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
