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
    text: {
      primary: '#2B3445',
      secondary: '#7D879C',
      disabled: '#AEB4BE',
    },
  },
  typography: {
    h2: {
      fontSize: '1.25rem',
      color: '#2B3445',
      lineHeight: '1.875rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.0626rem',
      color: '#2B3445',
      lineHeight: '1.375rem',
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: '0.875rem',
      color: '#2B3445',
      lineHeight: '1.3125rem',
    },
    fontSize: 12.25,
    fontFamily: 'Open Sans',
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
