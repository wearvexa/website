import Image from "next/image";
import Logo from "@public/logo/typography-bold-black.png"
import { ArrowUpLeft } from "lucide-react";
import Model_1 from "@public/images/models/1.jpg"
import Model_2 from "@public/images/models/2.jpg"
import Model_3 from "@public/images/models/3.jpg"

const HomeSection = () => {
  return (
    <section className={"px-5 mt-14 flex flex-col items-center gap-6"}>
      <Image src={Logo} alt={""} loading={"eager"} quality={100} width={320} />
      <div className={"mt-1.5 w-full flex justify-between items-center px-15"}>
        <span className={"text-black text-2xl font-light"}>کالکشن جدید</span>
        <a href={"#"} className={"transition-all duration-200 active:scale-95 rounded-full hover:bg-black hover:text-white cursor-pointer size-12 border border-black flex justify-center items-center"}>
          <ArrowUpLeft strokeWidth={1} className={"mt-0"} />
        </a>
      </div>
      <div className={"grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4"}>
        <a href={"/products"} className={"rounded-xl h-53"}>
          <Image src={Model_1} alt="vexa model one" className={"size-full object-cover rounded-lg"}/>
        </a>
        <a href={"/products"} className={"rounded-xl h-53"}>
          <Image src={Model_2} alt="vexa model one" className={"size-full object-cover rounded-lg"}/>
        </a>
        <a href={"/products"} className={"rounded-xl h-53 hidden sm:inline"}>
          <Image src={Model_3} alt="vexa model one" className={"size-full object-cover rounded-lg"}/>
        </a>
      </div>
    </section>
  );
};

export default HomeSection;
