'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";

export default function Home() {
  return (
    <>
      <header className={styles.container}>
        <Header />
      </header>

      <section>
        <Hero/>
      </section>
    </>


  );
}
