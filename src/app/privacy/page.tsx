import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { InfoPage } from "@/components/layout/InfoPage/InfoPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Invoya",
  description:
    "Learn how Invoya stores and protects your data and how the Invoya website handles analytics.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <InfoPage title="Privacy Policy" subtitle="Last updated 12 July 2026">
        <section>
          <h2>The short version</h2>
          <p>
            Invoya app does not collect your data. There is no Invoya account
            and no Invoya server. I cannot see your invoices, your clients or
            your hours, because they never reach me. This website keeps an
            anonymous count of visits; the app itself reports nothing
            whatsoever.
          </p>
        </section>

        <section>
          <h2>What the app stores, and where</h2>
          <p>
            Everything you create in Invoya — invoices, clients, timesheets and
            settings — is stored on your device. If you enable iCloud, that data
            syncs through your own private iCloud database, which is tied to
            your Apple Account and readable only by you. Apple&apos;s handling
            of iCloud data is covered by{" "}
            <a
              href="https://www.apple.com/legal/privacy/"
              target="_blank"
              rel="noreferrer"
            >
              Apple&apos;s Privacy Policy
            </a>
            .
          </p>
        </section>

        <section>
          <h2>What the app collects</h2>
          <p>
            Nothing. The app contains no analytics, no telemetry, no advertising
            and no tracking of any kind. It does not ask you to sign up, and it
            works offline. Nothing you do inside Invoya is measured or reported
            to anyone — including me.
          </p>
        </section>

        <section>
          <h2>Purchases</h2>
          <p>
            Paid features are sold through the App Store. Purchases and receipts
            are handled entirely by Apple; I never see your payment details.
            Apple provides me only with anonymous, aggregated sales reports.
          </p>
        </section>

        <section>
          <h2>This website</h2>
          <p>
            This website — and only this website, never the app — counts
            visitors using Plausible Analytics. It is a privacy-focused,
            EU-hosted analytics tool that I serve from my own domain. It sets no
            cookies, stores no personal data, and assigns you no identifier: it
            counts page views in aggregate, so I can see how many people visited
            and which pages they read. Visitors are not profiled, not followed
            across websites, and not identifiable — by me or by anyone else.
            There is no way to link a visit here to anything you do inside the
            app, because the app reports nothing at all.
          </p>
        </section>

        <section>
          <h2>Children</h2>
          <p>
            Invoya is a business tool intended for adults. It is not directed at
            children and collects no personal data from anyone.
          </p>
        </section>

        <section>
          <h2>Changes</h2>
          <p>
            If this policy changes, the updated version will be published on
            this page with a new date above.
          </p>
        </section>

        <section>
          <h2>Who I am</h2>
          <p>
            Invoya is made by one developer — Aleksandr Gordienko, NIF
            Z3304393B, Av. Jaume I 95 1r, 08226 Terrassa, Spain. I am the data
            controller for this website. There is no company behind me, no
            investors, and nobody whose business model depends on your data.
          </p>

          <p>
            Questions about privacy, or about anything on this page? Write to{" "}
            <a href="mailto:support@invoya.app">support@invoya.app</a>.
          </p>
        </section>
      </InfoPage>

      <Footer />
    </>
  );
}
