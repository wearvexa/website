'use client'

import { useFormContext } from "react-hook-form";
import type { RegisterOptions } from "react-hook-form";

export const useField = (name: string, options: RegisterOptions = {}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return {
    registration: register(name, options),
    error: errors[name]?.message as string | undefined,
  };
};
