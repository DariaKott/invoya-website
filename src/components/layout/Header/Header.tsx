import Link from "next/link";

import { Container } from "@/components/ui/Container/Container";

import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Link className={styles.logo} href="/" aria-label="Invoya home">
          INVOYA
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          <Link href="/#features">Features</Link>
          <Link href="/#screenshots">Screenshots</Link>
          <Link href="/privacy/">Privacy</Link>
        </nav>

        <a className={styles.downloadLink} href="#download">
          Download
        </a>
      </Container>
    </header>
  );
}
