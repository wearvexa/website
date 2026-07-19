import type { Metadata } from "next";
import { ReactNode } from "react";
import { vazir } from "@/styles/fonts";
import "../styles/global.css"

export const metadata: Metadata = {
  title:
    "وکسا | خرید آنلاین لباس مردانه و زنانه | تیشرت، هودی، شلوار و استایل روز",
  description:
    "فروشگاه اینترنتی وکسا؛ خرید آنلاین تیشرت، هودی، شلوار، پیراهن و جدیدترین لباس‌های مردانه و زنانه با ارسال سریع، پرداخت امن و تضمین کیفیت.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  readonly children: ReactNode;
}) {
  return (
    <html lang="fa" dir={"rtl"} className={vazir.className}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
