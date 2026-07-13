import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { InfoPage } from "@/components/layout/InfoPage/InfoPage";

export const metadata: Metadata = {
  title: "Support | Invoya",
  description:
    "Get help with Invoya, iCloud sync, timesheets, purchases and bug reports.",
};

export default function SupportPage() {
  return (
    <>
      <Header />

      <InfoPage
        title="Support"
        subtitle="Questions, problems and bug reports — I read every one."
      >
        <section>
          <h2>Getting in touch</h2>

          <p>
            Invoya is made by one developer, so support is me. There is no
            ticket queue and no first-line script — the person who reads your
            message is the person who wrote the code.
          </p>

          <p>
            Support runs by email. The best way to reach me is from Settings
            inside the Invoya app — the message it composes carries diagnostic
            information about your device and app version, which usually turns a
            long back-and-forth into a single reply. Everything attached is
            technical; your invoices, clients and hours stay on your device, as
            always.
          </p>

          <p>
            If you can&apos;t open the app, write to me directly at the address
            at the bottom of this page. Please mention which device you&apos;re
            on and what you were doing when things went wrong.
          </p>
        </section>

        <section>
          <h2>Where is my data stored?</h2>

          <p>
            On your device. Invoya has no account and no server, so nothing you
            create is sent to me. If you turn on iCloud, your data syncs through
            your own private iCloud database — readable only by you. See the{" "}
            <Link href="/privacy/">privacy policy</Link> for the details.
          </p>
        </section>

        <section>
          <h2>My Mac and my iPhone aren&apos;t showing the same data</h2>

          <p>
            Sync runs through iCloud, so both devices need to be signed in to
            the same Apple Account with iCloud enabled for Invoya, and to have
            been online recently. If they are and the data still differs, write
            in from Settings — the diagnostics tell me what iCloud is reporting
            on that device, which is exactly what I need to see.
          </p>
        </section>

        <section>
          <h2>Does Invoya work offline?</h2>

          <p>
            Yes. The app has nowhere to phone home to, so everything works with
            no connection at all. iCloud sync catches up when you&apos;re back
            online.
          </p>
        </section>

        <section>
          <h2>How do I turn tracked hours into an invoice?</h2>

          <p>
            Track your time as you work, then fill the invoice from your
            timesheets. Your timesheet records are grouped by service, so each
            service becomes a single invoice line with its hours totalled — not
            one line per record. Your minimum durations and rounding increments
            are applied along the way, so you don&apos;t retype anything.
          </p>
        </section>

        <section>
          <h2>What costs money?</h2>

          <p>
            Invoicing is free — no subscription and no signup. Timesheets are a
            paid add-on, bought through the App Store. Purchases and refunds are
            handled by Apple; if you need a refund, request it through Apple&apos;s{" "}
            <a
              href="https://reportaproblem.apple.com/"
              target="_blank"
              rel="noreferrer"
            >
              Report a Problem page
            </a>
            .
          </p>
        </section>

        <section>
          <h2>I bought Timesheets but don&apos;t see it</h2>

          <p>
            Purchases are tied to your Apple Account, so make sure you&apos;re
            signed in with the same one you bought with, then restore purchases
            from Settings in the app. If it still doesn&apos;t appear, get in
            touch from Settings and I&apos;ll sort it out.
          </p>
        </section>

        <section>
          <h2>Which devices does Invoya run on?</h2>

          <p>
            Mac, iPhone and iPad — one native app, not a website in a wrapper.
            The interface is available in several languages.
          </p>
        </section>

        <section>
          <h2>Found a bug, or want a feature?</h2>

          <p>
            Send it from Settings in the app. Bug reports arrive with
            diagnostics attached, which means I can usually reproduce the
            problem instead of guessing at it. Feature requests are welcome the
            same way — they genuinely shape what gets built next, and with one
            person deciding the roadmap, a good idea can ship in the next
            release.
          </p>
        </section>

        <section>
          <h2>Email me</h2>

          <p>
            <a href="mailto:support@invoya.app">support@invoya.app</a>
          </p>
        </section>
      </InfoPage>

      <Footer />
    </>
  );
}
