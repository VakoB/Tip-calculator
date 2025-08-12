import styles from "./CardComponent.module.css";
import { TIP_NUMBERS } from "../../constants/TIP_NUMBERS";
import { useRef, useState } from "react";
import TipButtonComponent from "../TipButtonComponent/TipButtonComponent";
import InputComponent from "../InputComponent/InputComponent";
import dollarIcon from "../../assets/icon-dollar.svg";
import personIcon from "../../assets/icon-person.svg";
import TipResultComponent from "../TipResultComponent/TipResultComponent";

export default function CardComponent() {
  const [activeNumber, setActiveNumber] = useState<number | null>(null);
  const [bill, setBill] = useState<number | null>(null);
  const [numberOfPeople, setNumberOfPeople] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const customInputRef = useRef<HTMLInputElement>(null);

  const IseveryTipComponentFilled = bill && numberOfPeople && activeNumber;
  const tipAmount = IseveryTipComponentFilled ? bill * (activeNumber / 100) : 0;
  const totalAmount = IseveryTipComponentFilled ? tipAmount + bill : 0;

  const resetHandle = () => {
    setNumberOfPeople(null);
    setBill(null);
    setActiveNumber(null);
    if (customInputRef.current) {
      customInputRef.current.value = "";
    }
  };

  const isDefaultState =
    bill === null &&
    numberOfPeople === null &&
    activeNumber === null &&
    customInputRef.current?.value === "";

  const onChangeHandlerForPeopleInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = e.target.value;
    if (Number.isNaN(Number(inputValue))) {
      return;
    }
    setNumberOfPeople(Number(inputValue));
    setError(null);
    if (inputValue === "") {
      setNumberOfPeople(null);
    } else if (Number(inputValue) === 0) {
      setError("Can’t be zero");
    } else {
      setNumberOfPeople(Number(inputValue));
    }
  };

  const onChangeHandlerForBillInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = e.target.value;
    if (Number.isNaN(Number(inputValue))) {
      return;
    }
    if (inputValue === "") {
      setBill(null);
    } else {
      setBill(Number(inputValue));
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.inputSection}>
        <InputComponent
          label="Bill"
          icon={dollarIcon}
          state={bill}
          error={null}
          onChangeHandler={onChangeHandlerForBillInput}
        />

        <div>
          <p className={styles.tipText}>Select Tip %</p>
          <div className={styles.tipButtonContainer}>
            {TIP_NUMBERS.map((num, idx) => (
              <TipButtonComponent
                key={idx}
                onClick={() => {
                  if (num === activeNumber) {
                    setActiveNumber(null);
                  } else {
                    setActiveNumber(num);
                  }
                }}
                number={num}
                activeNumber={activeNumber}
              />
            ))}
            <div className={styles.customTipInputWrapper}>
              <input
                onFocus={() => setActiveNumber(null)}
                className={styles.customTipInput}
                type="text"
                placeholder="Custom"
                onChange={(e) => setActiveNumber(Number(e.target.value))}
                ref={customInputRef}
              />
            </div>
          </div>
        </div>

        <InputComponent
          label="Number of People"
          icon={personIcon}
          state={numberOfPeople}
          error={error}
          onChangeHandler={onChangeHandlerForPeopleInput}
        />
      </div>

      <div className={styles.outputSection}>
        <TipResultComponent
          label="Tip Amount"
          amount={numberOfPeople ? tipAmount / numberOfPeople : 0}
        />
        <TipResultComponent
          label="Total"
          amount={numberOfPeople ? totalAmount / numberOfPeople : 0}
        />
        <button
          onClick={() => {
            resetHandle();
          }}
          className={`${styles.resetButton} ${
            isDefaultState ? styles.resetButtonDisabled : ""
          }`}
        >
          RESET
        </button>
      </div>
    </div>
  );
}
