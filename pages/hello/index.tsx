import { i18n, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetServerSideProps } from 'next/types'

type Props = {}

const Hello = (props: Props) => {
  const { t } = useTranslation(['common'])

  return (
    <>
      <div>{t(`hello`)}</div>
      <div>{t(`hello`)}</div>
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
      // Will be passed to the page component as props
    },
  }
}
