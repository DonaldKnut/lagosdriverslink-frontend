import { useCallback } from "react";
import { useFormContext } from "./FormProvider";

export interface SubmissionOptions {
  endpoint: string;
  method?: "POST" | "PUT" | "PATCH";
  headers?: Record<string, string>;
  transformData?: (data: unknown) => unknown;
  onSuccess?: (response: unknown) => void;
  onError?: (error: Error) => void;
}

export function useFormSubmission() {
  const { state, setSubmitting, validateForm } = useFormContext();

  const submitForm = useCallback(
    async (options: SubmissionOptions) => {
      // Validate form before submission
      if (!validateForm()) {
        throw new Error("Form validation failed");
      }

      setSubmitting(true);

      try {
        // Transform data if needed
        const dataToSubmit = options.transformData
          ? options.transformData(state.data)
          : state.data;

        const response = await fetch(options.endpoint, {
          method: options.method || "POST",
          headers: {
            "Content-Type": "application/json",
            ...options.headers,
          },
          body: JSON.stringify(dataToSubmit),
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(
            errorText || `HTTP error! status: ${response.status}`
          );
        }

        const responseData = await response.json();
        options.onSuccess?.(responseData);

        return responseData;
      } catch (error) {
        const errorInstance =
          error instanceof Error ? error : new Error(String(error));
        options.onError?.(errorInstance);
        throw errorInstance;
      } finally {
        setSubmitting(false);
      }
    },
    [state.data, setSubmitting, validateForm]
  );

  return {
    submitForm,
    isSubmitting: state.isSubmitting,
  };
}
