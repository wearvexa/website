"use client";

import { type ReactNode } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormProvider,
  useForm,
  type DefaultValues,
  type Resolver,
} from "react-hook-form";
import { z } from "zod";

interface FormProps<TSchema extends z.ZodObject<any>> {
  onSubmit: (data: z.infer<TSchema>) => void | Promise<void>;
  defaultValues?: DefaultValues<z.infer<TSchema>>;
  className?: string;
  children?: ReactNode;
  schema: TSchema;
}

const Form = <TSchema extends z.ZodObject<any>>({
  onSubmit,
  defaultValues,
  className,
  children,
  schema,
}: FormProps<TSchema>) => {
  type FormValues = z.infer<TSchema>;

  const methods = useForm<FormValues>({
    defaultValues,
    mode: "onChange",
    resolver: zodResolver(schema) as unknown as Resolver<FormValues>,
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={className}
        autoComplete="off"
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
