import { Container } from "./components";
import './styles/global.scss'
import styles from "./App.module.scss";
import { useEffect, useState } from "react";
import { getCurrency } from "./api/dataCurrency";
import { DataCurrency } from "./types/DataCarrency";

const App: React.FC = () => {
  const [data, setData] = useState<DataCurrency>();
  // const [baseCurrency, setBaseCurrency] = useState<string>('EUR');

  const getCurrencyFromServer = async () => {
    try {
      const data = await getCurrency();

      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCurrencyFromServer();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(setBaseCurrency);
  console.log(data);
  
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
        <div>
          <h4>title</h4>
          <div>

          {/* <img className={styles.flag} src="./images/united-kingdom.png" alt="uk flag icons" /> */}
          {/* <p></p> */}
          {/* <Button></Button> */}
          {/* <input/> */}
          </div>
        </div>
      </Container>
    </>
  )
}

export default App
