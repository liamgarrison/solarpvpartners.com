import { Link } from 'gatsby'
import React from 'react'
import Layout from 'components/layout'

const Contact = () => {
  return (
    <Layout title={'Contact'}>
      <div className="container py-5">
        <h1>Contact Us</h1>
        <p>
          We would love to discuss your energy requirement needs with you.
          Please get in touch with us using the contact details below:
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:info@solarpvpartners.com">info@solarpvpartners.com</a>
        </p>
        <p>
          <strong>Tel:</strong> +44 (0)2381 230 230
        </p>
      </div>
    </Layout>
  )
}

export default Contact
