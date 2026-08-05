import { useRouter } from "next/navigation";
import { CompleteProfileSchema } from "@/validations/schemas/auth/complete-profile-schema";
import api from "@/lib/api";
import { toast } from "sonner";
import objectToFormData from "@/lib/objectToFormData";

const useCompleteProfileSection = () => {
  const router = useRouter();

  const handleSubmit = async (e: CompleteProfileSchema) => {
    try {
      const response = await api.put("/auth/me", objectToFormData(e));

      if (response.message) {
        toast.success(response.message);
      }

      router.push("/profile");
    } finally {
    }
  };

  return {
    handleSubmit,
  };
};

export { useCompleteProfileSection };
