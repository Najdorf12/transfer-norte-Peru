// app/layout.js
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi/Satoshi.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi/Satoshi.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi/Satoshi.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi/Satoshi.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi/Satoshi.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});
export const metadata = {
  title: "Transfer Norte",
  description: "Transporte de pasajeros en Máncora",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${roboto.variable} ${satoshi.variable}`}>
      <body className="antialiased bg-zinc-100 font-satoshi">{children}</body>
    </html>
  );
}
