import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Api from "../src/components/Api";
import TailwindTest from "../src/components/TailwindTest";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Api />
      <TailwindTest></TailwindTest>
    </div>
  );
};

export default Home;
