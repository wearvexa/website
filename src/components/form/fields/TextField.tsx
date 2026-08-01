import { clsx } from "clsx";
import type { InputHTMLAttributes } from "react";
import { FieldWrapper } from "./_base/FieldWrapper";
import { useField } from "./_base/useField";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: string;
  label?: string;
}

export const TextField = ({
  name,
  icon,
  className,
  label,
  ...props
}: TextFieldProps) => {
  const { registration, error } = useField(name);

  return (
    <FieldWrapper icon={icon} error={error} label={label} {...props}>
      <input
        className={clsx(
          "ava-input peer bg-theme-slate-150 dark:bg-theme-dark",
          icon && "ps-10",
          error && "border-red-400!",
          className,
        )}
        {...registration}
        {...props}
        required={false}
      />
    </FieldWrapper>
  );
};
