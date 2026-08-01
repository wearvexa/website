import type { TextareaHTMLAttributes } from "react";
import { FieldWrapper } from "./_base/FieldWrapper.tsx";
import { useField } from "./_base/useField.ts";

interface TextAreaFieldProps extends Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "name"
> {
  name: string;
  label?: string;
  required?: boolean;
}

export const TextAreaField = ({
  name,
  label,
  required,
  className,
  rows = 4,
  ...props
}: TextAreaFieldProps) => {
  const { registration, error } = useField(name);

  return (
    <FieldWrapper name={name} label={label} required={required} error={error}>
      <textarea
        id={name}
        rows={rows}
        className={`ava-input peer bg-theme-slate-150 dark:bg-theme-dark h-auto! -mb-1.5 ${className ?? ""}`}
        {...registration}
        {...props}
      />
    </FieldWrapper>
  );
};
