import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <div>header</div>
      <Component {...pageProps} />
      <div>footer</div>
    </ChakraProvider>
  )
  // return <Component {...pageProps} />
}

export default MyApp
