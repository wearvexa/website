import { MenuIcon, SearchIcon, ShoppingBasketIcon, User } from "lucide-react";
import Image from "next/image";
import Logo from "@public/logo/typography-black.png";
import { toPersianDigits } from "@/lib/toPersianDigits";

const Header = () => {
  return (
    <>
      <header
        className={"h-25 w-full container flex items-center justify-between"}
      >
        <div className={"flex gap-3 items-center"}>
          <button
            className={
              "size-10 flex justify-center items-center active:bg-gray-100 rounded-lg ml-1 cursor-pointer transition-all duration-100"
            }
          >
            <MenuIcon size={25} />
          </button>
          <Image src={Logo} alt={"Vexa Logo"} width={95} />
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className={
            "border-b-2 border-gray-300 has-focus-visible:border-b-black transition-all duration-100 flex w-85 pb-0.75"
          }
        >
          <button
            className={
              "flex justify-center items-center size-10 cursor-pointer shrink-0 ml-2"
            }
          >
            <SearchIcon size={30} strokeWidth={1.2} />
          </button>
          <input
            type="text"
            className={
              "focus-visible:outline-none placeholder:text-sm placeholder:text-gray-500 w-full"
            }
            placeholder={"جستجو..."}
          />
        </form>

        <div className={"h-full flex items-center justify-center gap-3"}>
          <button
            className={
              "relative bg-gray-100 size-12 w-13 rounded-lg flex justify-center items-center cursor-pointer transition-all duration-100 active:scale-95"
            }
          >
            <ShoppingBasketIcon className={"text-gray-800"} strokeWidth={1.5} />
            <span
              className={
                "size-4 bg-red-600 rounded-full text-sm text-white leading-0 flex items-center justify-center absolute -top-1 -right-1"
              }
            >
              {toPersianDigits(0)}
            </span>
          </button>
          <button
            className={
              "bg-gray-100 size-12 w-13 rounded-lg flex justify-center items-center cursor-pointer transition-all duration-100 active:scale-95"
            }
          >
            <User className={"text-gray-800"} strokeWidth={1.5} />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
