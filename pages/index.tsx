import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
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

const Foot = () => (
  <footer className={styles.footer}>
    Powered by{" "}
    <span className={styles.logo}>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </span>
  </footer>
);

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="An ambitious todo app." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      {/* <Foot /> */}
    </div>
  );
};

export default Home;
