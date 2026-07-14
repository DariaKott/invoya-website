import Image from "next/image";

import { Container } from "@/components/ui/Container/Container";
import { APP_STORE_URL, MAC_APP_STORE_URL } from "@/constants/links";

import styles from "./Hero.module.scss";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.content}>
            <p className={styles.eyebrow}>Invoicing without the headache</p>

            <h1 className={styles.title}>
              <span className={styles.titleAccent}>Invoya</span> - Invoicing
              without the headache
            </h1>

            <p className={styles.description}>
              A native invoicing and time-tracking app for Mac, iPhone and iPad.
              Build PDF invoices, track billable hours, and turn your timesheets
              into bills — with no account, no signup and no tracking.
            </p>

            <div className={styles.storeLinks}>
              <a
                href={APP_STORE_URL}
                className={styles.storeLink}
                aria-label="Download Invoya for iPhone and iPad on the App Store"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={`${basePath}/images/badges/app-store-badge.svg`}
                  alt="Download on the App Store"
                  width={168}
                  height={56}
                  className={styles.storeBadge}
                />
              </a>

              <a
                href={MAC_APP_STORE_URL}
                className={styles.storeLink}
                aria-label="Download Invoya for Mac on the Mac App Store"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={`${basePath}/images/badges/mac-app-store-badge.svg`}
                  alt="Download on the Mac App Store"
                  width={190}
                  height={56}
                  className={styles.storeBadge}
                />
              </a>
            </div>
          </div>

          <div className={styles.visual} aria-hidden="true">
            <div className={styles.visualFrame}>
              <Image
                className={styles.visualImage}
                src={`${basePath}/images/devices/hero_devices.webp`}
                alt=""
                width={1536}
                height={1024}
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
