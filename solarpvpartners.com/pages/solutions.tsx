import Link from 'next/link'
import React from 'react'
import Layout from '@/components/layout'
import Background from '../images/home_background.jpg'
import ProjectManagement from '../images/project_management.jpg'
import PeakSolar from '../images/peak_solar.jpg'
import PowerLines from '../images/power_lines.jpg'
import CarHome from '../images/car_home.jpg'
import Benefits from '../images/benefits.png'

const Solutions = () => {
  return (
    <Layout title={'Solutions'}>
      <div className="container py-5">
        <h1>Our Solutions</h1>
        <div className="row mb-5">
          <div className="col-12 col-md-6 order-md-2">
            <img src={ProjectManagement} />
          </div>
          <div className="col-12 col-md-6 order-md-1">
            <h3>International project development and finance</h3>
            <p>
              We facilitate Solar PV and ESS, energy storage systems finance,
              which are available for UK, European, African and other
              International projects.{' '}
            </p>
            <Link to={'/case-studies'} className="btn btn-primary">
              View Case Studies
            </Link>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-12 col-md-6">
            <img src={PeakSolar} />
          </div>
          <div className="col-12 col-md-6">
            <h3>Maximising use of Solar PV generation</h3>
            <p>
              We provide Energy Storage Systems (ESS) for time shifting of Solar
              PV power generation to when it’s actually needed, increasing
              financial benefits.
            </p>
            <Link to={'/products'} className="btn btn-primary">
              View ESS Products
            </Link>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-12 col-md-6 order-md-2">
            <img src={PowerLines} />
          </div>
          <div className="col-12 col-md-6 order-md-1">
            <h3>Reducing dependency on grid power</h3>
            <p>
              Power outages are becoming more frequent and security of supply
              more important. The combination of renewable energy and storage we
              provide gives a way to secure your supply. See benefits below{' '}
            </p>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-12 col-md-6">
            <img src={CarHome} />
          </div>
          <div className="col-12 col-md-6">
            <h3>Residential Benefits of Solar + Storage</h3>
            <p>
              Managing your homes energy supply, when, when an how you use it is
              now possible. Renewable energy generation with Solar plus Storage
              provides more self consumption and efficient use of power. Also,
              power outages are becoming more frequent and security of supply
              more important. The combination of renewable energy generation and
              storage we provide help secure your supply and maximise use of
              your power. See energy storage benefits below:{' '}
            </p>
          </div>
        </div>
        <img src={Benefits} className="shadow-sm" />
      </div>
    </Layout>
  )
}

export default Solutions
