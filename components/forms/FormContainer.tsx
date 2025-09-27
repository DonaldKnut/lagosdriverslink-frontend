"use client";

import React from "react";
import { FormProvider } from "@/lib/forms";
import type { FormDataLike } from "@/lib/forms";

interface FormContainerProps {
  children: React.ReactNode;
  initialData?: Record<string, unknown>;
  validationRules?: Record<string, unknown[]>;
  onSubmit?: (data: FormDataLike) => Promise<void>;
  className?: string;
}

export function FormContainer({
  children,
  initialData = {},
  validationRules = {},
  onSubmit,
  className,
}: FormContainerProps) {
  return (
    <FormProvider
      initialData={initialData}
      validationRules={validationRules}
      onSubmit={onSubmit}
    >
      <form className={className}>{children}</form>
    </FormProvider>
  );
}
