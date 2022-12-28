import { useEffect, useState } from "react";
import styles from "./navbar.module.scss";

export default function NavBar() {
  const [visible, setVisibility] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setVisibility(window.scrollY > 10);
    });
  }, []);

  return (
    <nav className={styles.navbar} style={{ top: visible ? -80 : 0 }}>
      <div className={styles.logo}>funny games</div>
      <div className={styles.buttons}>
        <a className={styles.navButton} href="#circuit">
          Circuit
        </a>
        <a className={styles.navButton} href="#state">
          State
        </a>
        <a className={styles.navButton} href="#final">
          Final Design
        </a>
        <a className={styles.navButton} href="#code">
          Code
        </a>
      </div>
    </nav>
  );
}
