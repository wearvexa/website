import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { ReactNode } from "react";
import { getMainLayout } from "@/lib/api/mutations/main-layout";
import ActionBar from "@/components/layouts/ActionBar";
import { Menu } from "@/types/menu";

const Layout = async ({ children }: { children: ReactNode }) => {
  const {
    data: { menus },
  }: { data: { menus: Menu[] } } = await getMainLayout();

  return (
    <>
      <Header menus={menus} />
      <main>{children}</main>
      <Footer menus={menus} />
      <ActionBar />
    </>
  );
};

export default Layout;
