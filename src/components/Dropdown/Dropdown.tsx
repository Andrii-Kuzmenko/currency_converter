import React, { useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { currencyOptions } from '../../dataConfig';
import { Button } from '..';
import { ArrowIcon } from '../icons/ArrowIcon';
import styles from './Dropdown.module.scss';

type Props = {
  selectedValue: string;
  onSelect: (option: string) => void;
}

export const Dropdown = React.memo<Props>(({ selectedValue, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const handleSelect = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <div className={styles.dropdown} ref={ref}>
      <div className={styles.controlsContainer}>
        <p className={styles.currencyName}>{selectedValue}</p>
        <Button className={styles.button} onClick={() => setIsOpen(!isOpen)}>
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
});
