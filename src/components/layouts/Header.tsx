"use client";

import { ChevronDown, MenuIcon, X } from "lucide-react";
import Image from "next/image";
import Logo from "@public/logo/typography-black.png";
import Link from "next/link";
import { Menu, MenuItem } from "@/types/menu";
import DynamicIcon from "@/components/DynamicIcon";
import { useEffect, useState } from "react";
import Vexa from "@public/logo/typography-bold-black.png";

const MenuItemRow = ({
  item,
  depth = 0,
}: {
  item: MenuItem;
  depth?: number;
}) => {
  const [open, setOpen] = useState(false);
  const hasChildren = !!item.children?.length;

  return (
    <div className={"w-full"}>
      <div
        className={
          "group w-full flex items-stretch rounded-[10px] border border-gray-300 bg-white overflow-hidden transition-all duration-200 hover:border-gray-600 hover:shadow-sm"
        }
      >
        <Link
          href={item.url ?? "/"}
          className={
            "flex-1 flex gap-3 items-center px-4 py-3 text-[15px] text-gray-800 group-hover:text-gray-950 active:scale-[0.99] transition-all duration-150"
          }
        >
          {item.icon && (
            <span className="flex size-8 items-center justify-center rounded-lg bg-gray-100 text-gray-700 group-hover:bg-gray-600 group-hover:text-white transition-colors duration-200">
              <DynamicIcon name={item.icon} className={"size-4"} />
            </span>
          )}
          <span className="font-medium">{item.title}</span>
        </Link>

        {hasChildren && (
          <button
            onClick={() => setOpen((prev) => !prev)}
            aria-label="toggle submenu"
            className={
              "w-12 flex justify-center items-center border-r border-gray-300 shrink-0 cursor-pointer text-gray-500 hover:bg-gray-50 active:bg-gray-100 transition-colors"
            }
          >
            <ChevronDown
              size={18}
              className={`transition-transform duration-300 ${
                open ? "rotate-180 text-gray-600" : ""
              }`}
            />
          </button>
        )}
      </div>

      {hasChildren && (
        <div
          className={`grid transition-all duration-300 ease-out ${
            open
              ? "grid-rows-[1fr] opacity-100 mt-2"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-2 pr-4 border-r-2 border-gray-100 mr-4">
              {item.children!.map((child) => (
                <MenuItemRow key={child.id} item={child} depth={depth + 1} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Header = ({ menus }: { menus: Menu[] }) => {
  const header_menu = menus.find((i) => i.name === "header_menu");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      <header className={"h-18 flex justify-between items-center px-5"}>
        <button
          onClick={() => setMenuOpen(true)}
          className={
            "size-10 bg-gray-100 flex active:scale-95 justify-center items-center rounded-lg transition-all duration-100 cursor-pointer"
          }
        >
          <MenuIcon className="text-gray-600" size={20} />
        </button>
        <Image src={Logo} alt={"Vexa logo"} width={85} loading={"lazy"} />
      </header>

      <div
        className={`fixed top-0 right-0 bg-white z-10 w-screen h-screen flex justify-center items-center px-10 flex-col gap-4 transition-all duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className={
            "absolute top-5 left-6 size-10 bg-gray-100 flex active:scale-95 justify-center items-center rounded-lg transition-all duration-100 cursor-pointer"
          }
        >
          <X className="text-gray-600" size={20} />
        </button>

        <Image src={Vexa} alt={""} height={60} className={"mb-6"} />
        {header_menu?.items?.map((item) => (
          <MenuItemRow key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Header;
