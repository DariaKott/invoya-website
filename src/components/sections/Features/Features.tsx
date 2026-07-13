import { Container } from "@/components/ui/Container/Container";

import { InvoiceFeature } from "./InvoiceFeature";
import { NativeAppFeature } from "./NativeAppFeature";
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
          <NativeAppFeature />
        </div>
      </Container>
    </section>
  );
}
