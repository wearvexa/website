import Image from "next/image";
import Logo from "@public/logo/typography-black.png"
import { Mail, Phone } from "lucide-react";
import { toPersianDigits } from "@/lib/toPersianDigits";

const Footer = () => {
  return (
    <footer className={""}>
      <div className={"w-full bg-gray-100 px-6 py-8 mt-6"}>
        <Image src={Logo} alt={"vexa logo"} height={40} />
        <p className={"text-gray-800 text-sm mt-1"}>
          سایت و برند فروش لباس و تیشرت مردانه و زنانه
        </p>
        <p
          className={
            "text-gray-800 font-light text-sm text-center leading-6 my-4"
          }
        >
          یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع،
          باکیفیت و دارای قیمت مناسب را در مدت زمان ی کوتاه به دست مشتریان خود
          برساند و ضمانت بازگشت کالا هم داشته باشد.
        </p>
        <div className={"flex items-center justify-around mt-6"}>
          <div
            className={
              "hover:text-rose-500 transition-all duration-200 flex gap-2 items-center"
            }
          >
            <Phone className={"cursor-pointer"} size={23} strokeWidth={1.2} />
            <a href="tel:09332621196" className={"-mb-1"}>
              {toPersianDigits("09030422838")}
            </a>
          </div>
          <div
            className={
              "hover:text-rose-500 transition-all duration-200 flex gap-2 items-center"
            }
          >
            <Mail className={"cursor-pointer"} size={23} strokeWidth={1.2} />
            <a href="mailto:info@vexa.ir" className={"-mb-1"}>
              info@vexa.ir
            </a>
          </div>
        </div>
        <div className={"grid grid-cols-2 gap-6 mt-10"}>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">درباره گیسو</h3>

            <ul className="flex flex-col gap-3 text-sm text-gray-600">
              <li>
                <a href="/blog" className="transition hover:text-black">
                  بلاگ
                </a>
              </li>

              <li>
                <a href="/about-us" className="transition hover:text-black">
                  درباره ما
                </a>
              </li>

              <li>
                <a href="/contact-us" className="transition hover:text-black">
                  ارتباط با ما
                </a>
              </li>

              <li>
                <a href="/wishlist" className="transition hover:text-black">
                  لیست علاقه مندی ها
                </a>
              </li>

              <li>
                <a href="/my-account" className="transition hover:text-black">
                  حساب کاربری من
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">درباره گیسو</h3>

            <ul className="flex flex-col gap-3 text-sm text-gray-600">
              <li>
                <a href="/blog" className="transition hover:text-black">
                  بلاگ
                </a>
              </li>

              <li>
                <a href="/about-us" className="transition hover:text-black">
                  درباره ما
                </a>
              </li>

              <li>
                <a href="/contact-us" className="transition hover:text-black">
                  ارتباط با ما
                </a>
              </li>

              <li>
                <a href="/wishlist" className="transition hover:text-black">
                  لیست علاقه مندی ها
                </a>
              </li>

              <li>
                <a href="/my-account" className="transition hover:text-black">
                  حساب کاربری من
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">درباره گیسو</h3>

            <ul className="flex flex-col gap-3 text-sm text-gray-600">
              <li>
                <a href="/blog" className="transition hover:text-black">
                  بلاگ
                </a>
              </li>

              <li>
                <a href="/about-us" className="transition hover:text-black">
                  درباره ما
                </a>
              </li>

              <li>
                <a href="/contact-us" className="transition hover:text-black">
                  ارتباط با ما
                </a>
              </li>

              <li>
                <a href="/wishlist" className="transition hover:text-black">
                  لیست علاقه مندی ها
                </a>
              </li>

              <li>
                <a href="/my-account" className="transition hover:text-black">
                  حساب کاربری من
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={"flex justify-center items-center mt-6 mb-4 gap-2"}>
        <a href="" className={"text-gray-400 text-sm font-light"}>
          حریم خصوصی
        </a>
        <span className={"text-gray-400"}>|</span>
        <a href="" className={"text-gray-400 text-sm font-light"}>
          قوانین و شرایظ
        </a>
      </div>
      <div className={"flex justify-center items-center mb-25 gap-2"}>
        <a
          href="https://github.com/wearvexa"
          className={"text-gray-400 text-sm font-light"}
        >
          تمامی حقوق متعلق به گروه نرم افزاری وکسا است.
        </a>
      </div>
    </footer>
  );
}

export default Footer