import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type Me = {
  first_name: string;
  last_name: string;
  avatar: string;
  mobile: string;
  is_profile_completed: boolean;
};

export type MeStatus = "unknown" | "guest" | "authenticated";

type MeStore = {
  me: Me | null;
  status: MeStatus;
  hydrated: boolean;
  setMe: (me: Me | null) => void;
  clearMe: () => void;
  setHydrated: () => void;
};

export const useMeStore = create<MeStore>()(
  persist(
    (set) => ({
      me: null,
      status: "unknown",
      hydrated: false,

      setMe: (me) => set({ me, status: me ? "authenticated" : "guest" }),

      clearMe: () => set({ me: null, status: "guest" }),

      setHydrated: () => set({ hydrated: true }),
    }),
    {
      name: "me",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ me: state.me, status: state.status }),
    },
  ),
);
