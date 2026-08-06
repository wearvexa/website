"use client";

import { MenuIcon, X } from "lucide-react";
import Image from "next/image";
import Logo from "@public/logo/typography-black.png";
import Vexa from "@public/logo/typography-bold-black.png";
import Link from "next/link";
import { Menu, MenuItem } from "@/types/menu";
import DynamicIcon from "@/components/DynamicIcon";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useMenuStore } from "@/stores/useMenuStore";

const SubItem = ({ item, active }: { item: MenuItem; active: boolean }) => (
  <Link
    href={item.url ?? "/"}
    className={`block py-2.5 px-4 text-sm transition-colors rounded-lg ${
      active
        ? "bg-gray-50 text-black font-medium"
        : "text-gray-500 hover:text-black hover:bg-gray-50"
    }`}
  >
    {item.title}
  </Link>
);

const MenuItemRow = ({
  item,
  pathname,
}: {
  item: MenuItem;
  pathname: string;
}) => {
  const [open, setOpen] = useState(false);
  const hasChildren = !!item.children?.length;
  const active = item.url === pathname;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <Link
          href={hasChildren ? "#" : (item.url ?? "/")}
          onClick={
            hasChildren
              ? (e) => {
                  e.preventDefault();
                  setOpen((p) => !p);
                }
              : undefined
          }
          className="group flex flex-1 items-center gap-3 py-4"
        >
          {item.icon && (
            <DynamicIcon
              name={item.icon}
              className={`size-5 shrink-0 transition-colors ${
                active ? "text-black" : "text-gray-400 group-hover:text-black"
              }`}
            />
          )}
          <span
            className={`text-base transition-colors ${
              active
                ? "font-semibold text-black"
                : "text-gray-700 group-hover:text-black"
            }`}
          >
            {item.title}
          </span>
        </Link>

        {hasChildren && (
          <button
            onClick={() => setOpen((p) => !p)}
            aria-label="نمایش زیرمنو"
            aria-expanded={open}
            className="flex size-8 shrink-0 items-center justify-center rounded-md bg-gray-50 text-gray-500 transition-colors hover:bg-gray-100 hover:text-black"
          >
            <span className="relative block size-2.5">
              <span className="absolute top-1/2 left-0 h-[1.5px] w-full -translate-y-1/2 bg-current rounded-full" />
              <span
                className={`absolute top-0 left-1/2 h-full w-[1.5px] -translate-x-1/2 bg-current rounded-full transition-transform duration-300 ${
                  open ? "scale-y-0" : "scale-y-100"
                }`}
              />
            </span>
          </button>
        )}
      </div>

      {hasChildren && (
        <div
          className={`grid transition-all duration-300 ease-out ${
            open
              ? "grid-rows-[1fr] opacity-100 mb-2"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="mr-6 flex flex-col gap-1 border-r-2 border-gray-100 pr-3">
              {item.children!.map((child) => (
                <SubItem
                  key={child.id}
                  item={child}
                  active={child.url === pathname}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const menus = useMenuStore((state) => state.menus);

  const header_menu = menus.find((i) => i.name === "header_menu");
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="flex py-4.5 items-center justify-between px-6 bg-white">
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="باز کردن منو"
          className="flex size-11 cursor-pointer items-center justify-center rounded-xl bg-gray-50/80 text-gray-800 transition-all hover:bg-gray-100 active:scale-95"
        >
          <MenuIcon size={22} strokeWidth={1.5} />
        </button>

        <Link href="/" className="flex items-center">
          <Image
            src={Logo}
            alt="Vexa logo"
            width={70}
            className="h-auto object-contain"
            loading="lazy"
          />
        </Link>
      </header>

      <div
        className={`fixed inset-0 z-100 flex flex-col bg-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-20 shrink-0 items-center justify-between px-6 border-b border-gray-50">
          <Image
            src={Vexa}
            alt="Vexa"
            height={24}
            className="w-auto object-contain"
          />

          <button
            onClick={() => setMenuOpen(false)}
            aria-label="بستن منو"
            className="flex size-11 cursor-pointer items-center justify-center rounded-xl bg-gray-50/80 text-gray-800 transition-all hover:bg-gray-100 active:scale-95"
          >
            <X size={22} strokeWidth={1.5} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-4">
          <div className="flex flex-col">
            {header_menu?.items?.map((item, i) => (
              <div
                key={item.id}
                style={{
                  transitionDelay: menuOpen ? `${i * 50 + 100}ms` : "0ms",
                }}
                className={`border-b border-gray-50 transition-all duration-500 ease-out last:border-0 ${
                  menuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                <MenuItemRow item={item} pathname={pathname} />
              </div>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
