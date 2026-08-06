'use client'

import Image from "next/image";
import Logo from "@public/logo/typography-black.png";
import { Mail, Phone } from "lucide-react";
import { toPersianDigits } from "@/lib/toPersianDigits";
import { Menu } from "@/types/menu";
import Link from "next/link";
import { useSettingStore } from "@/stores/useSettingStore";
import { useMenuStore } from "@/stores/useMenuStore";

const Footer = () => {
  const menus = useMenuStore((state) => state.menus);

  const footer_menu = menus.find((i) => i.name === "footer_menu");

  const getSetting = useSettingStore(s => s.getSetting)

  return (
    <footer className="w-full bg-gray-100 mt-10">
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          <div className="md:col-span-5 lg:col-span-4 flex flex-col space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src={Logo}
                alt="vexa logo"
                style={{
                  height: "40px",
                  width: "auto",
                }}
                className="w-auto h-10 object-contain"
              />
            </div>
            <p className="text-gray-900 font-semibold text-sm">
              سایت و برند فروش لباس و تیشرت مردانه و زنانه
            </p>
            <p className="text-gray-600 font-light text-sm leading-7 text-justify">
              یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی
              متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمان ی کوتاه به دست
              مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد.
            </p>

            <div className="flex flex-col gap-3 pt-2">
              <div className="hover:text-gray-500 text-gray-700 transition-all duration-200 flex gap-3 items-center">
                <Phone className="cursor-pointer" size={20} strokeWidth={1.5} />
                <a
                  href={`tel:${getSetting<string>("info.mobile")}`}
                  className="text-sm dir-ltr"
                >
                  {toPersianDigits(getSetting<string>("info.mobile"))}
                </a>
              </div>
              <div className="hover:text-gray-500 text-gray-700 transition-all duration-200 flex gap-3 items-center">
                <Mail className="cursor-pointer" size={20} strokeWidth={1.5} />
                <a href={`mailto:${getSetting<string>("info.mobile")}`} className="text-sm">
                  {getSetting<string>("info.email")}
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footer_menu?.items?.map((item, i1) => (
              <div
                className="flex flex-col space-y-4"
                key={`footer_menu_${i1}`}
              >
                <h3 className="text-gray-900 font-bold text-base border-r-2 border-gray-500 pr-2">
                  {item.title}
                </h3>
                <ul className="flex flex-col gap-3 text-sm text-gray-600">
                  {item?.children?.map((child, i2) => (
                    <li key={`footer_menu_${i1}_item_${i2}`}>
                      <Link
                        href={child.url ?? "#"}
                        className="transition hover:text-gray-500 hover:-translate-x-1 inline-block duration-200"
                      >
                        {child.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-gray-200 my-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex justify-center items-center gap-2">
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-gray-950 text-xs font-light transition"
            >
              حریم خصوصی
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/terms"
              className="text-gray-500 hover:text-gray-950 text-xs font-light transition"
            >
              قوانین و شرایط
            </Link>
          </div>

          <div>
            <a
              href="https://github.com/wearvexa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-950 text-xs font-light transition"
            >
              تمامی حقوق متعلق به گروه نرم افزاری وکسا است.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
