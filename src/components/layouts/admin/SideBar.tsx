'use client'

import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathname = usePathname()

  return (
    <aside
      dir="rtl"
      className="flex h-screen w-64 flex-col border-l border-gray-200 bg-white dark:border-theme-dark-border dark:bg-theme-dark-white"
    >
      <div className="border-b border-gray-200 px-5 h-16 flex items-center">
        <Link href="/public" className="flex items-center gap-3">
          <img src="/logo/fav-bg-black.png" alt="logo" className="size-10 object-cover" />

          <div>
            <h2 className="font-bold text-zinc-900">وکسا</h2>

            <p className="text-xs text-zinc-500">پنل ادمین سایت فروشگاهی وکسا</p>
          </div>
        </Link>
      </div>

      <div className="hide-scrollbar flex-1 overflow-y-auto px-3 py-4">
        <div className="mb-5">
          <Link
            href={"#"}
            className={`
                  relative flex h-9 items-center gap-2 rounded-md px-3
                  text-sm transition-colors

                  ${
                    pathname === "/"
                      ? "bg-(--theme-primary)/10 text-(--theme-primary)"
                      : "text-zinc-700 hover:bg-zinc-100"
                  }
                `}
          >
            {pathname === "/" && (
              <span
                className="absolute right-0 top-1 bottom-1 w-0.5 rounded-l-full"
              />
            )}

            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-zinc-100">
              <Home size={20} color="#0ea5e9" />
            </span>

            <span>داشبورد</span>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
