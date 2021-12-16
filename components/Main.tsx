import styles from "../styles/Home.module.css";

const Main = () => (
  <main className={styles.main}>
    <h1 className={styles.title}>Todo App</h1>

    <p className={styles.description}>Your Tasks:</p>

    <div className={styles.grid}>
      <a href="https://nextjs.org/docs" className={styles.card}>
        <h2>Wake up</h2>
        <p>9:00 AM</p>
      </a>
    </div>
  </main>
);

export default Main;
