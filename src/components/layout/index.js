import React from 'react'
import emergence from 'emergence.js'
import Meta from 'components/meta'

import Navi from 'components/navi'
import Footer from 'components/footer'

import 'modern-normalize/modern-normalize.css'
import 'prismjs/themes/prism.css'
import 'scss/styles.scss'
import 'animate.css/animate.css'
import 'font-awesome/css/font-awesome.css'

class Layout extends React.Component {
  render() {
    return (
      <>
        <Meta title={this.props.title} />
        <div className="page-wrapper">
          <Navi {...this.props} />
          {this.props.children}
        </div>
        <Footer />
      </>
    )
  }
}

export default Layout
