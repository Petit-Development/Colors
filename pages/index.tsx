import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Colors</title>
        <meta name="description" content="Easily view colors in the browser" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      Stuff

    </div>
  )
}

export default Home
