"use client";

import Form from "@/components/form/Form";
import { NumberField } from "@/components/form/fields/NumberField";
import { Button } from "@/components/Button";
import Logo from "@public/android-chrome-192x192.png";
import Image from "next/image";
import { passwordLoginSchema } from "@/validations/schemas/auth/login-schema";

const LoginSection = () => {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center bg-white px-6">
      <div className="w-full max-w-sm space-y-8">
        <div className="space-y-1 text-center">
          <Image src={Logo} alt={""} className={"size-20 block mx-auto mb-2"} />
          <h1 className="text-2xl font-extrabold tracking-tight text-neutral-900">
            ورود و ثبت نام
          </h1>
          <p className="text-sm text-neutral-500">
            برای ورود شماره موبایل خود را وارد کنید
          </p>
        </div>

        <Form
          schema={passwordLoginSchema}
          onSubmit={(e) => console.log(e)}
          className="space-y-4"
        >
          <NumberField
            name="mobile"
            label="شماره موبایل"
            placeholder="09xxxxxxxxx"
            required
            inputMode="tel"
            maxLength={11}
          />

          <Button type={"submit"} className={"w-full"}>
            ادامه
          </Button>
        </Form>

        <p className="text-center text-xs text-neutral-400">
          با ورود، قوانین و حریم خصوصی را می‌پذیرید
        </p>
      </div>
    </main>
  );
};

export default LoginSection;
