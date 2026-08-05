import { ReactNode } from "react";
import ActionBar from "@/components/layouts/ActionBar";

const Layout = async ({ children }: { children: ReactNode }) => {
  return (
    <>
      <main>{children}</main>
      <ActionBar />
    </>
  );
};

export default Layout;
