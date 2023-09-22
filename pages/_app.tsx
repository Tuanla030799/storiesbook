import '@/styles/globals.css'
import '@/styles/tailwind.css'
import { ThemeProvider } from '@emotion/react'
import { ThemeOptions, createTheme } from '@mui/material/styles'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'
import { ReactNode, useEffect, useState } from 'react'

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    error: {
      main: '#d32f2f',
    },
  },
}

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page)
  const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }

  return (
    <ThemeProvider theme={createTheme(themeOptions)}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  )
}

export default appWithTranslation(MyApp)
