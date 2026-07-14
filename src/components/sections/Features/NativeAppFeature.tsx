import Image from "next/image";

import styles from "./Features.module.scss";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function NativeAppFeature() {
  return (
    <section className={`${styles.row} ${styles.reverse}`}>
      <div className={styles.featureContent}>
        <div className={styles.featureHeading}>
          <div
            className={`${styles.featureIcon} ${styles.nativeIcon}`}
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 24 24"
              className={styles.featureIconSvg}
              focusable="false"
            >
              <path d="M12 3.5c.8-1 2.2-1.7 3.4-1.7.1 1.4-.4 2.8-1.2 3.7-.8.9-2.1 1.6-3.3 1.5-.2-1.3.3-2.6 1.1-3.5Z" />
              <path d="M17.8 12.8c0-2.5 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.8-2-1.6-.2-3.1 1-3.9 1-.8 0-2-1-3.3-1-1.7 0-3.3 1-4.2 2.5-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.3 2.5 1.3-.1 1.8-.8 3.4-.8 1.6 0 2 .8 3.4.8 1.4 0 2.3-1.2 3.2-2.5 1-1.4 1.4-2.8 1.4-2.9-.1 0-3-.9-3-3.9Z" />
            </svg>
          </div>

          <h2 className={styles.featureTitle}>
            Mac, iPhone and iPad — one native app
          </h2>
        </div>

        <p className={styles.featureDescription}>
          Written for Apple platforms rather than wrapped from a website. Start
          an invoice on the Mac, finish it on the iPad, check an hour on your
          iPhone. Available in several languages.
        </p>
      </div>

      <div className={styles.nativeVisual}>
        <Image
          src={`${basePath}/images/screenshots/one-app-dev-with-app.png`}
          alt="Invoya running on Mac, iPad and iPhone"
          width={1536}
          height={1024}
          className={styles.nativeImage}
        />
      </div>
    </section>
  );
}
