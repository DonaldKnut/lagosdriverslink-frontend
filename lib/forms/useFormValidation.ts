import { useCallback } from "react";
import { useFormContext } from "./FormProvider";
import { validateField } from "./validators";
import type { ValidationRule } from "./types";

export function useFormValidation() {
  const { state, setFieldError, clearFieldError } = useFormContext();

  const validateFieldValue = useCallback(
    (fieldName: string, value: unknown, rules: ValidationRule[]) => {
      const stringValue = value == null ? "" : String(value);
      const error = validateField(stringValue, rules);
      if (error) {
        setFieldError(fieldName, error);
      } else {
        clearFieldError(fieldName);
      }
      return error === null;
    },
    [setFieldError, clearFieldError]
  );

  const validateAllFields = useCallback(
    (validationRules: Record<string, ValidationRule[]>) => {
      let isValid = true;
      const errors: Record<string, string> = {};

      for (const fieldName of Object.keys(validationRules)) {
        const rules = validationRules[fieldName] as ValidationRule[];
        const value = state.data[fieldName];
        const stringValue = value == null ? "" : String(value);
        const error = validateField(stringValue, rules);
        if (error) {
          errors[fieldName] = error;
          isValid = false;
        }
      }

      // Update all errors at once
      Object.entries(errors).forEach(([field, error]) => {
        setFieldError(field, error);
      });

      // Clear errors for valid fields
      Object.keys(state.data).forEach((field) => {
        if (!errors[field]) {
          clearFieldError(field);
        }
      });

      return isValid;
    },
    [state.data, setFieldError, clearFieldError]
  );

  const getFieldError = useCallback(
    (fieldName: string) => {
      return state.errors[fieldName] || null;
    },
    [state.errors]
  );

  const hasFieldError = useCallback(
    (fieldName: string) => {
      return !!state.errors[fieldName];
    },
    [state.errors]
  );

  const isFieldTouched = useCallback(
    (fieldName: string) => {
      return !!state.touched[fieldName];
    },
    [state.touched]
  );

  const shouldShowError = useCallback(
    (fieldName: string) => {
      return isFieldTouched(fieldName) && hasFieldError(fieldName);
    },
    [isFieldTouched, hasFieldError]
  );

  return {
    validateField: validateFieldValue,
    validateAllFields,
    getFieldError,
    hasFieldError,
    isFieldTouched,
    shouldShowError,
    errors: state.errors,
    isValid: Object.keys(state.errors).length === 0,
  };
}
