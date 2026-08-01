import { z } from "zod";

type SelectFieldOptions = {
  label: string;
  multiple?: boolean;
};

const selectField = ({ label, multiple = false }: SelectFieldOptions) => {
  const valueSchema = z.union([z.string(), z.number(), z.undefined()]);

  if (multiple) {
    return z
      .array(valueSchema, {
        message: `لطفاً ${label} را انتخاب کنید.`,
      })
      .min(1, `لطفاً حداقل یک ${label} انتخاب کنید.`);
  }

  return valueSchema.refine(
    (value) => value !== undefined && value !== null && value !== "",
    {
      message: `لطفاً ${label} را انتخاب کنید.`,
    },
  );
};

export { selectField };
