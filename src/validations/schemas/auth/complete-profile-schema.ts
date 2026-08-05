import { z } from "zod";
import { textField } from "@/validations/fields/text-field";
import { optionalImageFileField } from "@/validations/fields/image-field";

export const completeProfileSchema = z.object({
  first_name: textField({ label: "نام" }),
  last_name: textField({ label: "نام خانوادگی", nullable: true }),

  avatar: optionalImageFileField({
    label: "آواتار",
    maxSizeInMB: 2,
  }),
});

export type CompleteProfileSchema = z.infer<typeof completeProfileSchema>;
