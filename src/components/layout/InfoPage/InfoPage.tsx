import type { ReactNode } from "react";

import { Container } from "@/components/ui/Container/Container";

import styles from "./InfoPage.module.scss";

type InfoPageProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function InfoPage({ title, subtitle, children }: InfoPageProps) {
  return (
    <main className={styles.page}>
      <Container>
        <article className={styles.panel}>
          <header className={styles.heading}>
            <h1 className={styles.title}>{title}</h1>

            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </header>

          <div className={styles.content}>{children}</div>
        </article>
      </Container>
    </main>
  );
}
