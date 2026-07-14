import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { Features } from "@/components/sections/Features/Features";
import { Hero } from "@/components/sections/Hero/Hero";

import { openGraphImage, siteName, twitterImage } from "./seo";

const pageTitle = "Invoya — Invoicing without the headache";
const pageDescription =
  "Invoya is a native invoicing and time-tracking app for Mac, iPhone and iPad. Build PDF invoices, track billable hours and sync privately through iCloud.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/",
    siteName,
    locale: "en_US",
    type: "website",
    images: [openGraphImage],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [twitterImage],
  },
};

const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Invoya",
  applicationCategory: "BusinessApplication",
  operatingSystem: "macOS, iOS, iPadOS",
  description: pageDescription,
  url: "https://invoya.app/",
  creator: {
    "@type": "Person",
    name: "Aleksandr Gordienko",
  },
};

const serializeJsonLd = (data: object) => JSON.stringify(data).replace(/</g, "\\u003c");

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(softwareApplicationJsonLd),
        }}
      />

      <Header />

      <main>
        <Hero />
        <Features />
      </main>

      <Footer />
    </>
  );
}
