import type { NextPage } from "next";
import Head from "next/head";
import MyDressProfilePage from "components/pages/MyDressProfilePage";
import styles from "../styles/MyDressProfile.module.css";

const MyDressProfile: NextPage = () => {
  return (
    <div>
      <Head>
        <title>My D.R.E.S.S. Profile - Eureka!</title>
        <meta name="description" content="A health calculator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MyDressProfilePage />
    </div>
  );
};

export default MyDressProfile;
