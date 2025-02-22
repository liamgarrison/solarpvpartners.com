import { ReactNode } from 'react'
import Head from 'next/head'
import Meta from '../meta'
import Navi from '../navi'
import Footer from '../footer'

interface LayoutProps {
  children: ReactNode
  title?: string
}

export default function Layout({ children, title }: LayoutProps) {
  const pageTitle = title ? `${title} | Solar PV Partners` : 'Solar PV Partners'

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="Solar PV Partners - Renewable Energy Solutions"
        />
      </Head>
      <Meta title={title} />
      <div className="page-wrapper">
        <main>{children}</main>
        <Navi />
      </div>
      <Footer />
    </>
  )
}
