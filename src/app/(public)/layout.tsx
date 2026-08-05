import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { ReactNode } from "react";
import { getMainLayout } from "@/lib/api/mutations/main-layout";
import ActionBar from "@/components/layouts/ActionBar";
import { Menu } from "@/types/menu";
import { SettingItem } from "@/types/setting";
import SettingInitializer from "@/providers/SettingInitializer";
import { Toaster } from "sonner";
import MeInitializer from "@/providers/MeInitializer";

const Layout = async ({ children }: { children: ReactNode }) => {
  const {
    data: { menus, settings },
  }: { data: { menus: Menu[]; settings: SettingItem[] } } =
    await getMainLayout();

  return (
    <>
      <SettingInitializer settings={settings} />
      <MeInitializer>
        <Header menus={menus} />
        <main>{children}</main>
        <Footer menus={menus} />
        <ActionBar />
      </MeInitializer>
      <Toaster
        position="top-center"
        style={{ fontFamily: "inherit" }}
        dir={"rtl"}
        richColors
        closeButton
        toastOptions={{
          classNames: {
            toast: "rounded-[18px]! font-light! text-sm!",
            title: "text-[13px]! font-normal!",
          },
        }}
      />
    </>
  );
};

export default Layout;
