import { type InputHTMLAttributes } from "react";
import { useField } from "./_base/useField";

interface HiddenFieldProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value"
> {
  name: string;
  value?: string | null;
}

export const HiddenField = ({ name, value, ...props }: HiddenFieldProps) => {
  const { registration } = useField(name);

  return (
    <input
      type="hidden"
      {...registration}
      value={value ?? ""}
      {...props}
    />
  );
};
