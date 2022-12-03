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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
        </div>
      </header>
      <div className={styles.headerDivider}></div>
    </>
  );
}
