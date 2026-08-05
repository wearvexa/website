import { create } from "zustand";

export type Me = {
  first_name: string;
  last_name: string;
  avatar: string;
  mobile: string;
  is_profile_completed: boolean;
};

type MeStore = {
  me: Me | null;
  setMe: (me: Me | null) => void;
  clearMe: () => void;
};

export const useMeStore = create<MeStore>((set) => ({
  me: null,

  setMe: (me) => set({ me }),

  clearMe: () => set({ me: null }),
}));
