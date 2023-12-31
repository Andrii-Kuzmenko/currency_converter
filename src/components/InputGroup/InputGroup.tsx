import React, { Dispatch, SetStateAction } from "react";
import { Dropdown, FlagImage } from "..";
import styles from "./InputGroup.module.scss";

type Props = {
  currency: string,
  className: string,
  value: string,
  onSelect: Dispatch<SetStateAction<string>>,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export const InputGroup = React.memo<Props>(({
  currency,
  className,
  value,
  onSelect,
  handleChange
}) => (
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
      min="0"
    />
  </div>
));
