"use client";

import { Me, useMeStore } from "@/stores/useMeStore";
import api from "@/lib/api";

const MeInitializer = async () => {
  const response = await api.get<Me>("/api/me");

  const setMe = useMeStore((state) => state.setMe);

  setMe(response.data);

  return null;
};

export default MeInitializer;
