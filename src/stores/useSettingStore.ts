import { create } from "zustand";
import { SettingState } from "@/types/setting";

export const useSettingStore = create<SettingState>((set, get) => ({
  settings: [],

  setSettings: (settings) => set({ settings }),

  getSetting: <T = any>(key: string, defaultValue?: T): T => {
    const setting = get().settings.find((item) => item.key === key);

    if (!setting) {
      return defaultValue as T;
    }

    if (setting.type === "integer") {
      return Number(setting.value) as T;
    }

    return setting.value as T;
  },
}));
