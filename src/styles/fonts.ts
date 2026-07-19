import localFont from "next/font/local";

const vazir = localFont({
  src: [
    {
      path: "../public/fonts/vazir/",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-vazir",
});

export { vazir };
