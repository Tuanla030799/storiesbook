import { GetServerSideProps } from 'next/types'
import { i18n, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Seo, SeoData } from '@/components/Seo'

type Props = {
  test: string
  seo: SeoData
}

const Hello = ({ test, seo }: Props) => {
  const { t } = useTranslation(['common'])

  return (
    <>
      <Seo data={seo} />
      <div>{t('hello')}</div>
      <div>{test}</div>
    </>
  )
}

export default Hello

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => {
  if (process.env.NODE_ENV === 'development') {
    await i18n?.reloadResources()
  }

  return {
    props: {
      ...(await serverSideTranslations(locale ?? '', ['common'])),
      test: 'Hello Tuna',
      seo: {
        title: 'Hello Tuna',
        description: 'Hello Tuna welcome you',
        url: 'https://i0.wp.com/www.agilenative.com/wp-content/uploads/2017/01/001-Agile-Hello-World.png?fit=1745%2C1080&ssl=1',
        thumbnailUrl:
          'https://i0.wp.com/www.agilenative.com/wp-content/uploads/2017/01/001-Agile-Hello-World.png?fit=1745%2C1080&ssl=1',
      },
    },
  }
}
