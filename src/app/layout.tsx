import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import type { ReactNode } from "react";

import { openGraphImage, siteName, siteUrl, twitterImage } from "./seo";

import "./globals.scss";

const siteTitle = "Invoya — Invoicing without the headache";
const siteDescription =
  "A native invoicing and time-tracking app for Mac, iPhone and iPad. Build PDF invoices, track billable hours and sync privately through iCloud.";

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
  metadataBase: new URL(siteUrl),
  applicationName: "Invoya",
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName,
    locale: "en_US",
    type: "website",
    images: [openGraphImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [twitterImage],
  },
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
