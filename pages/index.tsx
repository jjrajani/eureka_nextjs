import type { NextPage } from 'next'
import Head from 'next/head'
import Home from 'components/pages/Home';
import styles from '../styles/Home.module.css'

const HomePage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eureka Nutrition Calculator</title>
        <meta name="description" content="A health calculator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />
    </div>
  )
}

export default HomePage
