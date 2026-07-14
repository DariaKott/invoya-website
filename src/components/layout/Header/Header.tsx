"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Container } from "@/components/ui/Container/Container";

import styles from "./Header.module.scss";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const sectionLinks = [
  {
    label: "Features",
    hash: "features",
  },
];

const pageLinks = [
  {
    label: "Support",
    href: "/support/",
  },
  {
    label: "Privacy",
    href: "/privacy/",
  },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const normalizedPathname =
    basePath && pathname.startsWith(basePath)
      ? pathname.slice(basePath.length) || "/"
      : pathname;
  const isLandingPage = normalizedPathname === "/";

  const getSectionHref = (hash: string) =>
    isLandingPage ? `#${hash}` : `/#${hash}`;

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

          <div className={styles.navSlot}>
            <nav className={styles.nav} aria-label="Main navigation">
              {sectionLinks.map((link) => (
                <Link key={link.hash} href={getSectionHref(link.hash)}>
                  {link.label}
                </Link>
              ))}

              {pageLinks.map((link) => {
                const isActive = normalizedPathname === link.href;

                return (
                  <Link
                    key={link.href}
                    className={isActive ? styles.active : undefined}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
}
