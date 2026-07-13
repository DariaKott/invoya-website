import Image from "next/image";

import styles from "./Features.module.scss";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function CTAFeature() {
  return (
    <section className={styles.ctaSection}>
      <h2 className={styles.ctaTitle}>Free to start</h2>

      <p className={styles.ctaDescription}>
        Invoicing is free — no subscription, no trial countdown, no signup wall.
        Timesheets are available as a paid add-on for professionals who bill by
        the hour.
      </p>

      <div className={styles.ctaButtons}>
        <a
          href="#"
          className={styles.ctaButton}
          aria-label="Download Invoya for iPhone and iPad on the App Store"
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
          href="#"
          className={styles.ctaButton}
          aria-label="Download Invoya for Mac on the Mac App Store"
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
    </section>
  );
}
