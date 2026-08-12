"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

type SmallButtonVariant = "default" | "ghost" | "danger";
type SmallButtonSize = "sm" | "md";

export interface SmallButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: SmallButtonVariant;
  size?: SmallButtonSize;
  children: ReactNode
}

const variantClasses: Record<SmallButtonVariant, string> = {
  default: "border-gray-200 bg-white text-gray-800 hover:bg-gray-100",
  ghost: "border-transparent bg-transparent text-gray-600 hover:bg-gray-100",
  danger: "border-red-200 bg-white text-red-600 hover:bg-red-50",
};

const SmallButton = ({
  variant = "default",
  size = "md",
  type = "button",
  disabled,
  onClick,
  className,
  children,
  ...rest
}: SmallButtonProps) => (
  <button
    {...rest}
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={[
      "flex shrink-0 cursor-pointer items-center justify-center rounded-full border size-10",
      "transition-colors",
      "focus-visible:outline-2 focus-visible:outline-offset-2",
      "active:scale-95",
      "disabled:pointer-events-none disabled:opacity-80",
      variantClasses[variant],
      className,
    ].join(" ")}
  >
    {children}
  </button>
);

export default SmallButton;
