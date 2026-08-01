import { clsx } from "clsx";
import { type InputHTMLAttributes, useState } from "react";
import { FieldWrapper } from "./_base/FieldWrapper";
import { useField } from "./_base/useField";

interface PasswordFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: string;
  label?: string;
}

export const PasswordField = ({
  name,
  icon,
  className,
  label,
  ...props
}: PasswordFieldProps) => {
  const [show, setShow] = useState<boolean>(false);
  const { registration, error } = useField(name);

  return (
    <FieldWrapper icon={icon} error={error} label={label} {...props}>
      <input
        type={show ? "text" : "password"}
        className={clsx(
          "ava-input peer bg-theme-slate-150 dark:bg-theme-dark pl-9",
          icon && "ps-10",
          error && "border-red-400!",
          className,
        )}
        {...registration}
        {...props}
        required={false}
      />

      <button
        type={"button"}
        onClick={() => setShow((prev) => !prev)}
        className={
          "cursor-pointer text-gray-600 dark:text-gray-400 absolute top-0 left-0 h-full aspect-square"
        }
      >
        <i className={"harmony-icon harmony-icon-eye-1"}></i>
      </button>
    </FieldWrapper>
  );
};
