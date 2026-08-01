import { z } from "zod";
import { convertPersianDigits } from "@/lib/convert-persian-digits";

export const dateTimeField = z
  .any()
  .transform((value) => {
    if (typeof value === "string") {
      return convertPersianDigits(value).trim();
    }
    return value;
  })
  .refine((value) => value !== undefined && value !== null && value !== "", {
    message: "زمان / تاریخ الزامی است.",
  })
  .transform((value) => new Date(value))
  .refine((value) => !Number.isNaN(value.getTime()), {
    message: "زمان / تاریخ نامعتبر است.",
  });
