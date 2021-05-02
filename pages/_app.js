import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import LayoutWrapper from '../components/LayoutWrapper'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
    )
}

export default MyApp
