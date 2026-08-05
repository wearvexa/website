import { z } from "zod";

type TextFieldOptions = {
  label: string;
  nullable?: boolean;
};

const textField = ({ label, nullable = false }: TextFieldOptions) => {
  return z
    .string()
    .transform((val) => val.trim())
    .refine(
      (value) => {
        if (nullable) {
          if (value === null || value === undefined || value.trim() === "") {
            return true;
          } else {
            return value.length > 0;
          }
        } else {
          return value.length > 0;
        }
      },
      {
        message: `لطفا ${label} را وارد کنید.`,
      },
    );
};

export { textField };
