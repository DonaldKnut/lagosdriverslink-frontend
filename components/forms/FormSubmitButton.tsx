"use client";

import React from "react";
import { useFormContext } from "@/lib/forms";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface FormSubmitButtonProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  loadingText?: string;
}

export function FormSubmitButton({
  children,
  className,
  disabled = false,
  loadingText = "Submitting...",
}: FormSubmitButtonProps) {
  const { state } = useFormContext();

  return (
    <Button
      type="submit"
      disabled={state.isSubmitting || disabled}
      className={className}
    >
      {state.isSubmitting ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {loadingText}
        </>
      ) : (
        children
      )}
    </Button>
  );
}


