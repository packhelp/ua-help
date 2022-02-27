import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import { CharityDataTable } from "../src/components/componets"

const CharityList: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Charity List</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <CharityDataTable />
      </main>

      <footer className={styles.footer}>footer</footer>
    </div>
  )
}

export default CharityList
