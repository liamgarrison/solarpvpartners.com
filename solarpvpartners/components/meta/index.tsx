import React from 'react'
import Head from 'next/head'
interface MetaProps {
  title?: string
}

const Meta: React.FC<MetaProps> = ({ title }) => {
  return (
    <Head>
      <title>
        {title ? `${title} | Solar PV Partners` : 'Solar PV Partners'}
      </title>
      <meta
        name="description"
        content="Take control of your energy supply with battery storage and renewable energy"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      {/* Twitter Card data */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@solarpvpartners" />
      <meta
        name="twitter:title"
        content={title ? `${title} | Solar PV Partners` : 'Solar PV Partners'}
      />
      <meta
        name="twitter:description"
        content="Take control of your energy supply with battery storage and renewable energy"
      />
      <meta
        name="twitter:image"
        content="https://solarpvpartners.co.uk/img/profile.jpg"
      />

      {/* Open Graph data */}
      <meta
        property="og:title"
        content={title ? `${title} | Solar PV Partners` : 'Solar PV Partners'}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://solarpvpartners.co.uk" />
      <meta
        property="og:image"
        content="https://solarpvpartners.co.uk/img/profile.jpg"
      />
      <meta
        property="og:description"
        content="Take control of your energy supply with battery storage and renewable energy"
      />
      <meta property="og:site_name" content="Solar PV Partners" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default Meta
