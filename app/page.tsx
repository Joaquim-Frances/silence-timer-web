import Image from "next/image";
import StoresBlock from "./components/stores";
import styles from "./page.module.css";
import BuyMeACoffee from "./components/buy-me-a-coffee";

export default function Home() {
  return (
    <main className={styles.main}>
      <video className={styles.video} autoPlay loop muted playsInline>
        <source src="/IncensFinalCut.mp4" type="video/mp4" />
      </video>
      <h1 className={styles.title}>Silence Timer</h1>
      <h3 className={styles.subtitle}>Meditation</h3>
      <StoresBlock />
      <BuyMeACoffee />
    </main>
  );
}
