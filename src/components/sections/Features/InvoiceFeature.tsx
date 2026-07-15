import Image from "next/image";

import styles from "./Features.module.scss";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function InvoiceFeature() {
  return (
    <section className={`${styles.row} ${styles.invoiceRow}`} id="screenshots">
      <div className={styles.featureContent}>
        <div className={styles.featureHeading}>
          <div className={styles.featureIcon} aria-hidden="true">
            <svg
              className={styles.featureIconSymbol}
              viewBox="0 0 24 24"
              fill="none"
              focusable="false"
            >
              <path
                d="M7 3.75h7.25L18 7.5v12.75H7V3.75Z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
              />
              <path
                d="M14.25 3.75V7.5H18"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
              />
              <path
                d="M9.5 11h6M9.5 14h6M9.5 17h4"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <h2 className={styles.featureTitle}>Invoices, contracts and PDFs</h2>
        </div>

        <p className={styles.featureDescription}>
          Create an invoice, set its payment terms, and export a clean PDF ready
          to send. Invoya is a real Mac, iPhone and iPad app, so it opens
          instantly and works the way the rest of your system does.
        </p>
      </div>

      <div className={styles.invoiceVisual}>
        <Image
          src={`${basePath}/images/screenshots/feature-pic.webp`}
          alt="Invoya invoice editor and exported PDF"
          width={5906}
          height={3938}
          className={styles.invoiceImage}
        />
      </div>
    </section>
  );
}
