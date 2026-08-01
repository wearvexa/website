'use client'

import type { ReactNode } from "react";

interface FieldWrapperProps {
  error?: string;
  label?: string;
  required?: boolean;
  name?: string;
  children: ReactNode;
}

export const FieldWrapper = ({
  error,
  label,
  required,
  name,
  children,
}: FieldWrapperProps) => (
  <div className="flex flex-col gap-1.5">
    {label && (
      <label htmlFor={name} className={"text-gray-800 text-sm block"}>
        {label}
        {required && <span className="text-red-500 font-black mr-1 align-top">*</span>}
      </label>
    )}
    <div className="relative block">
      {children}
    </div>
    {error && <p className="text-xs text-red-400">{error}</p>}
  </div>
);
