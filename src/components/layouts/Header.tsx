import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Logo from "@public/logo/typography-black.png";

const Header = () => {
  return (
    <>
      <header
        className={"h-18 flex justify-between items-center px-5"}
      >
        <button
          className={
            "size-10 bg-gray-100 flex active:scale-95 justify-center items-center rounded-lg transition-all duration-100 cursor-pointer"
          }
        >
          <MenuIcon className="text-gray-600" size={20} />
        </button>
        <Image src={Logo} alt={"Vexa logo"} width={85} loading={"lazy"} />
      </header>
    </>
  );
};

export default Header;
