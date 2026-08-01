"use client";

import { useEffect, useRef } from "react";
import { clsx } from "clsx";
import { FieldWrapper } from "./_base/FieldWrapper";
import { useField } from "./_base/useField";

interface OtpFieldProps {
  name?: string;
  label?: string;
  length?: number;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export function OtpField({
  name = "otp",
  label = "کد تایید",
  length = 6,
  value,
  onChange,
  disabled,
}: OtpFieldProps) {
  const { error } = useField(name);
  const refs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    refs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, val: string) => {
    const digit = val.replace(/\D/g, "");
    if (!digit) return;

    const chars = value.split("");
    chars[index] = digit[digit.length - 1];
    const result = chars.join("");
    onChange(result);

    if (index < length - 1) {
      refs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace" && !value[index] && index > 0) {
      refs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, length);

    if (pasted) {
      onChange(pasted);
      refs.current[
        pasted.length >= length ? length - 1 : pasted.length
      ]?.focus();
    }

    e.preventDefault();
  };

  return (
    <FieldWrapper name={name} label={label} error={error}>
      <div dir="ltr" className="flex justify-between gap-2">
        {Array.from({ length }).map((_, index) => (
          <input
            key={index}
            ref={(el) => {
              refs.current[index] = el;
            }}
            value={value[index] ?? ""}
            disabled={disabled}
            maxLength={1}
            inputMode="numeric"
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            className={clsx(
              "size-12 rounded-2xl border bg-gray-100/50 text-center text-lg font-bold tabular-nums outline-none",
              "focus:bg-gray-100/35 focus:ring-2 focus:ring-neutral-200",
            )}
          />
        ))}
      </div>
    </FieldWrapper>
  );
}
