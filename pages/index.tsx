import createPalette from '@lib/palette';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '@styles/Home.module.scss';
import Controls from '@components/controls/controls';
import { useState } from 'react';

const Home: NextPage = () => {
  const [color, setColor] = useState('#7F87BD');
  const [currentColor, setCurrenttColor] = useState(color);

  return (
    <div className={styles.container}>
      <Head>
        <title>Colors</title>
        <meta name="description" content="Easily view colors in the browser" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="title">Colors</div>
      <div className={styles.bubbles}>{currentColor}</div>
      <input
        onChange={(event) => {
          setColor(event.target.value);
        }}
        type="text"
      />
      <Controls
        onPlayClicked={() => {
          updateColor(color);
          setCurrenttColor(color);
        }}
        onSettingsClicked={() => {}}
      />
    </div>
  );
};

const updateColor = (color: string) => {
  const palette = createPalette(color);
  console.log(palette);
  document.body.style.setProperty('--main-color', palette.primary);
  document.body.style.setProperty('--secondary-color', palette.secondary);
};

export default Home;
