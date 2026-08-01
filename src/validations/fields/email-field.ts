import { z } from "zod";
import { convertPersianDigits } from "@/lib/convert-persian-digits";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const emailField = z
  .string()
  .transform((value) => convertPersianDigits(value).trim().toLowerCase())
  .refine((value) => emailPattern.test(value), {
    message: "ایمیل باید معتبر باشد.",
  });
