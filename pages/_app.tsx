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
      primary: '#333333',
      secondary: '#666666',
      disabled: '#a6b3b3',
    },
  },
  typography: {
    fontFamily: 'Inter',
    fontSize: 15,
    h2: {
      fontSize: '1.25rem',
      color: '#333333',
      lineHeight: '1.5rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '0.9375rem',
      color: '#333333',
      lineHeight: '1.125rem',
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: '0.75rem',
      color: '#a6b3b3',
      lineHeight: '1.125rem',
    },
    subtitle2: {
      fontSize: '0.875rem',
      color: '#999999',
      lineHeight: '1.3125rem',
    },
    body1: {
      fontSize: '0.9375rem',
      color: '#333333',
      lineHeight: '1.40625rem',
    },
    body2: {
      fontSize: '0.875rem',
      color: '#666666',
      lineHeight: '1.3125rem',
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
