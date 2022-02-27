import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import { CharityDataTable } from "../src/components/componets"
import { getRootContainer } from "../src/services/_root-container"
import { CharityDataStore, CharityDTO } from "../src/services/charity-data"

export const getStaticProps = async (context) => {
  const root = getRootContainer()
  const charityDataDTO = await root.containers.charityDataDTO
  return {
    props: {
      charityDataDTO,
    },
  }
}
interface ChrityPageProps {
  charityDataDTO: CharityDTO[]
}

const CharityList: NextPage<ChrityPageProps> = ({ charityDataDTO }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Charity List</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <CharityDataTable charityDataDTO={charityDataDTO} />
      </main>

      {/*<footer className={styles.footer}>footer</footer>*/}
    </div>
  )
}

export default CharityList
