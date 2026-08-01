import type { InputHTMLAttributes } from "react";
import { FieldWrapper } from "./_base/FieldWrapper";
import { useField } from "./_base/useField";
import { clsx } from "clsx";

interface ToggleFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

export const ToggleField = ({
  name,
  className,
  label,
  ...props
}: ToggleFieldProps) => {
  const { registration, error } = useField(name);

  return (
    <FieldWrapper error={error} label={label} {...props}>
      <input
        className={clsx("ava-switch", className)}
        type="checkbox"
        {...registration}
        {...props}
        required={false}
      />
    </FieldWrapper>
  );
};
