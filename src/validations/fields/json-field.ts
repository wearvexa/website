import { z } from "zod";

type JsonFieldOptions = {
  label: string;
  optional?: boolean;
};

const INVALID_JSON = Symbol("INVALID_JSON");

const jsonField = ({ label, optional = false }: JsonFieldOptions) => {
  const parsedSchema = z.any().refine((value) => value !== INVALID_JSON, {
    message: `فرمت ${label} معتبر نیست.`,
  });

  return z.preprocess((value) => {
    if (value === undefined || value === null) {
      return optional ? undefined : INVALID_JSON;
    }

    if (typeof value !== "string") {
      return value;
    }

    const trimmed = value.trim();
    if (trimmed === "") {
      return optional ? undefined : INVALID_JSON;
    }

    try {
      return JSON.parse(trimmed);
    } catch {
      return INVALID_JSON;
    }
  }, optional ? parsedSchema.optional() : parsedSchema);
};

export { jsonField };
