import { ValidationRule } from "./types";

export const commonValidators = {
  required: (value: string): string | null => {
    if (!value?.trim()) return "This field is required";
    return null;
  },

  email: (value: string): string | null => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value && !emailRegex.test(value)) {
      return "Please enter a valid email address";
    }
    return null;
  },

  phone: (value: string): string | null => {
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
    if (value && !phoneRegex.test(value)) {
      return "Please enter a valid phone number";
    }
    return null;
  },

  minLength:
    (min: number) =>
    (value: string): string | null => {
      if (value && value.length < min) {
        return `Must be at least ${min} characters`;
      }
      return null;
    },

  maxLength:
    (max: number) =>
    (value: string): string | null => {
      if (value && value.length > max) {
        return `Must be no more than ${max} characters`;
      }
      return null;
    },

  pattern:
    (regex: RegExp, message: string) =>
    (value: string): string | null => {
      if (value && !regex.test(value)) {
        return message;
      }
      return null;
    },
};

export const formValidators = {
  // Personal information validators
  fullName: [
    commonValidators.required,
    commonValidators.minLength(2),
    commonValidators.maxLength(100),
  ],

  email: [commonValidators.required, commonValidators.email],

  phone: [commonValidators.required, commonValidators.phone],

  // Driver-specific validators
  driverLicense: [
    commonValidators.required,
    commonValidators.pattern(/^[A-Z0-9]{8,15}$/, "Invalid license format"),
  ],

  // Location validators
  location: [
    commonValidators.required,
    commonValidators.minLength(3),
    commonValidators.maxLength(100),
  ],

  // Password validators
  password: [
    commonValidators.required,
    commonValidators.minLength(8),
    commonValidators.pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
  ],

  // Confirm password validator
  confirmPassword: (originalPassword: string) => [
    commonValidators.required,
    (value: string): string | null => {
      if (value !== originalPassword) {
        return "Passwords do not match";
      }
      return null;
    },
  ],
};

export function validateField(
  value: string,
  rules: ValidationRule[]
): string | null {
  for (const rule of rules) {
    let error: string | null = null;

    if (rule.required && !value?.trim()) {
      error = "This field is required";
    } else if (rule.minLength && value && value.length < rule.minLength) {
      error = `Must be at least ${rule.minLength} characters`;
    } else if (rule.maxLength && value && value.length > rule.maxLength) {
      error = `Must be no more than ${rule.maxLength} characters`;
    } else if (rule.pattern && value && !rule.pattern.test(value)) {
      error = "Invalid format";
    } else if (rule.custom) {
      error = rule.custom(value);
    }

    if (error) return error;
  }

  return null;
}


