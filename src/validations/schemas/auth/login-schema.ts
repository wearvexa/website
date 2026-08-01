import { z } from "zod";
import { mobileNumberField } from "@/validations/fields";

export const passwordLoginSchema = z.object({
  mobile: mobileNumberField,
});

export type PasswordLoginSchema = z.infer<typeof passwordLoginSchema>;
