import { useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const HomePage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      router.push("/my_dress_profile");
    }
  }, [router]);

  return (
    <div>
      <Head>
        <title>Eureka! - Eureka! Holistic Nutrition</title>
        <meta name="description" content="A health calculator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default HomePage;
