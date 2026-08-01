'use client'

import type { InputHTMLAttributes } from "react";
import { FieldWrapper } from "./_base/FieldWrapper";
import { useField } from "./_base/useField";

interface NumberFieldProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "name" | "type"
> {
  name: string;
  label?: string;
  required?: boolean;
}

export const NumberField = ({
  name,
  label,
  required,
  className,
  ...props
}: NumberFieldProps) => {
  const { registration, error } = useField(name);

  return (
    <FieldWrapper
      name={name}
      label={label}
      required={required}
      error={error}
    >
      <input
        id={name}
        type="number"
        className={`ava-input peer bg-theme-slate-150 dark:bg-theme-dark ${className ?? ""}`}
        {...registration}
        {...props}
      />
    </FieldWrapper>
  );
};
