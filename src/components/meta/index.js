import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { StaticQuery, graphql } from 'gatsby'

const Meta = ({ title }) => {
  return (
    <StaticQuery
      query={siteInfoQuery}
      render={data => {
        return (
          <Helmet
            title={
              title
                ? `${title} | ${data.site.meta.title}`
                : data.site.meta.title
            }
            meta={[
              { name: 'twitter:card', content: 'summary' },
              {
                name: 'twitter:site',
                content: `@${get(data.site, 'twitter')}`,
              },
              { property: 'og:title', content: title },
              { property: 'og:type', content: 'website' },
              {
                property: 'og:description',
                content: get(data.site, 'description'),
              },
              {
                property: 'og:url',
                content: `${get(data.site, 'siteUrl')}/profile`,
              },
              {
                property: 'og:image',
                content: `${get(data.site, 'siteUrl')}/img/profile.jpg`,
              },
            ]}
          />
        )
      }}
    />
  )
}
export default Meta

const siteInfoQuery = graphql`
  query SiteinfoQuery {
    site {
      meta: siteMetadata {
        title
        description
        url: siteUrl
        author
        twitter
      }
    }
  }
`
