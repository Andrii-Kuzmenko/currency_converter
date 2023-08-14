import { useCallback, useEffect, useState } from "react";
import { defaultConvertedCurrencyName, defaultCurrencyName } from "./dataConfig";
import { Button, Container, InputGroup, SmallTitle } from "./components";
import { getCurrency } from "./api/dataCurrency";
import { SwapIcon } from "./components/icons/SwapIcon";
import styles from "./App.module.scss";
import './styles/global.scss'

export const App: React.FC = () => {
  const [rateIndex, setRateIndex] = useState<number>(1);
  const [currencyName, setCurrencyName] = useState<string>(defaultCurrencyName);
  const [convertedCurrencyName, setConvertedCurrencyName] = useState<string>(defaultConvertedCurrencyName);
  const [currencyValue, setCurrencyValue] = useState<string>('');
  const [convertedCurrencyValue, setConvertedCurrencyValue] = useState<string>('');
  const [isSwaped, setIsSwaped] = useState<boolean>(false);

  const handleCurrencyValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    setCurrencyValue(newValue);
    setConvertedCurrencyValue(newValue !== '' ? (parseFloat(newValue) * rateIndex).toFixed(2) : '');
  };

  const handleConvertedCurrencyValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    setConvertedCurrencyValue(newValue);
    setCurrencyValue(newValue !== '' ? (parseFloat(newValue) / rateIndex).toFixed(2) : '');
  };

  const handleSwap = () => {
    setIsSwaped(current => !current);
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
          {isSwaped
            ? <InputGroup
              className={styles.currencyInputGroup}
              currency={currencyName}
              onSelect={setCurrencyName}
              value={currencyValue}
              handleChange={handleCurrencyValueChange}
            />
            : <InputGroup
              className={styles.currencyInputGroup}
              currency={convertedCurrencyName}
              onSelect={setConvertedCurrencyName}
              value={convertedCurrencyValue}
              handleChange={handleConvertedCurrencyValueChange}
            />}

          <div className={styles.swapButtonGroup}>
            <Button className={styles.button} onClick={handleSwap}>
              <SwapIcon className={styles.swapIcon} />
            </Button>
            <div className={styles.line}></div>
          </div>

          <SmallTitle className={styles.smallTitle}>Converted Amount</SmallTitle>
          {!isSwaped
            ? <InputGroup
              className={styles.currencyInputGroupLast}
              currency={currencyName}
              onSelect={setCurrencyName}
              value={currencyValue}
              handleChange={handleCurrencyValueChange}
            />
            : <InputGroup
              className={styles.currencyInputGroupLast}
              currency={convertedCurrencyName}
              onSelect={setConvertedCurrencyName}
              value={convertedCurrencyValue}
              handleChange={handleConvertedCurrencyValueChange}
            />}
        </div>
        <SmallTitle className={styles.exchangeRateTitle}>Indicative Exchange Rate</SmallTitle>

        <p className={styles.exchangeRate}>
          {!isSwaped
            ? `1 ${convertedCurrencyName} = ${(1 / rateIndex).toFixed(4)} ${currencyName}`
            : `1 ${currencyName} = ${rateIndex.toFixed(4)} ${convertedCurrencyName}`
          }
        </p>
      </Container>
    </>
  )
}
