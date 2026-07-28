"use client";

import { useRef } from "react";
import { useSettingStore } from "@/stores/useSettingStore";
import { SettingItem } from "@/types/setting";

export default function SettingInitializer({
  settings,
}: {
  settings: SettingItem[];
}) {
  const initialized = useRef(false);

  if (!initialized.current) {
    useSettingStore.setState({ settings });
    initialized.current = true;
  }

  return null;
}
