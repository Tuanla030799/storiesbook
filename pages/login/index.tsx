import { GetServerSideProps } from 'next/types'
import { i18n } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ReactElement } from 'react'
import Login from './components/Login'
import { Layout } from '@/components/Layout'

type Props = object

const LoginPage = () => {
  return <Login />
}

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => {
  if (process.env.NODE_ENV === 'development') {
    await i18n?.reloadResources()
  }

  return {
    props: {
      ...(await serverSideTranslations(locale ?? '', ['common'])),
    },
  }
}
export default LoginPage
