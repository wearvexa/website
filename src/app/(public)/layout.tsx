import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { ReactNode } from "react";
import { getMenus } from "@/lib/api/mutations/menu";
import { Menu } from "@/types/menu";

const Layout = async ({ children }: { children: ReactNode }) => {
  const { data: menus }: { data: Menu[] } = await getMenus()

  return (
    <>
      <Header menus={menus} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
