import { clsx } from "clsx";
import type { InputHTMLAttributes } from "react";
import { FieldWrapper } from "./_base/FieldWrapper";
import { useField } from "./_base/useField";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

export const TextField = ({
  name,
  className,
  label,
  disabled,
  required,
  ...props
}: TextFieldProps) => {
  const { registration, error } = useField(name);

  return (
    <FieldWrapper name={name} error={error} label={label} required={required}>
      <input
        id={name}
        disabled={disabled}
        className={clsx(
          "flex-1",
          "text-sm",
          "text-neutral-900",
          "outline-none",
          "border w-full h-12 px-4 rounded-2xl bg-gray-100/50",
          "hover:bg-gray-100/35 focus:bg-gray-100/35",
          "placeholder:text-neutral-400",
          "disabled:opacity-50",
          error && "border-red-400",
          className,
        )}
        {...registration}
        {...props}
      />
    </FieldWrapper>
  );
};
