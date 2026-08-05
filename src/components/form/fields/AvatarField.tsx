"use client";

import { clsx } from "clsx";
import Image from "next/image";
import { ImagePlus, User, X } from "lucide-react";
import { type InputHTMLAttributes, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useField } from "./_base/useField";

type Size = "sm" | "md" | "lg";

const sizes: Record<Size, { box: string; icon: string; sizes: string }> = {
  sm: { box: "size-20", icon: "size-6", sizes: "80px" },
  md: { box: "size-28", icon: "size-8", sizes: "112px" },
  lg: { box: "size-36", icon: "size-10", sizes: "144px" },
};

interface AvatarFieldProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "size"
> {
  name: string;
  label?: string;
  size?: Size;
}

export const AvatarField = ({
  name,
  label,
  required,
  disabled,
  size = "md",
  className,
  ...props
}: AvatarFieldProps) => {
  const { registration, error } = useField(name);
  const { watch, setValue } = useFormContext();
  const value = watch(name);
  const [preview, setPreview] = useState<string | null>(null);

  const dimension = sizes[size];

  useEffect(() => {
    const file =
      value instanceof FileList
        ? value[0]
        : value instanceof File
          ? value
          : null;

    if (!file) {
      setPreview(null);
      return;
    }

    const url = URL.createObjectURL(file);
    setPreview(url);

    return () => URL.revokeObjectURL(url);
  }, [value]);

  const clear = () => setValue(name, undefined, { shouldValidate: true });

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative">
        <label
          htmlFor={name}
          className={clsx(
            dimension.box,
            "relative flex items-center justify-center overflow-hidden",
            "rounded-full border border-dashed border-neutral-300 bg-gray-100/50",
            "cursor-pointer transition-colors hover:bg-gray-100/35",
            "focus-within:ring-2 focus-within:ring-neutral-900/10",
            error && "border-red-400",
            disabled && "pointer-events-none opacity-50",
            className,
          )}
        >
          {preview ? (
            <Image
              src={preview}
              alt=""
              fill
              sizes={dimension.sizes}
              className="object-cover"
              unoptimized
            />
          ) : (
            <User
              className={clsx(dimension.icon, "text-neutral-400")}
              aria-hidden
            />
          )}

          <span
            className={clsx(
              "absolute inset-x-0 bottom-0 flex items-center justify-center",
              "bg-neutral-900/30 py-1 text-white",
            )}
          >
            <ImagePlus className="size-4" aria-hidden />
          </span>

          <input
            id={name}
            type="file"
            accept="image/*"
            disabled={disabled}
            className="sr-only"
            aria-describedby={error ? `${name}-error` : undefined}
            {...registration}
            {...props}
          />
        </label>

        {preview && !disabled && (
          <button
            type="button"
            onClick={clear}
            aria-label="حذف تصویر"
            className={clsx(
              "absolute -top-1 -left-1 grid size-7 place-items-center rounded-full",
              "border border-neutral-200 bg-white text-neutral-600 shadow-sm",
              "transition-colors hover:text-red-500",
            )}
          >
            <X className="size-4" aria-hidden />
          </button>
        )}
      </div>

      {label && (
        <label htmlFor={name} className="text-xs text-neutral-500">
          {label}
          {required && <span className="text-red-500"> *</span>}
        </label>
      )}

      {error && (
        <p id={`${name}-error`} className="text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};
