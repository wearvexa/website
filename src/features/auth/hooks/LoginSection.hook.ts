import { LoginSchema } from "@/validations/schemas/auth/login-schema";
import api from "@/lib/api";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { VerifySchema } from "@/validations/schemas/auth/verify-schema";
import { getAccessToken, setAccessToken } from "@services/token-service";
import { useRouter } from "next/navigation";
import { useMeStore } from "@/stores/useMeStore";

export enum LoginStep {
  SendOtp,
  VerifyOtp,
}

const useLoginSection = () => {
  const [step, setStep] = useState<LoginStep>(LoginStep.SendOtp);
  const [token, setToken] = useState("");
  const router = useRouter();
  const me = useMeStore((state) => state.me);

  useEffect(() => {
    if (me !== null && getAccessToken()) {
      router.replace("/profile");
    }
  }, [me]);

  const handleSubmit = async (e: LoginSchema | VerifySchema) => {
    switch (step) {
      case LoginStep.SendOtp:
        try {
          const response = await api.post<{
            token: string;
          }>("/auth/otp/send", e);

          if (response.message) {
            toast.success(response.message);
          }

          setStep(LoginStep.VerifyOtp);
          setToken(response?.data?.token);
        } finally {
        }
        break;

      case LoginStep.VerifyOtp:
        try {
          const response = await api.post<{
            access_token: string;
            is_profile_completed: boolean;
            is_owner: boolean;
          }>("/auth/otp/verify", e);

          if (response.message) {
            toast.success(response.message);
          }

          setAccessToken(response?.data?.access_token);

          if (!response?.data?.is_profile_completed) {
            router.replace("/complete-profile");
          } else {
            window.location.href = "/profile";
          }
        } finally {
        }
        break;
    }
  };

  return {
    handleSubmit,
    token,
    step,
  };
};

export { useLoginSection };
