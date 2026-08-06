import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { ReactNode } from "react";
import ActionBar from "@/components/layouts/ActionBar";

const Layout = async ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <ActionBar />
    </>
  );
};

export default Layout;
