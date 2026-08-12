"use client";

import { Home, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SIDEBAR_ITEMS = [
  {
    path: "/admin",
    title: "داشبورد",
    icon: <Home size={18} />,
  },
  {
    path: "/admin/users",
    title: "کاربران",
    icon: <Users size={18} />,
  },
];

const SideBar = () => {
  const pathname = usePathname();

  return (
    <aside
      dir="rtl"
      className="flex h-screen w-64 flex-col border-l border-gray-200 bg-white"
    >
      <div className="border-b border-gray-200 px-5 h-16 flex items-center">
        <Link href="/public" className="flex items-center gap-3">
          <img
            src="/logo/fav-bg-black.png"
            alt="logo"
            className="size-10 object-cover"
          />

          <div>
            <h2 className="font-bold text-zinc-900">وکسا</h2>

            <p className="text-xs text-zinc-500">
              پنل ادمین سایت فروشگاهی وکسا
            </p>
          </div>
        </Link>
      </div>

      <div className="hide-scrollbar flex-1 overflow-y-auto px-3 py-4">
        <div className="mb-5 space-y-2">
          {SIDEBAR_ITEMS.map((item, index) => (
            <Link
              key={`sidebar_item_${index}`}
              href={item.path}
              className={`
                  relative flex h-9 items-center gap-2 rounded-md px-3
                  text-sm transition-colors
                  ${
                    pathname === item.path
                      ? "bg-black/10 text-black"
                      : "text-zinc-700 hover:bg-zinc-100"
                  }
                `}
            >
              {pathname === item.path && (
                <span className="absolute right-0 top-1 bottom-1 w-0.5 rounded-l-full bg-black" />
              )}

              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-zinc-100">
                {item.icon}
              </span>

              <span>{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
