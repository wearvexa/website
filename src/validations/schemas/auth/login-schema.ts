import { z } from "zod";
import { mobileNumberField } from "@/validations/fields";

export const loginSchema = z.object({
  mobile: mobileNumberField,
});

export type LoginSchema = z.infer<typeof loginSchema>;
