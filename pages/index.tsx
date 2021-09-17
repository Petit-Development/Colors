import createPalette from "@lib/palette";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "@styles/Home.module.scss";
import Button from "components/button";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Colors</title>
        <meta name="description" content="Easily view colors in the browser" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="title">Colors</div>
      <div className={styles.bubbles}>#7F87BD</div>
      <input type="text" />
      <Button onClick={()=>{}} text="click" />
    </div>
  );
};

const updateColor = (color: string) => {
  const palette = createPalette('##7F87BD');
  document.body.style.setProperty("--main-color", palette.primary);
  document.body.style.setProperty("--main-color", palette.secondary);
};

export default Home;
