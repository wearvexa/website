"use client";

import SectionTitle from "@/components/SectionTitle";
import { RefreshCcw } from "lucide-react";
import SmallButton from "@/components/SmallButton";
import { useDashboardSection } from "@/features/admin/dashboard/hooks/DashboardSection.hook";
import VexaLoading from "@/components/VexaLoading";

const DashboardSection = () => {
  const { loading, statistics, refetch } = useDashboardSection();

  if (loading) {
    return <VexaLoading />
  }

  return (
    <section className={"max-w-7xl mx-auto py-6"}>
      <SectionTitle
        title={"داشبورد"}
        description={"اطلاعات کلی و آمار مورد نیاز برای بررسی روند فروش"}
      >
        <SmallButton
          data-tooltip-id={"tooltip"}
          data-tooltip-content={"بروزرسانی"}
          onClick={refetch}
        >
          <RefreshCcw className="rotate-180" size={18} />
        </SmallButton>
      </SectionTitle>
      <div className={"grid grid-cols-4 gap-4"}>
        <article className="bg-white rounded-xl border border-gray-200 flex flex-col justify-between gap-4 p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500">کاربران</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">۰</p>
            </div>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-black">
              آمار
            </span>
          </div>
          <p className="text-sm leading-6 text-gray-500">
            ۰ کاربر جدید در این ماه
          </p>
        </article>
        <article className="bg-white rounded-xl border border-gray-200 flex flex-col justify-between gap-4 p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500">محصولات</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">۰</p>
            </div>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-black">
              آمار
            </span>
          </div>
          <p className="text-sm leading-6 text-gray-500">
            ۰ محصول جدید در این ماه
          </p>
        </article>
        <article className="bg-white rounded-xl border border-gray-200 flex flex-col justify-between gap-4 p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500">فروش</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">۰</p>
            </div>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-black">
              آمار
            </span>
          </div>
          <p className="text-sm leading-6 text-gray-500">
            ۰ فروش در این ماه
          </p>
        </article>
        <article className="bg-white rounded-xl border border-gray-200 flex flex-col justify-between gap-4 p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500">نظرات</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">۰</p>
            </div>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-black">
              آمار
            </span>
          </div>
          <p className="text-sm leading-6 text-gray-500">
            ۰ نظر جدید در این ماه
          </p>
        </article>
      </div>
    </section>
  );
};

export default DashboardSection;
