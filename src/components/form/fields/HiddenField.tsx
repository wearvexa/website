import { type InputHTMLAttributes } from "react";
import { useField } from "./_base/useField";

interface HiddenFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value?: string;
}

export const HiddenField = ({ name, value, ...props }: HiddenFieldProps) => {
  const { registration } = useField(name);

  return <input type={"hidden"} value={value} {...registration} {...props} />;
};
