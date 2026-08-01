import { z } from "zod";
import { convertPersianDigits } from "@/lib/convert-persian-digits";

type NumericCodeOptions = {
  minLength?: number;
  maxLength?: number;
  minValue?: number;
  maxValue?: number;
};

const numericField = ({
  minLength,
  maxLength,
  minValue,
  maxValue,
}: NumericCodeOptions = {}) => {
  const lengthErrorMessage = (() => {
    if (minLength === maxLength) {
      return `کد باید دقیقاً ${minLength} رقم باشد.`;
    }
    if (minLength && maxLength) {
      return `کد باید بین ${minLength} تا ${maxLength} رقم باشد.`;
    }
    if (minLength) {
      return `کد باید حداقل ${minLength} رقم باشد.`;
    }
    if (maxLength) {
      return `کد نباید بیشتر از ${maxLength} رقم باشد.`;
    }
    return "کد نامعتبر است.";
  })();

  const valueErrorMessage = (() => {
    if (minValue !== undefined && maxValue !== undefined) {
      return `عدد باید بین ${minValue} تا ${maxValue} باشد.`;
    }
    if (minValue !== undefined) {
      return `عدد باید بزرگتر یا مساوی ${minValue} باشد.`;
    }
    if (maxValue !== undefined) {
      return `عدد باید کوچکتر یا مساوی ${maxValue} باشد.`;
    }
    return "عدد نامعتبر است.";
  })();

  return z
    .preprocess((value) => {
      if (typeof value === "number") {
        return String(value);
      }
      return value;
    }, z.string())
    .pipe(
      z
        .string()
        .min(1, "فیلد الزامی است.")
        .transform((value) => convertPersianDigits(value).trim())
        .refine((value) => /^-?\d+$/.test(value), {
          message: "فقط اعداد مجاز هستند.",
        })
        .refine(
          (value) => {
            if (minLength && value.length < minLength) return false;
            return !(maxLength && value.length > maxLength);
          },
          { message: lengthErrorMessage },
        )
        .transform(Number)
        .refine(
          (value) => {
            if (minValue !== undefined && value < minValue) return false;
            return !(maxValue !== undefined && value > maxValue);
          },
          { message: valueErrorMessage },
        ),
    );
};

export { numericField };
