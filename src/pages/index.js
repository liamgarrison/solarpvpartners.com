import { graphql, Link } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Post from 'templates/post'
import Meta from 'components/meta'
import Layout from 'components/layout'
import Background from '../images/home_background.jpg'

const HomePage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <Meta site={get(data, 'site.meta')} />
      <div
        className="home-background"
        style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${Background})`,
        }}
      >
        <div className="container h-100">
          <div className="h-100 d-flex flex-column justify-content-center align-items-start">
            <h1>Take control of your energy supply with Solar PV Partners.</h1>
            <p>
              We believe that every organisation can benefit from a more
              sustainable energy supply.
            </p>
            <Link className="btn btn-primary" to={'/solutions'}>
              View Solutions
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage

export const pageQuery = graphql`
  query IndexQuery {
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
