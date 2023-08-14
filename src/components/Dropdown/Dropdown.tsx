import React, { useState } from 'react';
import { currencyOptions } from '../../dataConfig';
import { Button } from '..';
import { ArrowIcon } from '../icons/ArrowIcon';
import styles from './Dropdown.module.scss';

type Props = {
  selectedValue: string;
  onSelect: (option: string) => void;
}

export const Dropdown: React.FC<Props> = ({ selectedValue, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.controlsContainer}>
        <p className={styles.currencyName}>{selectedValue}</p>
        <Button onClick={() => setIsOpen(!isOpen)}>
          <ArrowIcon />
        </Button>
      </div>

      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {currencyOptions.map((option) => (
            <li className={styles.options} key={option} onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
};
