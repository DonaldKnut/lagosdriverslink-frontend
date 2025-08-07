"use client";

import { useState, useEffect, useMemo } from "react";
import { CheckCircle, SendHorizontal } from "lucide-react";
import PersonalDetailsForm from "@/app/components/PersonalDetailsForm";
import DriverRequirementsForm from "@/app/components/DriverRequirementsForm";
import VehicleDetailsForm from "@/app/components/VehicleDetailsForm";
import AddressInformationForm from "@/app/components/AddressInformationForm";
import FormNavigation from "./_components/FormNavigation";
import ValidationErrors from "./_components/ValidationErrors";
import useFormData, { FormDataType } from "./_components/useFormData";
import { getSectionStatus } from "./_components/formValidation";

type FormSection = "personal" | "driver" | "vehicle" | "address";

const salaryRates = {
  weekdays: 155000,
  weekdaysSaturday: 175000,
  fullWeek: 200000,
  shift: 30000,
};

export default function HireDriverPage() {
  const [activeSection, setActiveSection] = useState<FormSection>("personal");
  const { formData, handleInputChange } = useFormData();
  const { isSubmitted, isLoading, handleFormSubmit } = useFormSubmission();

  // Get validation status for current section
  const sectionStatus = getSectionStatus(formData);
  const currentSectionValidation = sectionStatus[activeSection];

  const formSections: FormSection[] = useMemo(
    () => ["personal", "driver", "vehicle", "address"],
    []
  );

  // Auto-advance to next section when current section is completed
  useEffect(() => {
    if (currentSectionValidation.isValid && activeSection !== "address") {
      const currentIndex = formSections.findIndex(
        (section) => section === activeSection
      );
      if (currentIndex < formSections.length - 1) {
        // Add a small delay for better UX
        const timer = setTimeout(() => {
          setActiveSection(formSections[currentIndex + 1]);
        }, 500);
        return () => clearTimeout(timer);
      }
    }
  }, [currentSectionValidation.isValid, activeSection, formSections]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-zinc-900 to-black text-white py-24 px-6 sm:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
            Professional Driver Request Form
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 mx-auto mb-6 rounded-full" />
          <p className="text-yellow-200 max-w-2xl mx-auto text-lg mb-8">
            Complete this form to get matched with a vetted professional driver
            within 24 hours
          </p>

          {/* Progress indicator */}
          <div className="max-w-md mx-auto">
            <div className="flex justify-between text-sm text-yellow-300 mb-2">
              <span>Form Progress</span>
              <span>
                {Object.values(sectionStatus).filter((s) => s.isValid).length}{" "}
                of 4 sections complete
              </span>
            </div>
            <div className="w-full bg-zinc-800 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 h-2 rounded-full transition-all duration-500"
                style={{
                  width: `${(Object.values(sectionStatus).filter((s) => s.isValid).length / 4) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        </div>

        {isSubmitted ? (
          <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-black text-center p-12 rounded-xl shadow-2xl border-2 border-yellow-400">
            <CheckCircle className="w-14 h-14 mx-auto mb-6 text-yellow-800" />
            <h2 className="text-3xl font-bold mb-4">
              Request Submitted Successfully!
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              Our team will contact you within 24 hours to discuss your driver
              requirements and begin the matching process.
            </p>
          </div>
        ) : (
          <form
            onSubmit={(e) => handleFormSubmit(e, formData)}
            className="bg-zinc-900/70 rounded-xl shadow-2xl overflow-hidden border border-yellow-600/30"
          >
            <FormNavigation
              activeSection={activeSection}
              setActiveSection={setActiveSection}
              formData={formData}
            />

            <div className="p-8">
              {/* Display validation errors for current section */}
              <ValidationErrors errors={currentSectionValidation.errors} />

              {/* Success message when section is completed */}
              {currentSectionValidation.isValid &&
                activeSection !== "address" && (
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 font-medium">
                        Section completed! Moving to next section...
                      </span>
                    </div>
                  </div>
                )}

              {activeSection === "personal" && (
                <PersonalDetailsForm
                  data={formData.personalDetails}
                  handleInputChange={(event) =>
                    handleInputChange(event, "personalDetails")
                  }
                />
              )}
              {activeSection === "driver" && (
                <DriverRequirementsForm
                  data={formData.projectDetails}
                  handleInputChange={(event) =>
                    handleInputChange(event, "projectDetails")
                  }
                  salaryRates={salaryRates}
                />
              )}
              {activeSection === "vehicle" && (
                <VehicleDetailsForm
                  data={formData.vehicleDetails}
                  handleInputChange={(event) =>
                    handleInputChange(event, "vehicleDetails")
                  }
                />
              )}
              {activeSection === "address" && (
                <AddressInformationForm
                  data={formData.addressInformation}
                  handleInputChange={(event) =>
                    handleInputChange(event, "addressInformation")
                  }
                />
              )}

              <div className="flex flex-col sm:flex-row justify-between gap-4 mt-12 pt-6 border-t border-yellow-600/20">
                {activeSection !== "personal" && (
                  <button
                    type="button"
                    onClick={() => {
                      const currentIndex = formSections.findIndex(
                        (section) => section === activeSection
                      );
                      if (currentIndex > 0) {
                        setActiveSection(formSections[currentIndex - 1]);
                      }
                    }}
                    className="px-6 py-3 rounded-lg border border-yellow-600/50 text-yellow-400 hover:bg-yellow-600/10 transition-all"
                  >
                    Previous
                  </button>
                )}
                {activeSection !== "address" ? (
                  <button
                    type="button"
                    onClick={() => {
                      const currentIndex = formSections.findIndex(
                        (section) => section === activeSection
                      );
                      if (currentIndex < formSections.length - 1) {
                        setActiveSection(formSections[currentIndex + 1]);
                      }
                    }}
                    disabled={!currentSectionValidation.isValid}
                    className={`px-6 py-3 rounded-lg transition-all ml-auto ${
                      currentSectionValidation.isValid
                        ? "bg-yellow-600/80 text-white hover:bg-yellow-600"
                        : "bg-gray-600/50 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {currentSectionValidation.isValid
                      ? "Continue to Next Section"
                      : "Complete This Section"}
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isLoading || !currentSectionValidation.isValid}
                    className={`px-8 py-3 rounded-lg text-black font-bold transition-all shadow-lg flex items-center justify-center gap-2 ml-auto ${
                      currentSectionValidation.isValid && !isLoading
                        ? "bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 hover:shadow-yellow-500/30"
                        : "bg-gray-600/50 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
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
                        Processing...
                      </>
                    ) : (
                      <>
                        Submit Request
                        <SendHorizontal className="w-5 h-5" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

function useFormSubmission(): {
  isSubmitted: boolean;
  isLoading: boolean;
  handleFormSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    data: FormDataType
  ) => Promise<void>;
} {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    data: FormDataType
  ) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/hire", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error("Form submission error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return { isSubmitted, isLoading, handleFormSubmit };
}
