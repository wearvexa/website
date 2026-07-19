import type { Metadata } from "next";
import { ReactNode } from "react";
import { vazir } from "@/styles/fonts";
import "../styles/global.css";

const siteName = "وکسا";
const url = "https://vexa-eight-liard.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(url),

  title: {
    default: "وکسا | خرید آنلاین لباس و تیشرت مردانه و زنانه",
    template: "%s | وکسا",
  },

  description:
    "فروشگاه اینترنتی وکسا؛ خرید آنلاین تیشرت، هودی، شلوار، پیراهن و جدیدترین لباس‌های مردانه و زنانه با ارسال سریع، پرداخت امن و تضمین کیفیت.",

  manifest: "/site.webmanifest",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "fa_IR",
    url,
    siteName,

    title: "وکسا | خرید آنلاین لباس مردانه و زنانه",

    description:
      "خرید آنلاین جدیدترین لباس‌های مردانه و زنانه با تضمین کیفیت، ارسال سریع و پرداخت امن.",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "وکسا",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "وکسا | خرید آنلاین لباس",

    description: "خرید آنلاین لباس مردانه و زنانه از فروشگاه اینترنتی وکسا.",

    images: ["/images/og-image.jpg"],
  },

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

    shortcut: "/favicon.ico",

    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
  },

  other: {
    "theme-color": "#ffffff",
  },
};

export default function RootLayout({
  children,
}: {
  readonly children: ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={vazir.className}>
      <body>{children}</body>
    </html>
  );
}
