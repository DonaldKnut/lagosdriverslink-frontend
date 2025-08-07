import { Car, Home, User, CheckCircle, Lock } from "lucide-react";
import { JSX } from "react";
import { FormDataType } from "./useFormData";
import { canAccessSection, getSectionStatus } from "./formValidation";

type FormSection = "personal" | "driver" | "vehicle" | "address";

interface FormNavigationProps {
  activeSection: FormSection;
  setActiveSection: (section: FormSection) => void;
  formData: FormDataType;
}

const formSections: {
  id: FormSection;
  label: string;
  icon: JSX.Element;
}[] = [
  { id: "personal", label: "Personal Details", icon: <User size={18} /> },
  { id: "driver", label: "Project Details", icon: <User size={18} /> },
  { id: "vehicle", label: "Vehicle Details", icon: <Car size={18} /> },
  { id: "address", label: "Address Information", icon: <Home size={18} /> },
];

export default function FormNavigation({
  activeSection,
  setActiveSection,
  formData,
}: FormNavigationProps) {
  const sectionStatus = getSectionStatus(formData);

  return (
    <div className="grid grid-cols-4 border-b border-yellow-600/20">
      {formSections.map((section) => {
        const isAccessible = canAccessSection(
          section.id,
          formData,
          activeSection
        );
        const isCompleted =
          sectionStatus[section.id as keyof typeof sectionStatus].isValid;
        const isActive = activeSection === section.id;

        return (
          <button
            key={section.id}
            type="button"
            onClick={() => {
              if (isAccessible) {
                setActiveSection(section.id);
              }
            }}
            disabled={!isAccessible}
            className={`flex items-center justify-center gap-2 py-4 px-2 text-sm font-medium transition-all relative ${
              isActive
                ? "bg-yellow-600/20 text-yellow-400"
                : isCompleted
                  ? "text-green-400 hover:bg-zinc-800"
                  : isAccessible
                    ? "text-yellow-200 hover:bg-zinc-800"
                    : "text-gray-500 cursor-not-allowed opacity-50"
            }`}
          >
            {isCompleted && !isActive && (
              <CheckCircle className="w-4 h-4 text-green-400" />
            )}
            {!isAccessible && !isCompleted && (
              <Lock className="w-4 h-4 text-gray-500" />
            )}
            {section.icon}
            <span className="hidden sm:inline">{section.label}</span>

            {/* Progress indicator */}
            {isCompleted && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-500"></div>
            )}
          </button>
        );
      })}
    </div>
  );
}
