import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material'
import { Box, Container, Grid, Link, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Logo from '@/public/images/logo.svg'
const Footer = () => {
  return (
    <Box component="footer">
      <Box className="tw-bg-footer">
        <Container maxWidth="lg" className="tw-px-6 tw-py-4">
          <Box className="tw-py-10 tw-overflow-hidden">
            <Grid container>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={4}
                className="tw-pt-6 tw-pl-6"
              >
                <Link href="#" className="tw-inline-block">
                  <Image
                    src={Logo}
                    width={105}
                    height={50}
                    alt="Logo"
                    className="tw-mb-5"
                  />
                </Link>
                <Typography color="text.disabled" className="tw-mb-5 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Auctor libero id et, in gravida. Sit diam duis mauris nulla
                  cursus. Erat et lectus vel ut sollicitudin elit at amet.
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={2}
                className="tw-pt-6 tw-pl-6"
              >
                <Box className="tw-mb-3 tw-fw-semibold tw-text-white tw-text-lg">
                  About Us
                </Box>
                <Stack spacing={1}>
                  <Link
                    href="#"
                    underline="none"
                    className="tw-block tw-text-gray-500 hover:tw-text-gray-25"
                  >
                    Careers
                  </Link>
                  <Link
                    href="#"
                    underline="none"
                    className="tw-block tw-text-gray-500 hover:tw-text-gray-25"
                  >
                    Our Cares
                  </Link>
                  <Link
                    href="#"
                    underline="none"
                    className="tw-block tw-text-gray-500 hover:tw-text-gray-25"
                  >
                    Our Stores
                  </Link>
                  <Link
                    href="#"
                    underline="none"
                    className="tw-block tw-text-gray-500 hover:tw-text-gray-25"
                  >
                    Terms & Conditions
                  </Link>
                  <Link
                    href="#"
                    underline="none"
                    className="tw-block tw-text-gray-500 hover:tw-text-gray-25"
                  >
                    Privacy Policy
                  </Link>
                </Stack>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={3}
                className="tw-pt-6 tw-pl-6"
              >
                <Box className="tw-mb-3 tw-fw-semibold tw-text-white tw-text-lg">
                  Customer Care
                </Box>
                <Stack spacing={1}>
                  <Link
                    href="#"
                    underline="none"
                    className="tw-block tw-text-gray-500 hover:tw-text-gray-25"
                  >
                    Help Center
                  </Link>
                  <Link
                    href="#"
                    underline="none"
                    className="tw-block tw-text-gray-500 hover:tw-text-gray-25"
                  >
                    How to Buy
                  </Link>
                  <Link
                    href="#"
                    underline="none"
                    className="tw-block tw-text-gray-500 hover:tw-text-gray-25"
                  >
                    Track Your Order
                  </Link>
                  <Link
                    href="#"
                    underline="none"
                    className="tw-block tw-text-gray-500 hover:tw-text-gray-25"
                  >
                    Corporate & Bulk Purchasing
                  </Link>
                  <Link
                    href="#"
                    underline="none"
                    className="tw-block tw-text-gray-500 hover:tw-text-gray-25"
                  >
                    Returns & Refunds
                  </Link>
                </Stack>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={3}
                className="tw-pt-6 tw-pl-6"
              >
                <Box className="tw-mb-3 tw-fw-semibold tw-text-white tw-text-lg">
                  Contact Us
                </Box>
                <Stack spacing={1} className="tw-mb-4">
                  <Typography color="text.disabled">
                    70 Washington Square South, New York, NY 10012, United
                    States
                  </Typography>
                  <Typography color="text.disabled">
                    Email: uilib.help@gmail.com
                  </Typography>
                  <Typography color="text.disabled">
                    Phone: +1 1123 456 780
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <Link
                    href="https://www.facebook.com/"
                    className="tw-inline-block"
                  >
                    <Facebook color="inherit" fontSize="medium" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/"
                    className="tw-inline-block"
                  >
                    <Instagram fontSize="medium" />
                  </Link>
                  <Link
                    href="https://www.twitter.com/"
                    className="tw-inline-block"
                  >
                    <Twitter fontSize="medium" />
                  </Link>
                  <Link
                    href="https://www.youtube.com/"
                    className="tw-inline-block"
                  >
                    <YouTube fontSize="medium" />
                  </Link>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Footer
