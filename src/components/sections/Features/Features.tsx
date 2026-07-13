import { Container } from "@/components/ui/Container/Container";

import { InvoiceFeature } from "./InvoiceFeature";
import { PrivacyFeature } from "./PrivacyFeature";
import { TimesheetsFeature } from "./TimesheetsFeature";

import styles from "./Features.module.scss";

export function Features() {
  return (
    <section className={styles.features} id="features">
      <Container>
        <div className={styles.panel}>
          <InvoiceFeature />
          <TimesheetsFeature />
          <PrivacyFeature />

          <section className={`${styles.row} ${styles.reverse}`}>
            <div className={styles.contentPlaceholder}></div>
            <div className={styles.visualPlaceholder}></div>
          </section>
        </div>
      </Container>
    </section>
  );
}
