"use client";

import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  LogOut,
  MessageCircleMore,
  PenLine,
  Reply,
  ShoppingBasket,
} from "lucide-react";
import { toPersianDigits } from "@/lib/toPersianDigits";
import { useMeStore } from "@/stores/useMeStore";
import Link from "next/link";
import { clearTokens } from "@services/token-service";
import { useRouter } from "next/navigation";

const ProfileSection = () => {
  const me = useMeStore((state) => state.me);
  const clearMe = useMeStore((state) => state.clearMe);
  const router = useRouter();

  const handleLogout = () => {
    clearTokens()
    clearMe()
    router.replace("/login")
    router.refresh()
  };

  return (
    <section className={""}>
      <div className={"h-30 bg-gray-100 px-6 pt-8"}>
        <div className={"flex justify-between"}>
          <div className={"flex flex-col justify-center items-start gap-2"}>
            <h4 className={"font-medium text-[16px] text-gray-900"}>
              سلام {me?.first_name} جان!
            </h4>
            <p className={"text-sm text-gray-500"}>
              {toPersianDigits(me?.mobile ?? "")}
            </p>
          </div>
          <div className={"flex items-center justify-start"}>
            <button
              className={
                "cursor-pointer size-8 flex justify-center items-center rounded-full active:bg-white"
              }
            >
              <PenLine size={16} className={"text-gray-700"} />
            </button>
          </div>
        </div>
      </div>
      <div className={"flex flex-col"}>
        <Link
          href={"#"}
          className={
            "not-last:border-b border-gray-200 h-16 active:bg-gray-50 flex items-center justify-between px-6"
          }
        >
          <div className={"flex gap-3 text-gray-700"}>
            <ShoppingBasket size={20} strokeWidth={1.5} />
            <h5 className={"font-medium text-[15px]"}>سفارش های من</h5>
          </div>
          <ChevronLeft size={22} className={"text-gray-700"} />
        </Link>
        <Link
          href={"#"}
          className={
            "not-last:border-b border-gray-200 h-16 active:bg-gray-50 flex items-center justify-between px-6"
          }
        >
          <div className={"flex gap-3 text-gray-700"}>
            <MessageCircleMore size={20} strokeWidth={1.5} />
            <h5 className={"font-medium text-[15px]"}>دیدگاه ها</h5>
          </div>
          <ChevronLeft size={22} className={"text-gray-700"} />
        </Link>
        <button
          onClick={handleLogout}
          className={
            "not-last:border-b cursor-pointer bg-red-50/50 border-gray-200 h-16 active:bg-gray-50 flex items-center justify-between px-6"
          }
        >
          <div className={"flex gap-3 text-red-600"}>
            <LogOut size={20} strokeWidth={1.5} />
            <h5 className={"font-medium text-[15px]"}>خروج از حساب کاربری</h5>
          </div>
        </button>
      </div>
    </section>
  );
};

export default ProfileSection;
