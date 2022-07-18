import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

  function printHello() {
    console.log("Hello there! Jacob is soooooo much cooler than me.")
  }

  function printGoodbye() {
    console.log("Goodbye.")
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Emerald DApp</title>
        <meta name="description" content="Created by Emerald Academy" />
        <link rel="icon" href="https://i.imgur.com/hvNtbgD.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my <a href="https://www.google.co.jp/" target="_blank">Emerald DApp!</a>
        </h1>
        <p>
          created by hiro
        </p>
        <div className={styles.flex}>
          <button onClick={printHello}>Hello</button>
          <button onClick={printGoodbye}>Goodbye</button>
        </div>
      </main>
    </div>
  )
}