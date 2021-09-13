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
      <div>
        <span className="title">Title</span>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <p>body</p>
        <span className="subtitle">subtitle</span>
        <div>
          <span className={styles.temp1}>color1</span>
        </div>
        <div className={styles.temp2}>
          <span className={styles.temp2wrapper}>color2</span>
        </div>

        <button
          onClick={() => {
            document.body.style.setProperty("--main-color", "green");
          }}
        >
          Click me To Go Crazy!
        </button>
      </div>
    </div>
  );
};

export default Home;
