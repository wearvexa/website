import Link from "next/link";
import Image from "next/image";
import { Heart, Flame, ShoppingBag } from "lucide-react";

type ProductCardProps = {
  title: string;
  slug: string;
  image: string;
  price: number;
  discountPrice?: number | null;
  isHot?: boolean;
  isNew?: boolean;
  isSoldOut?: boolean;
  discountPercent?: number;
  brand?: string;
  className?: string;
};

const formatPrice = (price: number) =>
  new Intl.NumberFormat("fa-IR").format(price);

const ProductCard = ({
  title,
  slug,
  image,
  price,
  discountPrice,
  isHot = false,
  isNew = false,
  isSoldOut = false,
  discountPercent,
  brand,
  className = "",
}: ProductCardProps) => {
  const hasDiscount =
    !!discountPrice && discountPrice > 0 && discountPrice < price;

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-white ${className}`}
    >
      <button
        type="button"
        className="absolute left-3 top-3 z-1 active:scale-95 cursor-pointer flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/90 text-neutral-700 backdrop-blur-sm transition hover:bg-white hover:text-black"
      >
        <Heart className="h-4 w-4" strokeWidth={1.8} />
      </button>

      <Link href={`/product/${slug}`} className="block">
        <div className="relative overflow-hidden rounded-2xl bg-neutral-100">
          <div className="relative aspect-3/4 w-full">
            <Image
              src={image}
              alt={title}
              fill
              className={`object-cover transition duration-500 group-hover:scale-[1.03] ${
                isSoldOut ? "grayscale-[0.35] opacity-80" : ""
              }`}
            />
          </div>

          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/5 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

          <div className="absolute right-3 top-3 flex flex-col items-start gap-2">
            {isHot && (
              <span className="inline-flex items-center gap-1 rounded-full border border-black/10 bg-white/90 px-2.5 py-1 text-[10px] font-medium tracking-[0.12em] text-black backdrop-blur-sm">
                <Flame className="h-3 w-3" strokeWidth={1.8} />
                HOT
              </span>
            )}

            {isNew && (
              <span className="rounded-full border border-black/10 bg-white/90 px-2.5 py-1 text-[10px] font-medium tracking-[0.12em] text-black backdrop-blur-sm">
                NEW
              </span>
            )}

            {hasDiscount && (
              <span className="rounded-full bg-black px-2.5 py-1 text-[10px] font-medium tracking-[0.08em] text-white">
                {discountPercent ? `${discountPercent}٪-` : "SALE"}
              </span>
            )}

            {isSoldOut && (
              <span className="rounded-full border border-neutral-300 bg-white/95 px-2.5 py-1 text-[10px] font-medium tracking-[0.08em] text-neutral-700">
                ناموجود
              </span>
            )}
          </div>

          <div className="absolute bottom-3 left-3 right-3 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <button
              type="button"
              disabled={isSoldOut}
              className="flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-white/95 text-sm font-medium text-black shadow-sm backdrop-blur-sm transition hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:bg-white/80 disabled:text-neutral-400"
            >
              <ShoppingBag className="h-4 w-4" strokeWidth={1.8} />
              {isSoldOut ? "ناموجود" : "مشاهده محصول"}
            </button>
          </div>
        </div>
      </Link>

      <div className="px-1 pb-1 pt-4">
        {brand && (
          <span className="mb-1 block text-[11px] tracking-[0.16em] text-neutral-400 uppercase">
            {brand}
          </span>
        )}

        <Link href={`/product/${slug}`} className="block">
          <h3 className="line-clamp-2 text-sm leading-6 text-black transition-colors group-hover:text-neutral-700 md:text-[15px]">
            {title}
          </h3>
        </Link>

        <div className="mt-2 flex items-end justify-between gap-3">
          <div className="flex flex-col items-start">
            {hasDiscount ? (
              <>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-black md:text-base">
                    {formatPrice(discountPrice)} تومان
                  </span>
                </div>
                <span className="text-xs text-neutral-400 line-through">
                  {formatPrice(price)} تومان
                </span>
              </>
            ) : (
              <span className="text-sm font-medium text-black md:text-base">
                {formatPrice(price)} تومان
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
