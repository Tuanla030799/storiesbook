const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  trailingSlash: true,
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  output: 'standalone',
}

module.exports = nextConfig
