"use client";

import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { useFormContext } from "@/lib/forms";
import { LucideIcon } from "lucide-react";

export interface FormFieldProps {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select" | "date";
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  containerClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  icon?: LucideIcon;
  options?: Array<{ value: string; label: string }>;
  validationMode?: "onChange" | "onBlur" | "onSubmit";
}

export const FormField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
  FormFieldProps
>(
  (
    {
      name,
      label,
      type = "text",
      placeholder,
      required = false,
      disabled = false,
      className,
      containerClassName,
      labelClassName,
      errorClassName,
      icon: Icon,
      options,
      validationMode = "onBlur",
    },
    ref
  ) => {
    const { state, setFieldValue, setTouched } = useFormContext();

    const value = state.data[name] || "";
    const stringValue =
      typeof value === "string" ? value : value != null ? String(value) : "";
    const error = state.errors[name] || "";
    const touched = state.touched[name] || false;
    const hasError = Boolean(touched && error);

    const handleChange = (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const newValue = e.target.value;
      setFieldValue(name, newValue);

      if (validationMode === "onChange") {
        // You would need to pass validation rules here
        // This is a simplified version
      }
    };

    const handleBlur = () => {
      setTouched(name, true);

      if (validationMode === "onBlur") {
        // You would need to pass validation rules here
        // This is a simplified version
      }
    };

    const inputClasses = cn(
      "w-full bg-black border border-yellow-700 rounded-lg py-3 px-4 text-white placeholder-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200",
      hasError && "border-red-500 focus:ring-red-500",
      disabled && "opacity-50 cursor-not-allowed",
      Icon && "pl-10",
      className
    );

    const renderInput = () => {
      const commonProps = {
        id: name,
        name,
        onChange: handleChange,
        onBlur: handleBlur,
        placeholder,
        disabled,
        required,
        className: inputClasses,
      };

      switch (type) {
        case "textarea":
          return (
            <textarea
              {...commonProps}
              value={stringValue}
              aria-invalid={hasError}
              aria-describedby={hasError ? `${name}-error` : undefined}
              ref={ref as React.Ref<HTMLTextAreaElement>}
              rows={4}
            />
          );

        case "select":
          return (
            <select
              {...commonProps}
              value={stringValue}
              aria-invalid={hasError}
              aria-describedby={hasError ? `${name}-error` : undefined}
              ref={ref as React.Ref<HTMLSelectElement>}
              className={cn(inputClasses, "appearance-none")}
            >
              <option value="">Select an option</option>
              {options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          );

        default:
          return (
            <input
              {...commonProps}
              value={stringValue}
              aria-invalid={hasError}
              aria-describedby={hasError ? `${name}-error` : undefined}
              type={type}
              ref={ref as React.Ref<HTMLInputElement>}
            />
          );
      }
    };

    return (
      <div className={cn("space-y-2", containerClassName)}>
        <label
          htmlFor={name}
          className={cn(
            "block text-sm font-medium text-yellow-300",
            required && "after:content-['*'] after:ml-1 after:text-red-400",
            labelClassName
          )}
        >
          {label}
        </label>

        <div className="relative">
          {Icon && (
            <Icon className="absolute left-3 top-3 h-5 w-5 text-yellow-500" />
          )}
          {renderInput()}
        </div>

        {hasError && (
          <p
            id={`${name}-error`}
            className={cn("text-sm text-red-400", errorClassName)}
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

FormField.displayName = "FormField";
