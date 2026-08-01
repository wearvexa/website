import { z } from "zod";
import { convertPersianDigits } from "@/lib/convert-persian-digits";

const mobilePattern = /^09\d{9}$/;

export const mobileNumberField = z
  .string()
  .transform(convertPersianDigits)
  .refine((value) => mobilePattern.test(value), {
    message: "شماره موبایل باید معتبر باشد.",
  });
