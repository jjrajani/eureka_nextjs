import type { NextPage } from "next";
import Head from "next/head";
import MetabolicMasteryPage from "components/pages/MetabolicMasteryPage";
import styles from "../styles/MetabolicMastery.module.css";

const MetabolicMastery: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Eureka Nutrition Calculator</title>
        <meta name="description" content="A health calculator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MetabolicMasteryPage />
    </div>
  );
};

export default MetabolicMastery;
