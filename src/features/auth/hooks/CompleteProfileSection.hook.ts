import { useRouter } from "next/navigation";
import { CompleteProfileSchema } from "@/validations/schemas/auth/complete-profile-schema";
import api from "@/lib/api";
import { toast } from "sonner";
import objectToFormData from "@/lib/objectToFormData";
import { useMeStore } from "@/stores/useMeStore";

const useCompleteProfileSection = () => {
  const handleSubmit = async (e: CompleteProfileSchema) => {
    try {
      const response = await api.put("/auth/me", objectToFormData(e));

      if (response.message) {
        toast.success(response.message);
      }

      window.location.href = "/profile";
    } finally {
    }
  };

  return {
    handleSubmit,
  };
};

export { useCompleteProfileSection };
