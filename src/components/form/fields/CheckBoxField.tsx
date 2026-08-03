import { clsx } from "clsx";
import type { InputHTMLAttributes } from "react";
import { useField } from "./_base/useField";

interface CheckBoxFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

export const CheckBoxField = ({
  name,
  className,
  label,
  ...props
}: CheckBoxFieldProps) => {
  const { registration, error } = useField(name);

  return (
    <div className="flex flex-col gap-1.5">
      <div className={"flex gap-2"}>
        <input
          id={name}
          type={"checkbox"}
          className={clsx(
            "ava-checkbox",
            error && "border-red-400!",
            className,
          )}
          {...registration}
          {...props}
          required={false}
        />
        <label
          htmlFor={name}
          className={"text-gray-800 text-sm block dark:text-gray-300 cursor-pointer select-none"}
        >
          {label}
        </label>
      </div>
      {error && <p className="text-xs text-red-400 block">{error}</p>}
    </div>
  );
};
