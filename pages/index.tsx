import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Colors</title>
        <meta name="description" content="Easily view colors in the browser" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="title">Colors.</div>
      <div className={styles.bubbles}>#7F87BD</div>
      <input type="text" />
    </div>
  );
};

const updateColor = (color: string) => {
  document.body.style.setProperty("--main-color", color);
};

export default Home;
