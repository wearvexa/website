import { useEffect, useState } from "react";
import api from "@/lib/api";
import { toast } from "sonner";

const useDashboardSection = () => {
  const [loading, setLoading] = useState(true);
  const [statistics, setStatistics] = useState<unknown>();

  const getStatistics = async ({
    onSuccess,
    onFinally
  }: { onSuccess?: () => void, onFinally?: () => void } = {}) => {
    try {
      const response = await api.get("/admin/statistics");

      setStatistics(response.data);
      onSuccess?.();
    } finally {
      setLoading(false);
      onFinally?.();
    }
  };

  const refetch = async () => {
    const id = toast.loading("در حال بروزرسانی...")

    await getStatistics({
      onSuccess: () => {
        toast.success("با موفقیت بروزرسانی شد.")
      },
      onFinally: () => {
        toast.dismiss(id)
      }
    });
  };

  useEffect(() => {
    getStatistics();
  }, []);

  return {
    refetch,
    loading,
    statistics,
  };
};

export { useDashboardSection };
