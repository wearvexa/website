import { z } from "zod";

type TextFieldOptions = {
  label: string;
};

const textField = ({ label }: TextFieldOptions) => {
  return z
    .string()
    .transform((val) => val.trim())
    .refine((value) => value !== undefined && value !== null && value !== "", {
      message: `لطفا ${label} را وارد کنید.`,
    });
};

export { textField };
