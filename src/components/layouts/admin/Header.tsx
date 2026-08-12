"use client";

import { LogOut, User2Icon, UserCog } from "lucide-react";
import { useMeStore } from "@/stores/useMeStore";

const Header = () => {
  const me = useMeStore((state) => state.me);

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex flex-row-reverse px-10 justify-between">
      <div className={"flex items-center"}>
        <button
          className={
            "size-10 border rounded-full flex justify-center items-center cursor-pointer border-gray-200 hover:bg-gray-100 text-gray-800 active:scale-98"
          }
        >
          <LogOut className={"rotate-180"} size={18} />
        </button>
      </div>
      <div className={"flex items-center"}>
        <h4 className={"font-medium flex gap-2 text-gray-800"}>
          <UserCog />
          {`${me?.first_name} ${me?.last_name ?? ""}`}</h4>
      </div>
    </header>
  );
};

export default Header;
