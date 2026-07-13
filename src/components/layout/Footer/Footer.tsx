import { Container } from "@/components/ui/Container/Container";

import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <p className={styles.copy}>© 2026 Invoya</p>

        <nav className={styles.nav} aria-label="Footer navigation">
          <a href="#">Support</a>
          <a href="/privacy/">Privacy</a>
        </nav>
      </Container>
    </footer>
  );
}
