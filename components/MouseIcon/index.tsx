import styles from "./mouseIcon.module.scss";
import mouse from "../../public/mouse.svg";
import Image from "next/image";
import downArrow from "../../public/down-arrow.svg";
import { useEffect, useState } from "react";

export default function MouseIcon() {
  const [visible, setVisiblity] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setVisiblity(!window.scrollY);
    });
  }, []);

  return (
    <div className={styles.mouseIcon} style={{ opacity: +visible }}>
      <div className={styles.mouse}>
        <Image src={mouse} fill alt="" />
      </div>
      <div className={styles.arrow}>
        <Image src={downArrow} fill alt="" />
      </div>
    </div>
  );
}
