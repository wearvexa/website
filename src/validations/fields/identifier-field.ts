import { z } from "zod";
import { convertPersianDigits } from "@/lib/convert-persian-digits";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const mobilePattern = /^09\d{9}$/;

export const identifierField = z
  .string()
  .transform((value) => convertPersianDigits(value).trim().toLowerCase())
  .refine(
    (value) => {
      const isMobile = mobilePattern.test(value);
      const isEmail = emailPattern.test(value);

      return isMobile || isEmail;
    },
    { message: "شماره موبایل یا ایمیل معتبر وارد کنید." },
  );
