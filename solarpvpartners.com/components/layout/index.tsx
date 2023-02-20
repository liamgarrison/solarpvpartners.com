import React from 'react'
import Navi from 'components/navi'
import Footer from 'components/footer'
import Head from 'next/head'

export default function Layout({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="page-wrapper">
        <Navi />
        {children}
      </div>
      <Footer />
    </>
  )
}
