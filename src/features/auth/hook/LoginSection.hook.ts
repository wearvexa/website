import { LoginSchema } from "@/validations/schemas/auth/login-schema";
import api from "@/lib/api";
import { toast } from "sonner";

const useLoginSection = () => {
  const handleSubmit = async (e: LoginSchema) => {
    try {
      const response = await api.post("/auth/otp/send", e);

      if (response.message) {
        toast.success(response.message);
      }

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    handleSubmit,
  };
};

export { useLoginSection };
