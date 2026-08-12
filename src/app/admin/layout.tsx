"use client";

import { ReactNode } from "react";
import Header from "@/components/layouts/admin/Header";
import SideBar from "@/components/layouts/admin/SideBar";
import { useMeStore } from "@/stores/useMeStore";
import { Tooltip } from "react-tooltip";

const Layout = ({ children }: { children: ReactNode }) => {
  const { me, status } = useMeStore();

  if (status !== "unknown" && !me?.is_owner) {
    location.href = "/login";
  }

  return (
    <>
      <div className={"no-container flex w-full bg-mauve-50"}>
        <SideBar />
        <div className={"flex flex-col h-dvh flex-1"}>
          <Header />
          <main className={"flex-1"}>{children}</main>
        </div>
      </div>
      <Tooltip
        id="tooltip"
        delayShow={600}
        style={{
          borderRadius: "10px",
          fontSize: "13px",
        }}
      />
    </>
  );
};

export default Layout;
