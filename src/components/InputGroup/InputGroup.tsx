import React, { Dispatch, SetStateAction } from "react";
import styles from "./InputGroup.module.scss";
import { Dropdown, FlagImage } from "..";

type Props = {
  currency: string,
  onSelect: Dispatch<SetStateAction<string>>,
  className: string,
}

export const InputGroup: React.FC<Props> = ({ currency, onSelect, className }) => (
  <div className={className}>
    <div className={styles.container}>
      <FlagImage className={styles.flagImage} currency={currency} />
      <Dropdown selectedValue={currency} onSelect={onSelect} />
    </div>
    <input className={styles.input} type="number" inputMode="numeric" />
  </div>
);
