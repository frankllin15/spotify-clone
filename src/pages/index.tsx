import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/Layout";

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Spotify</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1>Spotify</h1>
      </Layout>
    </div>
  );
};

export default Home;
