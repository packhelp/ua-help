import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ChakraProvider } from '@chakra-ui/react'
import { HeaderNavigation } from "../src/components/HeaderNavigation"
import { FooterNavigation } from "../src/components/FooterNavigation"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <HeaderNavigation/>
      <Component {...pageProps} />
      <FooterNavigation />
    </ChakraProvider>
  )
  // return <Component {...pageProps} />
}

export default MyApp
