import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/product/ProductCard";

const ShopSection = () => {
  return (
    <section className={"px-5"}>
      <Breadcrumb
        className={"mt-2 mb-6"}
        items={[
          {
            label: "خانه",
            href: "/",
          },
          {
            label: "فروشگاه",
            href: "/shop",
          },
        ]}
      />

      <div className={"grid grid-cols-2 gap-2"}>

      </div>
    </section>
  );
};

export default ShopSection;
