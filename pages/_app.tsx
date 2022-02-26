import "../styles/globals.css"
import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <div>header</div>
      <Component {...pageProps} />
      <div>footer</div>
    </div>
  )
  // return <Component {...pageProps} />
}

export default MyApp
