import Footer from '@/components/scaffold/footer';
import Navbar from '@/components/scaffold/navbar';
import '@/styles/globals.css';
import '@fontsource/public-sans';
import { Roboto_Mono, Inter } from '@next/font/google';
import { CssVarsProvider } from '@mui/joy/styles';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import CssBaseline from '@mui/joy/CssBaseline';
import { bh_theme } from '@/configs/mui-theme';

const roboto_mono = Roboto_Mono({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] });



export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx global>{`
        .date {
          font-family: ${roboto_mono.style.fontFamily};
        }
      `}</style>
      <CssVarsProvider theme={bh_theme}>
          <div style={inter.style}>
            <CssBaseline />

            <Navbar />
            <Component {...pageProps} />
            <Footer></Footer>
          </div>
      </CssVarsProvider>
    </>
  )
}
