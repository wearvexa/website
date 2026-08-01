import type { InputHTMLAttributes } from "react";
import { FieldWrapper } from "./_base/FieldWrapper.tsx";
import { useField } from "./_base/useField.ts";

interface TimeFieldProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "name" | "type"
> {
  name: string;
  label?: string;
  required?: boolean;
  icon?: string;
}

export const TimeField = ({
  name,
  label,
  required,
  icon,
  className,
  ...props
}: TimeFieldProps) => {
  const { registration, error } = useField(name);

  return (
    <FieldWrapper
      name={name}
      label={label}
      required={required}
      error={error}
      icon={icon}
    >
      <input
        id={name}
        type="time"
        className={`ava-input peer bg-theme-slate-150 dark:bg-theme-dark ${icon ? "pe-10" : ""} ${className ?? ""}`}
        {...registration}
        {...props}
      />
    </FieldWrapper>
  );
};
