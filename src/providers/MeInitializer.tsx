"use client";

import { ReactNode, useEffect } from "react";
import { Me, useMeStore } from "@/stores/useMeStore";
import api from "@/lib/api";

const MeInitializer = ({ children }: { children: ReactNode }) => {
  const setMe = useMeStore((state) => state.setMe);
  const setHydrated = useMeStore((state) => state.setHydrated);

  useEffect(() => {
    setHydrated();

    const controller = new AbortController();

    api
      .get<Me>("/auth/me", { signal: controller.signal })
      .then((response) => setMe(response.data))
      .catch((error) => {
        if (error.name !== "CanceledError") setMe(null);
      });

    return () => controller.abort();
  }, [setMe, setHydrated]);

  return children;
};

export default MeInitializer;
