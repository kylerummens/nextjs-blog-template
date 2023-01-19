import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import '@/styles/globals.css';
import '@fontsource/public-sans';
import { Roboto_Mono } from '@next/font/google';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import CssBaseline from '@mui/joy/CssBaseline';

const roboto_mono = Roboto_Mono({ subsets: ['latin'] })


const theme = extendTheme({
  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: '99999px',
          transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          '&:focus': {
            outline: '2px solid transparent',
            outlineOffset: '2px',
            boxShadow: '0 0 0 2px #ffffff, 0 0 0 4px #93c5fd, 0 0 #0000'
          },
        }),
      },
    },
  },
  fontFamily: {
    display: 'Inter var, var(--joy-fontFamily-fallback)',
    body: 'Inter, var(--joy-fontFamily-fallback)',
  },
})

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
      <CssVarsProvider theme={theme}>
        <CssBaseline />

        <Navbar />
        <Component {...pageProps} />
        <Footer></Footer>
      </CssVarsProvider>
    </>
  )
}
