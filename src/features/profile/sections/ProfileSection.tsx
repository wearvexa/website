"use client";

import { PenLine } from "lucide-react";
import { toPersianDigits } from "@/lib/toPersianDigits";
import { useMeStore } from "@/stores/useMeStore";

const ProfileSection = () => {
  const me = useMeStore((state) => state.me);

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
                "size-8 flex justify-center items-center rounded-full active:bg-white"
              }
            >
              <PenLine size={16} className={"text-gray-700"} />
            </button>
          </div>
        </div>
      </div>
      <div className={"flex flex-col"}>
        <button>
          <div></div>
        </button>
      </div>
    </section>
  );
};

export default ProfileSection;
