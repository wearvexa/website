import { ReactNode } from "react";
import Header from "@/components/layouts/admin/Header";
import SideBar from "@/components/layouts/admin/SideBar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={"no-container flex w-full bg-mauve-50"}>
      <SideBar />
      <div className={"flex flex-col h-dvh flex-1"}>
        <Header />
        <main className={"flex-1"}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
