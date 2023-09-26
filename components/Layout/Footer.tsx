import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import { Box, Container, Grid, Link, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Logo from '@/public/images/logo.png'
const Footer = () => {
  return (
    <Box
      component="footer"
      className="tw-text-center tw-py-6 tw-bg-footer tw-bg-bottom tw-bg-no-repeat"
    >
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12}>
            <Link href="#" className="tw-inline-block tw-py-1 tw-my-2">
              <Image src={Logo} width={64} height={64} alt="Logo" />
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body1"
              color="text.primary"
              className="md:tw-w-full tw-w-9/12 tw-mx-auto"
            >
              StoriesBook là nền tảng mở dành cho các tác giả và độc giả đam mê
              sách chữ, nơi thành viên có thể tự do xuất bản các tác phẩm của
              mình với nhiều chức năng liên tục được cải tiến sẽ mang lại trải
              nghiệm tốt nhất cho các tác giả lẫn người đọc online.
            </Typography>
          </Grid>
          <Grid item xs={12} className="tw-mt-6 tw-py-1">
            <Stack direction="row" justifyContent="center" spacing={4}>
              <Link
                href="https://www.facebook.com/"
                color="inherit"
                className="tw-inline-block"
              >
                <Facebook sx={{ fontSize: 34 }} />
              </Link>
              <Link
                href="https://www.instagram.com/"
                color="inherit"
                className="tw-inline-block"
              >
                <Instagram sx={{ fontSize: 34 }} />
              </Link>
              <Link
                href="https://www.twitter.com/"
                color="inherit"
                className="tw-inline-block"
              >
                <Twitter sx={{ fontSize: 34 }} />
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={12} className="tw-mt-6">
            <Stack direction="row" justifyContent="center" spacing={6}>
              <Link
                href="#"
                underline="hover"
                className="tw-inline-block tw-text-base hover:tw-text-secondary"
              >
                <Typography variant="body1" className="hover:tw-text-secondary">
                  Điều khoản dịch vụ
                </Typography>
              </Link>
              <Link
                href="#"
                underline="hover"
                className="tw-inline-block tw-text-base hover:tw-text-secondary"
              >
                <Typography variant="body1" className="hover:tw-text-secondary">
                  Chính sách bảo mật
                </Typography>
              </Link>
              <Link
                href="#"
                underline="hover"
                className="tw-inline-block tw-text-base hover:tw-text-secondary"
              >
                <Typography variant="body1" className="hover:tw-text-secondary">
                  Về bản quyền
                </Typography>
              </Link>
              <Link
                href="#"
                underline="hover"
                className="tw-inline-block hover:tw-text-secondary"
              >
                <Typography variant="body1" className="hover:tw-text-secondary">
                  Hướng dẫn sử dụng
                </Typography>
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
