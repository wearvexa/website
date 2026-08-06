"use client";

import { useRef } from "react";
import { useSettingStore } from "@/stores/useSettingStore";
import { SettingItem } from "@/types/setting";
import { Menu } from "@/types/menu";
import { useMenuStore } from "@/stores/useMenuStore";

const MenuInitializer = ({ menus }: { menus: Menu[] }) => {
  const initialized = useRef(false);

  if (!initialized.current) {
    useMenuStore.setState({ menus });
    initialized.current = true;
  }

  return null;
};

export default MenuInitializer;