import { useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const HomePage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      router.push("/metabolic-mastery");
    }
  }, [router]);

  return (
    <div>
      <Head>
        <title>Eureka Nutrition</title>
        <meta name="description" content="A health calculator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default HomePage;
