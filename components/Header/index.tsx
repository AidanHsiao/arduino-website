import { useEffect, useState } from "react";
import styles from "./header.module.scss";

export default function Header() {
  const [sidebarPadding, setSidePadding] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setSidePadding(Math.min(window.scrollY / 7, 160));
    });
  }, []);
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerBackground}></div>
        <div
          className={styles.sidebar}
          style={{ transform: `translateY(${sidebarPadding}px)` }}
        >
          <div className={styles.title}>
            In 1 month, we created an embedded systems rhythm game.
          </div>
          <div className={styles.titleDivider}></div>
          <div className={styles.subtitle}>
            Using an Arduino UNO and some components, we attempted to
            reconstruct a standard vertical scrolling rhythm game using the
            skills we acquired from this class. Below details our process and
            thought process in making the final product (that didn&apos;t end up
            working out).
          </div>
        </div>
      </header>
      <div className={styles.headerDivider}></div>
    </>
  );
}
