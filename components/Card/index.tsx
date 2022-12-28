import Image, { StaticImageData } from "next/image";
import styles from "./card.module.scss";

interface CardProps {
  src?: StaticImageData;
  title: string;
  subtitle: string;
  side: boolean;
  id: string;
}

export default function Card(props: CardProps) {
  return (
    <div className={styles.card} id={props.id}>
      {!props.side ? (
        <div className={styles.image}>
          <Image src={props.src as StaticImageData} alt="pain" fill />
        </div>
      ) : (
        <></>
      )}
      <div className={styles.text}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.subtitle}>{props.subtitle}</div>
      </div>
      {props.side ? (
        <div className={styles.image}>
          <Image src={props.src as StaticImageData} alt="pain" fill />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
