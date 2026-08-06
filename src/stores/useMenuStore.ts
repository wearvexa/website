import { create } from "zustand";
import { Menu, MenuState } from "@/types/menu";

export const useMenuStore = create<MenuState>((set, get) => ({
  menus: [],
  setMenus: (menus) => set({ menus }),
  getMenus: (): Menu[] => get().menus,
}));
