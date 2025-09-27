"use client";

import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { FormState, FormSubmissionOptions, ValidationRule } from "./types";
import { validateField as validateFieldValue } from "./validators";

interface FormContextType {
  state: FormState;
  setFieldValue: (field: string, value: unknown) => void;
  setFieldError: (field: string, error: string) => void;
  clearFieldError: (field: string) => void;
  setSubmitting: (isSubmitting: boolean) => void;
  setTouched: (field: string, touched: boolean) => void;
  validateField: (field: string, value: unknown) => void;
  validateForm: () => boolean;
  resetForm: () => void;
  submitForm: (options: FormSubmissionOptions) => Promise<void>;
  onSubmit?: (data: FormData | Record<string, unknown>) => Promise<void>;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

type FormAction =
  | { type: "SET_FIELD_VALUE"; field: string; value: unknown }
  | { type: "SET_FIELD_ERROR"; field: string; error: string }
  | { type: "CLEAR_FIELD_ERROR"; field: string }
  | { type: "SET_SUBMITTING"; isSubmitting: boolean }
  | { type: "SET_TOUCHED"; field: string; touched: boolean }
  | { type: "RESET_FORM" }
  | { type: "SET_ERRORS"; errors: Record<string, string> };

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case "SET_FIELD_VALUE":
      return {
        ...state,
        data: { ...state.data, [action.field]: action.value },
        errors: { ...state.errors, [action.field]: "" }, // Clear error when value changes
      };

    case "SET_FIELD_ERROR":
      return {
        ...state,
        errors: { ...state.errors, [action.field]: action.error },
      };

    case "CLEAR_FIELD_ERROR":
      const remainingErrors = { ...state.errors };
      delete remainingErrors[action.field];
      return {
        ...state,
        errors: remainingErrors,
      };

    case "SET_SUBMITTING":
      return { ...state, isSubmitting: action.isSubmitting };

    case "SET_TOUCHED":
      return {
        ...state,
        touched: { ...state.touched, [action.field]: action.touched },
      };

    case "RESET_FORM":
      return {
        data: {},
        errors: {},
        isSubmitting: false,
        isValid: false,
        touched: {},
      };

    case "SET_ERRORS":
      return {
        ...state,
        errors: action.errors,
      };

    default:
      return state;
  }
}

interface FormProviderProps {
  children: ReactNode;
  initialData?: Record<string, unknown>;
  onSubmit?: (data: FormData | Record<string, unknown>) => Promise<void>;
  validationRules?: Record<string, unknown[]>;
}

export function FormProvider({
  children,
  initialData = {},
  onSubmit,
  validationRules = {},
}: FormProviderProps) {
  const [state, dispatch] = useReducer(formReducer, {
    data: initialData,
    errors: {},
    isSubmitting: false,
    isValid: false,
    touched: {},
  });

  const setFieldValue = (field: string, value: unknown) => {
    dispatch({ type: "SET_FIELD_VALUE", field, value });
  };

  const setFieldError = (field: string, error: string) => {
    dispatch({ type: "SET_FIELD_ERROR", field, error });
  };

  const clearFieldError = (field: string) => {
    dispatch({ type: "CLEAR_FIELD_ERROR", field });
  };

  const setSubmitting = (isSubmitting: boolean) => {
    dispatch({ type: "SET_SUBMITTING", isSubmitting });
  };

  const setTouched = (field: string, touched: boolean) => {
    dispatch({ type: "SET_TOUCHED", field, touched });
  };

  const validateField = (field: string, value: unknown) => {
    const rules = validationRules[field] as ValidationRule[] | undefined;
    if (!rules) return;

    const stringValue = value == null ? "" : String(value);
    const error = validateFieldValue(stringValue, rules);
    if (error) {
      setFieldError(field, error);
    } else {
      clearFieldError(field);
    }
  };

  const validateForm = (): boolean => {
    let isValid = true;
    const errors: Record<string, string> = {};

    for (const [field, rules] of Object.entries(validationRules)) {
      const value = state.data[field];
      const stringValue = value == null ? "" : String(value);
      const error = validateFieldValue(stringValue, rules as ValidationRule[]);

      if (error) {
        errors[field] = error;
        isValid = false;
      }
    }

    dispatch({ type: "SET_ERRORS", errors });
    return isValid;
  };

  const resetForm = () => {
    dispatch({ type: "RESET_FORM" });
  };

  const submitForm = async (options: FormSubmissionOptions) => {
    if (!validateForm()) {
      throw new Error("Form validation failed");
    }

    setSubmitting(true);

    try {
      const response = await fetch(options.endpoint, {
        method: options.method || "POST",
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
        body: JSON.stringify(state.data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      options.onSuccess?.(data);
    } catch (error) {
      options.onError?.(error as Error);
      throw error;
    } finally {
      setSubmitting(false);
    }
  };

  const value: FormContextType = {
    state,
    setFieldValue,
    setFieldError,
    clearFieldError,
    setSubmitting,
    setTouched,
    validateField,
    validateForm,
    resetForm,
    submitForm,
    onSubmit,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

export function useFormContext(): FormContextType {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
}
