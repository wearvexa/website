"use client";

import Form from "@/components/form/Form";
import { Button } from "@/components/Button";
import { completeProfileSchema } from "@/validations/schemas/auth/complete-profile-schema";
import { TextField } from "@/components/form/fields/TextField";
import { useCompleteProfileSection } from "@/features/auth/hook/CompleteProfileSection.hook";
import { AvatarField } from "@/components/form/fields/AvatarField";

const CompleteProfileSection = () => {
  const { handleSubmit } = useCompleteProfileSection();

  return (
    <main className="flex mt-25 mb-45 flex-col items-center justify-center bg-white px-6">
      <div className="w-full max-w-sm space-y-8">
        <div className="space-y-1 text-center">
          <h1 className="text-2xl font-extrabold tracking-tight text-neutral-900">
            تکمیل پروفایل کاربری
          </h1>
          <p className="text-sm text-neutral-500">
            برای ادامه لطفا اطلاعات خود را کامل کنید.
          </p>
        </div>

        <Form
          schema={completeProfileSchema}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <AvatarField
            name="avatar"
            label="تصویر پروفایل (اختیاری)"
            size="md"
          />

          <TextField name="first_name" label="نام" required />
          <TextField name="last_name" label="نام خانوادگی" />

          <Button type="submit" className="w-full">
            تکمیل حساب کاربری
          </Button>
        </Form>

        <p className="text-center text-xs text-neutral-400">
          تمامی اطلاعات شما پیش ما محفوظ است.
        </p>
      </div>
    </main>
  );
};

export default CompleteProfileSection;
