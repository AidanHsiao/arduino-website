import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import MouseIcon from "../components/MouseIcon";
import NavBar from "../components/NavBar";
import VisibilityContainer from "../components/VisibilityContainer";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>arduino moment heheheha</title>
        <meta name="description" content="Arduino Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <MouseIcon />
      <Header />
      <main className={styles.main}>
        <VisibilityContainer>
          <div className={styles.jumpscare}>i&apos;m gonna shoot myself</div>
        </VisibilityContainer>
        <VisibilityContainer>
          <div className={styles.jumpscare}>jumpscare2</div>
        </VisibilityContainer>
      </main>
    </>
  );
}
