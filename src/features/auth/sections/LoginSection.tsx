"use client";

import Form from "@/components/form/Form";
import { Button } from "@/components/Button";
import Logo from "@public/android-chrome-192x192.png";
import Image from "next/image";
import { loginSchema } from "@/validations/schemas/auth/login-schema";
import { MobileField } from "@/components/form/fields/MobileField";
import {
  LoginStep,
  useLoginSection,
} from "@/features/auth/hook/LoginSection.hook";
import { HiddenField } from "@/components/form/fields/HiddenField";
import { verifySchema } from "@/validations/schemas/auth/verify-schema";

const LoginSection = () => {
  const { handleSubmit, token, step } = useLoginSection();

  const renderForm = () => {
    switch (step) {
      case LoginStep.SendOtp:
        return (
          <Form
            schema={loginSchema}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <MobileField
              name="mobile"
              label="شماره موبایل"
              placeholder="۰۹xxxxxxxxx"
              required
              inputMode="tel"
              maxLength={11}
            />

            <Button type={"submit"} className={"w-full"}>
              ادامه
            </Button>
          </Form>
        );

      case LoginStep.VerifyOtp:
        return (
          <Form
            schema={verifySchema}
            onSubmit={handleSubmit}
            className="space-y-4"
            defaultValues={{
              "token": token
            }}
          >
            <input type={"hidden"} name={"token"}/>
            <MobileField
              name="code"
              label="کد تایید"
              placeholder="xxxx"
              required
            />

            <Button type={"submit"} className={"w-full"}>
              تایید کد
            </Button>
          </Form>
        );
    }
  };

  return (
    <main className="flex mt-30 mb-45 flex-col items-center justify-center bg-white px-6">
      <div className="w-full max-w-sm space-y-8">
        <div className="space-y-1 text-center">
          <Image src={Logo} alt={""} className={"size-20 block mx-auto mb-2"} />
          <h1 className="text-2xl font-extrabold tracking-tight text-neutral-900">
            {step === LoginStep.SendOtp ? "ورود و ثبت نام" : "تایید کد ورود"}
          </h1>
          <p className="text-sm text-neutral-500">
            {step === LoginStep.SendOtp
              ? "برای ورود شماره موبایل خود را وارد کنید"
              : "برای تایید کد ورود خود را وارد کنید"}
          </p>
        </div>
        {renderForm()}
        <p className="text-center text-xs text-neutral-400">
          با ورود، قوانین و حریم خصوصی را می‌پذیرید
        </p>
      </div>
    </main>
  );
};

export default LoginSection;
