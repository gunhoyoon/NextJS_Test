import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Api from "../src/components/Api";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Api />
    </div>
  );
};

export default Home;
