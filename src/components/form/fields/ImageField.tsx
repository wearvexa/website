"use client";

import { clsx } from "clsx";
import { useEffect, useRef, useState } from "react";
import type { InputHTMLAttributes } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { ImagePlus, X } from "lucide-react";
import { FieldWrapper } from "./_base/FieldWrapper";
import { useField } from "./_base/useField";

interface ImageFieldProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "name" | "type" | "value" | "onChange"
> {
  name?: string;
  label?: string;
  required?: boolean;
  accept?: string;
  variant?: "inline" | "avatar";
}

export function ImageField({
  name = "image",
  label = "تصویر",
  required,
  disabled,
  className,
  placeholder = "انتخاب تصویر",
  accept = "image/jpeg,image/png,image/webp",
  variant = "inline",
  ...props
}: ImageFieldProps) {
  const { error } = useField(name);
  const { control } = useFormContext();
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        const setFile = (file: File | null) => {
          setPreview((prev) => {
            if (prev) URL.revokeObjectURL(prev);
            return file ? URL.createObjectURL(file) : null;
          });
          field.onChange(file);
          if (!file && inputRef.current) inputRef.current.value = "";
        };

        const fileName = field.value instanceof File ? field.value.name : null;

        return (
          <FieldWrapper
            name={name}
            label={label}
            required={required}
            error={error}
          >
            <input
              ref={inputRef}
              id={name}
              type="file"
              accept={accept}
              disabled={disabled}
              className="sr-only"
              onBlur={field.onBlur}
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
              {...props}
            />

            {variant === "avatar" ? (
              <div className="flex flex-1 items-center gap-3">
                <button
                  type="button"
                  disabled={disabled}
                  onClick={() => inputRef.current?.click()}
                  className={clsx(
                    "size-16 shrink-0 overflow-hidden rounded-2xl",
                    "flex items-center justify-center",
                    "border border-dashed border-neutral-300 bg-gray-100/50",
                    "text-neutral-400 outline-none",
                    "hover:bg-gray-100/35 focus-visible:border-neutral-400",
                    "disabled:opacity-50",
                  )}
                >
                  {preview ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={preview}
                      alt=""
                      className="size-full object-cover"
                    />
                  ) : (
                    <ImagePlus className="size-6" aria-hidden />
                  )}
                </button>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm text-neutral-900">
                    {fileName ?? placeholder}
                  </p>
                  {fileName && (
                    <button
                      type="button"
                      onClick={() => setFile(null)}
                      className="mt-0.5 text-xs text-neutral-500 hover:text-red-600"
                    >
                      حذف تصویر
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <button
                type="button"
                disabled={disabled}
                onClick={() => inputRef.current?.click()}
                className={clsx(
                  "flex-1",
                  "text-sm",
                  "text-neutral-900",
                  "outline-none",
                  "flex items-center gap-3",
                  "border w-full h-12 px-4 rounded-2xl bg-gray-100/50",
                  "hover:bg-gray-100/35 focus:bg-gray-100/35",
                  "disabled:opacity-50",
                  className,
                )}
              >
                <span className="flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white/70 text-neutral-400">
                  {preview ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={preview}
                      alt=""
                      className="size-full object-cover"
                    />
                  ) : (
                    <ImagePlus className="size-4" aria-hidden />
                  )}
                </span>

                <span
                  className={clsx(
                    "min-w-0 flex-1 truncate text-right",
                    !fileName && "font-normal text-neutral-400",
                  )}
                >
                  {fileName ?? placeholder}
                </span>

                {fileName && (
                  <span
                    role="button"
                    tabIndex={0}
                    aria-label="حذف تصویر"
                    onClick={(e) => {
                      e.stopPropagation();
                      setFile(null);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        e.stopPropagation();
                        setFile(null);
                      }
                    }}
                    className="shrink-0 rounded-full p-1 text-neutral-400 hover:bg-white hover:text-red-600"
                  >
                    <X className="size-4" aria-hidden />
                  </span>
                )}
              </button>
            )}
          </FieldWrapper>
        );
      }}
    />
  );
}
