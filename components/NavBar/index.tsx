import { useEffect, useState } from "react";
import styles from "./navbar.module.scss";

const navbarColor = "#2f3466";

export default function NavBar() {
  const [bgVisible, setBGVisibility] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setBGVisibility(window.scrollY > 50);
    });
  }, []);

  return (
    <nav
      className={styles.navbar}
      style={{ backgroundColor: bgVisible ? navbarColor : "transparent" }}
    >
      <div className={styles.logo}>elysikomi prod.</div>
      <div className={styles.buttons}>
        <div className={styles.navButton}>Home</div>
        <div className={styles.navButton}>Why Am I Here</div>
        <div className={styles.navButton}>EndmeNow</div>
      </div>
    </nav>
  );
}
