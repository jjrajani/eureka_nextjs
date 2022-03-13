import { useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import MyDressProfilePage from "components/pages/MyDressProfilePage";
// import styles from "../styles/MyDressProfile.module.css";

const HomePage: NextPage = () => {
  const router = useRouter();

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     router.push("/my_dress_profile");
  //   }
  // }, [router]);

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

export default HomePage;
