import { Box } from '@mui/material'
import React, { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

type TLayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: TLayoutProps) => {
  return (
    <Box className="tw-flex tw-flex-col tw-items-stretch tw-min-w-full tw-min-h-screen">
      <Header />
      <Box
        component="main"
        className="tw-mt-[96px] tw-flex tw-flex-col tw-items-stretch tw-grow tw-bg-home tw-bg-top tw-bg-no-repeat"
      >
        {children}
      </Box>
      <Footer />
    </Box>
  )
}

export default Layout
