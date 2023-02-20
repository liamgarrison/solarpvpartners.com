import Link from 'next/link'
import React from 'react'
import Layout from 'components/layout'
import Background from '../images/home_image_2.jpg'

const HomePage = () => {
  return (
    <Layout title={'Home'}>
      <div
        className="home-background"
        style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${Background})`,
        }}
      >
        <div className="container h-100">
          <div className="h-100 d-flex flex-column justify-content-center align-items-start">
            <h1>Take control of your energy costs with Solar PV Partners</h1>
            <p>We create renewable energy solutions for a sustainable future</p>
            <Link className="btn btn-primary" href={'/solutions'}>
              Global Solutions
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
