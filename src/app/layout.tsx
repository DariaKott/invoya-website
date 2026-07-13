import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.scss";

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
      <body>{children}</body>
    </html>
  );
}
