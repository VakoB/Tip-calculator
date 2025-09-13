import styles from "./InputComponent.module.css";
import type { InputProps } from "../../interfaces/interfaces";

export default function InputComponent(props: InputProps) {
  return (
    <div className={styles.inputWrap}>
      <div className={styles.inputInfo}>
        <label className={styles.label} htmlFor={props.label}>
          {props.label}
        </label>
        {props.error ? <p className={styles.errorText}>{props.error}</p> : null}
      </div>

      <div
        className={`${styles.inputContainer} ${
          props.error ? styles.inputError : ""
        }`}
      >
        <img src={props.icon} alt="input icon" />
        <input
          onChange={props.onChangeHandler}
          value={props.state !== null ? props.state : ""}
          className={styles.input}
          id={props.label}
          type="text"
          placeholder="0"
        />
      </div>
    </div>
  );
}
