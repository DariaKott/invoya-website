import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { Container } from "@/components/ui/Container/Container";

import styles from "./page.module.scss";

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <Container>
          <article className={styles.content}>
            <h1>Privacy Policy</h1>
            <p>
              This is a placeholder Privacy Policy for Invoya. The final policy
              text will be added later.
            </p>
            <p>
              Invoya is intended to be a native invoicing and time-tracking app
              for Mac, iPhone and iPad. Details about data collection, storage
              and processing will be documented before launch.
            </p>
            <p>
              Please check back later for the complete Privacy Policy, including
              contact information and any platform-specific disclosures.
            </p>
          </article>
        </Container>
      </main>

      <Footer />
    </>
  );
}
