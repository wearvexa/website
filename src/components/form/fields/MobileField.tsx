"use client";

import { clsx } from "clsx";
import type { InputHTMLAttributes } from "react";
import { FieldWrapper } from "./_base/FieldWrapper";
import { useField } from "./_base/useField";

interface MobileFieldProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "name" | "type"
> {
  name?: string;
  label?: string;
  required?: boolean;
}

export function MobileField({
  name = "mobile",
  label = "شماره موبایل",
  required,
  disabled,
  className,
  placeholder = "",
  ...props
}: MobileFieldProps) {
  const { registration, error } = useField(name);

  return (
    <FieldWrapper name={name} label={label} required={required} error={error}>
      <input
        id={name}
        type="tel"
        dir="ltr"
        inputMode="numeric"
        autoComplete="tel-national"
        disabled={disabled}
        placeholder={placeholder}
        className={clsx(
          "flex-1",
          "text-left",
          "text-sm",
          "tracking-[0.02em]",
          "text-neutral-900",
          "placeholder:font-normal",
          "placeholder:text-neutral-400",
          "outline-none",
          "tabular-nums",
          "border w-full h-12 px-4 rounded-2xl bg-gray-100/50",
          "focus:bg-gray-100/35",
          className,
        )}
        {...registration}
        {...props}
      />
    </FieldWrapper>
  );
}
