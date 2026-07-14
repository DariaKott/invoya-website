import Image from "next/image";

import styles from "./Features.module.scss";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function PrivacyFeature() {
  return (
    <section className={styles.row}>
      <div className={styles.featureContent}>
        <div className={styles.featureHeading}>
          <div
            className={`${styles.featureIcon} ${styles.privacyIcon}`}
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 24 24"
              className={styles.featureIconSvg}
              focusable="false"
            >
              <path d="M7.5 10.5h9v8h-9z" />
              <path d="M9 10.5V8.25a3 3 0 0 1 6 0v2.25" />
              <path d="M12 14v1.75" />
            </svg>
          </div>

          <h2 className={styles.featureTitle}>
            Your data never leaves your devices
          </h2>
        </div>

        <p className={styles.featureDescription}>
          There is no Invoya account, because there is no Invoya server. <br />
          <br /> Your invoices, clients and hours live on your devices and sync
          through your own private iCloud database, which only you can read.{" "}
          <br />
          <br /> No analytics, no telemetry, no third parties — the app works
          offline, because it has nowhere else to go.
        </p>
      </div>

      <div className={styles.privacyVisual}>
        <Image
          src={`${basePath}/images/screenshots/cloud.png`}
          alt="Invoya data stays in your private iCloud"
          width={700}
          height={520}
          className={styles.cloudImage}
        />
      </div>
    </section>
  );
}
