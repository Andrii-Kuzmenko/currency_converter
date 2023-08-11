import { Container } from "./components";
import './styles/global.scss'
import styles from "./App.module.scss";

const App: React.FC = () => {

  return (
    <>
      <div className={styles.app}></div>
      <Container>
        <h1 className={styles.title}>Currency Converter</h1>
        <p className={styles.text}>
          Check live rates, set rate alerts, receive
          <br />
          notifications and more.
        </p>
      </Container>
    </>
  )
}

export default App
