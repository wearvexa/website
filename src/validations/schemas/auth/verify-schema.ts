import { z } from "zod";
import { numericField } from "@/validations/fields/numeric-field";
import { textField } from "@/validations/fields/text-field";

export const verifySchema = z.object({
  token: textField({ label: "توکن" }),
  code: numericField({ minLength: 4 }),
});

export type VerifySchema = z.infer<typeof verifySchema>;
