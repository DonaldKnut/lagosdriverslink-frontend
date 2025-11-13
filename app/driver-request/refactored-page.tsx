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
import { FormContainer } from "@/components/forms/FormContainer";
import { FormField } from "@/components/forms/FormField";
import { FormSubmitButton } from "@/components/forms/FormSubmitButton";
import { useFormSubmission } from "@/lib/forms/useFormSubmission";
import { useToast } from "@/lib/hooks/useToast";
import { formValidators } from "@/lib/forms/validators";
import type { FormDataLike } from "@/lib/forms";
import { driverPlans } from "@/lib/constants/driver-plans";
import { apiEndpoints } from "@/lib/constants/api-endpoints";

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

export default function RefactoredDriverRequestForm() {
  const router = useRouter();
  const { trigger } = useToast();
  const { submitForm } = useFormSubmission();
  const [plan, setPlan] = useState("daily");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const selectedPlan = searchParams.get("plan");
    if (selectedPlan && selectedPlan in driverPlans) {
      setPlan(selectedPlan);
    }
  }, []);

  const initialData: FormData = {
    fullName: "",
    email: "",
    phone: "",
    location: "",
    additionalNotes: "",
    plan: plan,
    hasAccommodation: false,
  };

  const validationRules = {
    fullName: formValidators.fullName,
    email: formValidators.email,
    phone: formValidators.phone,
    location: formValidators.location,
  };

  const handleSubmit = async (data: FormDataLike) => {
    try {
      // Normalize data to handle both FormData and Record types
      const formData = data instanceof FormData ? data : new FormData();

      // If it's a Record, populate FormData
      if (!(data instanceof FormData)) {
        Object.entries(data as Record<string, unknown>).forEach(
          ([key, value]) => {
            if (value !== null && value !== undefined) {
              formData.append(key, String(value));
            }
          }
        );
      }

      // Generate email templates
      const [confirmationEmailHtml, teamEmailHtml] = await Promise.all([
        render(
          <DriverRequestConfirmationEmail
            plan={formData.get("plan") as string}
            fullName={formData.get("fullName") as string}
            requestId={Date.now().toString()}
          />
        ),
        render(
          <DriverRequestEmail
            fullName={formData.get("fullName") as string}
            email={formData.get("email") as string}
            phone={formData.get("phone") as string}
            location={formData.get("location") as string}
            requestDetails={formData.get("additionalNotes") as string}
            plan={formData.get("plan") as string}
            hasAccommodation={formData.get("hasAccommodation") === "true"}
          />
        ),
      ]);

      // Submit using the new API service
      await submitForm({
        endpoint: apiEndpoints.driverRequest,
        transformData: (data) => ({
          ...(data as Record<string, unknown>),
          confirmationEmail: { html: confirmationEmailHtml },
          teamEmail: { html: teamEmailHtml },
        }),
        onSuccess: () => {
          setSuccess(true);
          trigger("Request submitted successfully!", "success");
          setTimeout(() => router.push("/thank-you"), 2000);
        },
        onError: (error) => {
          trigger(error.message || "An unexpected error occurred", "error");
        },
      });
    } catch (error) {
      trigger(
        error instanceof Error
          ? error.message
          : "An unexpected error occurred. Please try again.",
        "error"
      );
    }
  };

  const planOptions = Object.values(driverPlans).map((plan) => ({
    value: plan.id,
    label: plan.name,
  }));

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
          Hire a Professional Driver - Get a Pro Driver in Lagos
        </h1>
        <p className="text-yellow-200 mt-1 text-sm">
          Professional drivers, hire a professional driver, get a pro driver in
          Lagos. Recruit professional drivers and hire a pro driver in Lagos.
          Fill out the details to request your {plan} driver service
        </p>
      </div>

      <FormContainer
        initialData={initialData}
        validationRules={validationRules}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <FormField
          name="fullName"
          label="Full Name"
          type="text"
          placeholder="John Doe"
          required
          icon={User}
        />

        <FormField
          name="email"
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          required
          icon={Mail}
        />

        <FormField
          name="phone"
          label="Phone Number"
          type="tel"
          placeholder="+234 123 456 7890"
          required
          icon={Phone}
        />

        <FormField
          name="location"
          label="Location"
          type="text"
          placeholder="Lagos, Nigeria"
          required
          icon={MapPin}
        />

        <FormField
          name="plan"
          label="Selected Plan"
          type="select"
          options={planOptions}
          disabled
          icon={List}
        />

        <FormField
          name="additionalNotes"
          label="Additional Notes"
          type="textarea"
          placeholder="Any specific requirements..."
          icon={Pen}
        />

        <div>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              name="hasAccommodation"
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

        <FormSubmitButton
          className="w-full py-3 px-4 rounded-lg font-semibold text-black bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 focus:ring-offset-gray-900 transition-all duration-200"
          loadingText="Submitting..."
        >
          Submit Request
        </FormSubmitButton>

        {success && (
          <div className="p-4 bg-green-500/20 text-green-300 rounded-lg text-center">
            Request submitted successfully! You&apos;ll be redirected shortly.
          </div>
        )}
      </FormContainer>
    </div>
  );
}
