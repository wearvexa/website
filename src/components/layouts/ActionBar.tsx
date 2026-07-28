"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LayoutGrid, Heart, ShoppingBag, User } from "lucide-react";

const items = [
  { href: "/", label: "خانه", icon: Home },
  { href: "/shop", label: "فروشگاه", icon: LayoutGrid },
  { href: "/wishlist", label: "علاقه‌مندی", icon: Heart },
  { href: "/cart", label: "سبد", icon: ShoppingBag },
  { href: "/login", label: "حساب", icon: User },
];

const ActionBar = () => {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-white/95 backdrop-blur-sm border-t border-neutral-200">
      <nav className="mx-auto flex h-16 max-w-md items-center justify-between px-3 pb-[env(safe-area-inset-bottom)]">
        {items.map(({ href, label, icon: Icon }) => {
          const active = isActive(href);

          return (
            <Link
              key={href}
              href={href}
              className="flex flex-1 flex-col items-center justify-center gap-1"
            >
              <div className="relative flex items-center justify-center">
                {active && (
                  <span className="absolute -top-2 h-1 w-6 rounded-full bg-black" />
                )}
                <Icon
                  className={`h-5 w-5 transition-colors ${
                    active ? "text-black" : "text-neutral-400"
                  }`}
                  strokeWidth={1.75}
                />
              </div>

              <span
                className={`text-[11px] transition-colors ${
                  active ? "text-black" : "text-neutral-400"
                }`}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default ActionBar;
