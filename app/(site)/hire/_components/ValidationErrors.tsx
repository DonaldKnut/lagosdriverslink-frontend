import { AlertCircle } from "lucide-react";

interface ValidationErrorsProps {
  errors: string[];
}

export default function ValidationErrors({ errors }: ValidationErrorsProps) {
  if (errors.length === 0) return null;

  return (
    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-6">
      <div className="flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
        <div>
          <h4 className="text-blue-400 font-medium mb-2">
            Almost there! Please complete these fields:
          </h4>
          <ul className="space-y-1">
            {errors.map((error, index) => (
              <li key={index} className="text-blue-300 text-sm">
                • {error}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
