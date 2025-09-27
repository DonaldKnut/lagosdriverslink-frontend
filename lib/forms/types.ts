export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select" | "date";
  placeholder?: string;
  required?: boolean;
  validation?: ValidationRule;
  options?: Array<{ value: string; label: string }>;
}

export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => string | null;
}

export interface FormConfig {
  fields: FormField[];
  submitText?: string;
  validationMode?: "onChange" | "onBlur" | "onSubmit";
}

export interface FormError {
  field: string;
  message: string;
}

export interface FormState<T = Record<string, unknown>> {
  data: T;
  errors: Record<string, string>;
  isSubmitting: boolean;
  isValid: boolean;
  touched: Record<string, boolean>;
}

export interface FormSubmissionOptions {
  endpoint: string;
  method?: "POST" | "PUT" | "PATCH";
  headers?: Record<string, string>;
  onSuccess?: (data: unknown) => void;
  onError?: (error: Error) => void;
}

// Unified data type used by form submit handlers to avoid union order issues
export type FormDataLike = FormData | Record<string, unknown>;
