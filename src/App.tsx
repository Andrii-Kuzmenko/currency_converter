import { useCallback, useEffect, useState } from "react";
import { config } from './dataConfig';

import { Button, Container, InputGroup, SmallTitle } from "./components";
import { getCurrency } from "./api/dataCurrency";
import { SwapIcon } from "./components/icons/SwapIcon";
import styles from "./App.module.scss";
import './styles/global.scss'

export const App: React.FC = () => {
  const [rateIndex, setRateIndex] = useState<number>(1);
  const [currencyName, setCurrencyName] = useState<string>(config.defaultCurrencyName);
  const [
    convertedCurrencyName,
    setConvertedCurrencyName
  ] = useState<string>(config.defaultConvertedCurrencyName);
  const [currencyValue, setCurrencyValue] = useState<string>('');
  const [convertedCurrencyValue, setConvertedCurrencyValue] = useState<string>('');
  const [isSwapped, setIsSwapped] = useState<boolean>(false);

  const handleCurrencyValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    setCurrencyValue(newValue);
    setConvertedCurrencyValue((parseFloat(newValue) * rateIndex).toFixed(2));
  };

  const handleConvertedCurrencyValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    setConvertedCurrencyValue(newValue);
    setCurrencyValue((parseFloat(newValue) / rateIndex).toFixed(2));
  };

  const handleSwap = () => {
    setIsSwapped(current => !current);
  }

  const getCurrencyFromServer = useCallback(async () => {
    try {
      const data = await getCurrency(currencyName, convertedCurrencyName);

      const index: number = data?.rates?.[convertedCurrencyName] || 1;

      setRateIndex(index);
      setCurrencyValue('');
      setConvertedCurrencyValue('');
    } catch {
      setRateIndex(1);
    }
  }, [currencyName, convertedCurrencyName]);

  useEffect(() => {
    getCurrencyFromServer();
  }, [getCurrencyFromServer]);

  return (
    <>
      <div className={styles.app}></div>
      <Container>
        <h2 className={styles.title}>Currency Converter</h2>
        <p className={styles.text}>
          Check live rates, set rate alerts, receive
          <br />
          notifications and more.
        </p>
        <div className={styles.currencyContainer}>
          <SmallTitle className={styles.smallTitle}>Amount</SmallTitle>
          <InputGroup
            className={styles.currencyInputGroup}
            currency={isSwapped ? currencyName : convertedCurrencyName}
            onSelect={isSwapped ? setCurrencyName : setConvertedCurrencyName}
            value={isSwapped ? currencyValue : convertedCurrencyValue}
            handleChange={isSwapped ? handleCurrencyValueChange : handleConvertedCurrencyValueChange}
          />

          <div className={styles.swapButtonGroup}>
            <Button className={styles.button} onClick={handleSwap}>
              <SwapIcon className={styles.swapIcon} />
            </Button>
            <div className={styles.line}></div>
          </div>

          <SmallTitle className={styles.smallTitle}>Converted Amount</SmallTitle>
          <InputGroup
            className={styles.currencyInputGroupLast}
            currency={!isSwapped ? currencyName : convertedCurrencyName}
            onSelect={!isSwapped ? setCurrencyName : setConvertedCurrencyName}
            value={!isSwapped ? currencyValue : convertedCurrencyValue}
            handleChange={!isSwapped ? handleCurrencyValueChange : handleConvertedCurrencyValueChange}
          />
        </div>
        <SmallTitle className={styles.exchangeRateTitle}>Indicative Exchange Rate</SmallTitle>

        <p className={styles.exchangeRate}>
          {!isSwapped
            ? `1 ${convertedCurrencyName} = ${(1 / rateIndex).toFixed(4)} ${currencyName}`
            : `1 ${currencyName} = ${rateIndex.toFixed(4)} ${convertedCurrencyName}`
          }
        </p>
      </Container>
    </>
  )
}
