import { LoginSchema } from "@/validations/schemas/auth/login-schema";
import api from "@/lib/api";
import { toast } from "sonner";
import { useState } from "react";
import { VerifySchema } from "@/validations/schemas/auth/verify-schema";
import { setAccessToken } from "@services/token-service";

export enum LoginStep {
  SendOtp,
  VerifyOtp,
}

const useLoginSection = () => {
  const [step, setStep] = useState<LoginStep>(LoginStep.SendOtp);
  const [token, setToken] = useState("");

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
          }>("/auth/otp/verify", e);

          if (response.message) {
            toast.success(response.message);
          }

          setAccessToken(response?.data?.access_token);
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
