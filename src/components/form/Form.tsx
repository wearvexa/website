'use client'

import type { DefaultValues, Resolver } from "react-hook-form";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type ReactNode } from "react";
import { z } from "zod";

const Form = ({
  onSubmit,
  defaultValues,
  className,
  children,
  schema = z.object({}),
}: {
  onSubmit: (data: FormData) => void | Promise<void>;
  defaultValues?: DefaultValues<FormData>;
  className?: string;
  children?: ReactNode;
  schema?: any;
}) => {
  const methods = useForm<FormData>({
    defaultValues,
    mode: "onChange",
    resolver: zodResolver(schema) as Resolver<FormData>,
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={className} autoComplete={'off'}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;