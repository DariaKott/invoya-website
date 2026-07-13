import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.scss";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Invoya — Invoicing without the headache",
  description: "A native invoicing and time-tracking app for Mac, iPhone and iPad.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
