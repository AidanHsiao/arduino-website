import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./visibilityContainer.module.scss";

interface VisibilityContainerProps {
  children: ReactNode;
  triggerOnce?: boolean;
  threshold?: number;
}

export default function VisibilityContainer(props: VisibilityContainerProps) {
  const { ref, inView } = useInView({
    triggerOnce: props.triggerOnce || false,
    threshold: props.threshold || 0.6,
  });
  return (
    <div ref={ref} style={{ opacity: +inView }} className={styles.container}>
      {props.children}
    </div>
  );
}
