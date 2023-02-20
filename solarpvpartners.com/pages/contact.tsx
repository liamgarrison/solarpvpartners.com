import Link from 'next/link'
import React from 'react'
import Layout from 'components/layout'
import Dennis from '../images/sparsholt_dennis.png'

const Contact = () => {
  return (
    <Layout title={'Contact'}>
      <div className="container py-5">
        <h1>Contact Us</h1>
        <div className="row">
          <div className="col-12 col-md-6">
            <p>
              We would love to discuss your energy requirement needs with you.
              Please get in touch with us using the contact details below:
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:info@solarpvpartners.com">
                info@solarpvpartners.com
              </a>
            </p>
            <p>
              <strong>Mobile:</strong> +44 (0)7785 353 901
            </p>
            <p>
              <strong>Office:</strong> +44 (0)2381 230 230
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img src={Dennis} alt="" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
