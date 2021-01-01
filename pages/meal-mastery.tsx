import type { NextPage } from "next";
import Head from "next/head";
import MealMasteryPage from "components/pages/MealMasteryPage";
import styles from "../styles/MealMastery.module.css";

const MealMastery: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Eureka Nutrition Calculator</title>
        <meta name="description" content="A health calculator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MealMasteryPage />
    </div>
  );
};

export default MealMastery;
