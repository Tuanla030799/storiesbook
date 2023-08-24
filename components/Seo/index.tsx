import Head from 'next/head'
import React from 'react'

export type SeoData = {
  title: string
  description: string
  url: string
  thumbnailUrl: string
}

export type SeoProps = {
  data: SeoData
}

export const Seo = ({ data }: SeoProps) => {
  const { title, description, url, thumbnailUrl } = data
  return (
    <Head>
      <title>Story Books- Đọc sách online | Story Books</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={thumbnailUrl} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={thumbnailUrl} />
    </Head>
  )
}
