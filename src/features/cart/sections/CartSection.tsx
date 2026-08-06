import Image from "next/image";
import EmptyBasket from "@public/images/empty-basket.png";
import { Button } from "@/components/Button";
import { ArrowLeft } from "lucide-react";

const CartSection = () => {
  return (
    <section className={"px-6 pt-6"}>
      <h2 className={"text-gray-700 font-bold text-lg"}>سبد خرید</h2>
      <div className={"mt-40 flex flex-col gap-4 justify-center items-center"}>
        <Image
          src={EmptyBasket}
          alt={""}
          style={{ width: "150px", height: "auto" }}
        />
        <div className={"flex flex-col items-center justify-center"}>
          <h3 className={"font-medium text-gray-900"}>
            سبد خرید شما خالی است!
          </h3>
          <p className={"text-gray-600 text-[13px] mt-1.5"}>
            نگاهی به محصولات و استایل های ما بیندازید.
          </p>
        </div>
        <Button className={"rounded-none"} rightIcon={<ArrowLeft />}>
          شروع خرید
        </Button>
      </div>
    </section>
  );
};

export default CartSection;