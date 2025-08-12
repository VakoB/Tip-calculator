import type { TipButtonProps } from "../../interfaces/interfaces";
import styles from "./TipButtonComponent.module.css";

export default function TipButtonComponent(props: TipButtonProps) {
  return (
    <div
      className={`${styles.tipButton} ${
        props.activeNumber == props.number ? styles.selectedButton : ""
      }`}
      onClick={props.onClick}
    >
      <p className={styles.tipButtonText}>{props.number}%</p>
      <div></div>
    </div>
  );
}
