import React, { Dispatch, SetStateAction } from "react";
import { Dropdown, FlagImage } from "..";
import styles from "./InputGroup.module.scss";

type Props = {
  currency: string,
  onSelect: Dispatch<SetStateAction<string>>,
  className: string,
  value: string,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export const InputGroup: React.FC<Props> = ({ currency, onSelect, className, value, handleChange }) => (
  <div className={className}>
    <div className={styles.container}>
      <FlagImage className={styles.flagImage} currency={currency} />
      <Dropdown selectedValue={currency} onSelect={onSelect} />
    </div>
    <input
      className={styles.input}
      type="number"
      value={value}
      onChange={handleChange}
      placeholder="0.00"
    />
  </div>
);
