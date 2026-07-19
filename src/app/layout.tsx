import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title:
    "وکسا | خرید آنلاین لباس مردانه و زنانه | تیشرت، هودی، شلوار و استایل روز",
  description:
    "فروشگاه اینترنتی وکسا؛ خرید آنلاین تیشرت، هودی، شلوار، پیراهن و جدیدترین لباس‌های مردانه و زنانه با ارسال سریع، پرداخت امن و تضمین کیفیت.",
};

export default function RootLayout({
  children,
}: {
  readonly children: ReactNode;
}) {
  return (
    <html lang="fa" dir={"rtl"}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
