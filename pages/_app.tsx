import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import { HeaderNavigation } from "../src/components/HeaderNavigation"
import { FooterNavigation } from "../src/components/FooterNavigation"

// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css"

// used for code syntax highlighting (optional)
import "prismjs/themes/prism-tomorrow.css"

// used for collection views (optional)
import "rc-dropdown/assets/index.css"

// used for rendering equations (optional)
import "katex/dist/katex.min.css"

// Override notion css
import "./../public/notion-override.css"
import { RootContainerWrapper } from "./componets"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <RootContainerWrapper>
        <HeaderNavigation />
        <Component {...pageProps} />
        <FooterNavigation />
      </RootContainerWrapper>
    </ChakraProvider>
  )
}

export default MyApp
