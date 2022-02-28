import React from "react"
import Head from "next/head"

import { getPageTitle, getAllPagesInSpace } from "notion-utils"
import { NotionAPI } from "notion-client"
import { Collection, CollectionRow, NotionRenderer } from "react-notion-x"

const isDev = process.env.NODE_ENV === "development" || !process.env.NODE_ENV

const notion = new NotionAPI()

export const getStaticProps = async (context) => {
  let pageId = context.params.pageId as string

  if (!pageId) {
    pageId = "ade08590c3fc447a815ed413588e66f7"
  }

  const recordMap = await notion.getPage(pageId)

  return {
    props: {
      recordMap,
    },
    revalidate: 10000, // In seconds
  }
}

export async function getStaticPaths() {
  if (isDev) {
    return {
      paths: [],
      fallback: true,
    }
  }

  const rootNotionPageId = "ade08590c3fc447a815ed413588e66f7"
  const rootNotionSpaceId = "20c97a03-bf32-44fb-a39c-0b6ba411449b"

  // This crawls all public pages starting from the given root page in order
  // for next.js to pre-generate all pages via static site generation (SSG).
  // This is a useful optimization but not necessary; you could just as easily
  // set paths to an empty array to not pre-generate any pages at build time.
  const pages = await getAllPagesInSpace(
    rootNotionPageId,
    rootNotionSpaceId,
    notion.getPage.bind(notion),
    {
      traverseCollections: false,
    }
  )

  const paths = Object.keys(pages).map((pageId) => `/information/${pageId}`)

  return {
    paths,
    fallback: true,
  }
}

export default function NotionPage({ recordMap }) {
  if (!recordMap) {
    return null
  }

  const title = getPageTitle(recordMap)

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={false}
        customImages={true}
        rootDomain="localhost:9090" // used to detect root domain links and open this in the same tab
        components={{
          image: ({ src, alt, height, width, className, style, ref }) => (
            <img
              className={className}
              style={style}
              src={src}
              ref={ref}
              width={width}
              height={height}
              loading="lazy"
              alt={alt}
              decoding="async"
            />
          ),
          collection: Collection,
          collectionRow: CollectionRow,
        }}
      />
    </>
  )
}
