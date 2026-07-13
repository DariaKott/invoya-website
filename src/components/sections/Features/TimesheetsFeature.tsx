import Image from "next/image";

import styles from "./Features.module.scss";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function TimesheetsFeature() {
  return (
    <section className={`${styles.row} ${styles.reverse}`}>
      <div className={styles.featureContent}>
        <div className={styles.featureHeading}>
          <div className={`${styles.featureIcon} ${styles.timeIcon}`} aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              className={styles.featureIconSvg}
              focusable="false"
            >
              <circle cx="12" cy="12" r="8" />
              <path d="M12 7v5l3 2" />
            </svg>
          </div>

          <h2 className={styles.featureTitle}>
            Track billable hours, then bill them
          </h2>
        </div>

        <p className={styles.featureDescription}>
          Start the timer and keep working. When it&apos;s time to invoice, fill
          the invoice straight from your timesheets — records are grouped by
          service, so each service becomes a single line with its hours
          totalled, not forty stopwatch entries your client has to wade through.
          Minimum durations and round-to increments are built in, so hours are
          billed the way you actually charge for them.
        </p>
      </div>

      <div className={styles.timesheetsVisual}>
        <div className={styles.ipadTimesheetsWrapper}>
          <Image
            src={`${basePath}/images/screenshots/ipad_landscape_timesheets.png`}
            alt="Invoya timesheets on iPad"
            width={2752}
            height={2064}
            className={styles.ipadTimesheetsImage}
          />
        </div>

        <div className={styles.iphoneTimesheetsWrapper}>
          <Image
            src={`${basePath}/images/screenshots/iphone_timesheets.png`}
            alt="Invoya running timer on iPhone"
            width={1320}
            height={2868}
            className={styles.iphoneTimesheetsImage}
          />
        </div>
      </div>
    </section>
  );
}
