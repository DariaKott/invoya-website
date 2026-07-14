import Image from "next/image";
import Link from "next/link";

import { APP_STORE_URL, MAC_APP_STORE_URL } from "@/constants/links";

import styles from "./Features.module.scss";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function CTAFeature() {
  return (
    <section className={styles.ctaSection} id="download">
      <h2 className={styles.ctaTitle}>Free to start</h2>

      <p className={styles.ctaDescription}>
        Invoicing is free — no subscription, no trial countdown, no signup wall.
        Timesheets are available as a paid add-on for professionals who bill by
        the hour.
      </p>

      <div className={styles.ctaButtons}>
        <a
          href={APP_STORE_URL}
          className={styles.ctaButton}
          aria-label="Download Invoya for iPhone and iPad on the App Store"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={`${basePath}/images/badges/app-store-badge.svg`}
            alt="Download on the App Store"
            width={168}
            height={56}
            className={styles.ctaBadge}
          />
        </a>

        <a
          href={MAC_APP_STORE_URL}
          className={styles.ctaButton}
          aria-label="Download Invoya for Mac on the Mac App Store"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={`${basePath}/images/badges/mac-app-store-badge.svg`}
            alt="Download on the Mac App Store"
            width={190}
            height={56}
            className={styles.ctaBadge}
          />
        </a>
      </div>

      <div className={styles.ctaNote}>
        Invoya is built by one person — no company, no investors, no growth
        target that your data has to feed. That is why there is no account to
        create and nothing to upsell you, and why the person who answers{" "}
        <Link href="/support/">support</Link> is the person who wrote the code.
      </div>
    </section>
  );
}
