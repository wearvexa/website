"use client";

import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { Loader2 } from "lucide-react";
import { clsx } from "clsx";
import { useFormContext } from "react-hook-form";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "link";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    "bg-neutral-900 text-white",
    "hover:bg-neutral-700",
    "active:bg-neutral-800",
    "dark:bg-white dark:text-neutral-900",
    "dark:hover:bg-neutral-200",
    "dark:active:bg-neutral-300",
    "disabled:bg-neutral-300 disabled:text-neutral-500",
    "dark:disabled:bg-neutral-700 dark:disabled:text-neutral-500",
  ].join(" "),

  secondary: [
    "border border-neutral-200 bg-white text-neutral-900",
    "hover:bg-neutral-50 hover:border-neutral-300",
    "active:bg-neutral-100",
    "dark:border-neutral-700 dark:bg-transparent dark:text-white",
    "dark:hover:bg-neutral-800 dark:hover:border-neutral-600",
    "dark:active:bg-neutral-700",
    "disabled:text-neutral-400 disabled:border-neutral-100",
    "dark:disabled:text-neutral-600 dark:disabled:border-neutral-800",
  ].join(" "),

  ghost: [
    "bg-transparent text-neutral-700",
    "hover:bg-neutral-100 hover:text-neutral-900",
    "active:bg-neutral-200",
    "dark:text-neutral-300",
    "dark:hover:bg-neutral-800 dark:hover:text-white",
    "dark:active:bg-neutral-700",
    "disabled:text-neutral-400",
    "dark:disabled:text-neutral-600",
  ].join(" "),

  danger: [
    "bg-rose-500 text-white",
    "hover:bg-rose-600",
    "active:bg-rose-700",
    "dark:bg-rose-500 dark:hover:bg-rose-600",
    "disabled:bg-rose-300",
    "dark:disabled:bg-rose-900dark:disabled:text-rose-500",
  ].join(" "),

  link: [
    "bg-transparent text-neutral-900 underline-offset-4",
    "hover:underline",
    "dark:text-white",
    "disabled:text-neutral-400 disabled:no-underline",
    "dark:disabled:text-neutral-600",
  ].join(" "),
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-3.5 text-xs rounded-xl gap-1.5",
  md: "h-11.5 px-5 text-sm rounded-2xl gap-2",
  lg: "h-14 px-7 text-base rounded-2xl gap-2.5",
};

const iconSizeStyles: Record<ButtonSize, string> = {
  sm: "size-3.5",
  md: "size-4",
  lg: "size-5",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      fullWidth = false,
      leftIcon,
      rightIcon,
      children,
      className,
      disabled,
      ...props
    },
    ref,
  ) => {
    const frm = useFormContext<FormData>();

    const isDisabled = frm?.formState?.isSubmitting || disabled || loading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={clsx(
          "inline-flex items-center justify-center font-medium cursor-pointer",
          "transition-all duration-100!",
          "active:scale-[0.98]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2",
          "dark:focus-visible:ring-white dark:focus-visible:ring-offset-neutral-950",
          "disabled:pointer-events-none disabled:select-none disabled:active:scale-100",
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && "w-full",
          variant === "link" && "h-auto px-0",
          className,
        )}
        {...props}
      >
        {loading || frm?.formState?.isSubmitting ? (
          <Loader2 className={clsx("animate-spin", iconSizeStyles[size])} />
        ) : leftIcon ? (
          <span className={clsx("shrink-0", iconSizeStyles[size])}>
            {leftIcon}
          </span>
        ) : null}

        {children && (
          <span
            className={
              loading || frm?.formState?.isSubmitting
                ? "opacity-0 absolute"
                : undefined
            }
          >
            {children}
          </span>
        )}

        {(!loading || !frm?.formState?.isSubmitting) && rightIcon && (
          <span className={clsx("shrink-0", iconSizeStyles[size])}>
            {rightIcon}
          </span>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";
