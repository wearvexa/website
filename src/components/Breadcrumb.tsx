import Link from "next/link";
import { ChevronLeft } from "lucide-react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
};

const Breadcrumb = ({ items, className = "" }: BreadcrumbProps) => {
  if (!items.length) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center justify-start ${className}`}
    >
      <ol className="flex flex-wrap items-center gap-2 text-sm md:text-base">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li
              key={`${item.label}-${index}`}
              className="flex items-center gap-2"
            >
              {!isLast && item.href ? (
                <Link
                  href={item.href}
                  className="text-neutral-400 transition-colors hover:text-neutral-700"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={
                    isLast ? "font-medium text-black" : "text-neutral-400"
                  }
                >
                  {item.label}
                </span>
              )}

              {!isLast && (
                <ChevronLeft
                  className="h-4 w-4 text-neutral-300"
                  strokeWidth={1.75}
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
