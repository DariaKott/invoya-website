"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Container } from "@/components/ui/Container/Container";

import styles from "./Header.module.scss";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <Container>
        <div className={styles.inner}>
          <Link className={styles.logo} href="/" aria-label="Invoya home">
            <Image
              src={`${basePath}/images/logo/logo-header.svg`}
              alt="Invoya"
              width={650}
              height={560}
              priority
              className={styles.logoImage}
            />
          </Link>

          <nav className={styles.nav} aria-label="Main navigation">
            <a href="#features">Features</a>
            <a href="#screenshots">Screenshots</a>
            <Link href="/privacy/">Privacy</Link>
          </nav>

          <a className={styles.downloadLink} href="#download">
            Download
          </a>
        </div>
      </Container>
    </header>
  );
}
