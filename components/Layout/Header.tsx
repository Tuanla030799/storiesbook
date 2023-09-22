import { Box, Container } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <Box
      component="header"
      className="tw-fixed tw-h-header tw-w-full tw-z-50 tw-bg-white tw-px-8 tw-py-4 tw-border-b tw-border-gray-300 tw-opacity-90"
    >
      <Container maxWidth="lg"></Container>
    </Box>
  )
}

export default Header
