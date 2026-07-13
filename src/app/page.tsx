import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { Container } from "@/components/ui/Container/Container";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <Container>
          <section className={styles.intro} aria-labelledby="home-title">
            <h1 id="home-title">Invoya — Invoicing without the headache</h1>
            <p>
              A native invoicing and time-tracking app for Mac, iPhone and iPad.
              Final landing content, product sections and screenshots will be
              added later.
            </p>
          </section>
        </Container>
      </main>

      <Footer />
    </>
  );
}
