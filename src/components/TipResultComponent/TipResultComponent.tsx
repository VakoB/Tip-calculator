import type {TipResultProps } from "../../interfaces/interfaces";
import styles from './TipResultComponent.module.css'

export default function TipResultComponent(props: TipResultProps) {
  return (
    <div className={styles.tipResult}>
      <div>
        <p className={styles.tipLabel}>{props.label}</p>
        <p className={styles.tipLabelSpan}>/ person</p>
      </div>
      <div>
        <p className={styles.tipAmount}>${props.amount?.toFixed(2)}</p>
      </div>
    </div>
  );
}
