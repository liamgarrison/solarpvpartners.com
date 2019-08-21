import { Link } from 'gatsby'
import React from 'react'
import Layout from 'components/layout'
import CELogo from '../images/ce_logo.png'
import IECLogo from '../images/iec_logo.png'
import ProductCard from 'components/ProductCard'
import StorionSmile5 from '../images/storion_smile_5.png'
import StorionEcoES5 from '../images/Storion_Eco_ES5.png'
import Commercial from '../images/commercial_ess.png'
import Containerised from '../images/containerised.jpg'
import Cloud from '../images/product_cloud.png'

const Products = () => {
  return (
    <Layout title={'Products'}>
      <div className="container py-5">
        <h1>Our Products</h1>
        <h2>Alpha ESS Storion Systems</h2>
        <p>
          The Lithium Ferro Phosphate (LFP or LiFePO4) battery systems from
          Alpha ESS are non-toxic, non-hazardous (no cobalt) and have very high
          efficiency charge and discharge rates, even in extreme climates.
          Storion Series are an all-in-one energy storage and management system
          for residential, agricultural, industrial and commercial applications.
        </p>
        <div className="d-flex justify-content-start">
          <img src={CELogo} style={styles.smallLogo} />
          <img src={IECLogo} style={styles.smallLogo} />
        </div>
        <ProductCard
          image={StorionSmile5}
          title={'Storion SMILE 5'}
          subtitle={'Residential, Commercial'}
          specSheet={
            'https://www.alpha-ess.com/Upload/Images/20190513095218_219292.pdf'
          }
          description={`
          The STORION Smile 5, is the perfect complete energy storage solution for storing excess solar PV generation at home or in a business for self consupmtion. Power storage ranges from 5.7KWhr to 22.4KWhr. A 5kW inverter is included along with    the Alpha Cloud software, which provides remote control of the system and helps       to maximize savings.
            The 24-hour Alpha Cloud monitoring system via the user-friendly interface demonstrates real-time profit. Other benefits include:
            * Worry-Free-Safe operation with built-in system protection mechanisms
            * Prompt response to any problems with remote diagnostics
            * Local technical support from Alpha engineers
            * Free Upgrades for Life of Sysstem
            * Easy to update your system online or via USB dri
              Prices for SMILE5 start at £3.3k for 5.7kWhr storage, 5kW inverter and Alpha Cloud 

          `}
        />
        <ProductCard
          image={StorionEcoES5}
          title={'Storion Eco-ES5'}
          subtitle={'Commercial'}
          specSheet={
            'https://www.alpha-ess.com/Upload/Images/20180525095118_228575.pdf'
          }
          description={`
          Schools, universities, government office buidlings, factories, petrol stations, and other commercial buildings with high levels of energy demand can maximize their energy independence and reduce grid power demand with solar PV and battery storage. Even businesses without solar PV systems can benefit from the ability of batteries to reduce peak power demand and shift grid consumption to off-peak hours.

          AlphaESS provides a one-stop solution for commercial and industrial facilities seeking to save on electricity bills, reduce exposure to rising energy prices, generate additional revenues from renewable energy, and reduce their environmental impacts. AlphaESS's remote monitoring and maintenance platform, the AlphaCloud platform helps customers monitor the system's operating status in real time through web pages or mobile APPs, remotely set various functions, perform remote software upgrades for inverters, EMS and BMS.
 
          `}
        />
        <ProductCard
          image={Commercial}
          title={'Storion-T30/T50/T100'}
          subtitle={'Commercial, Industrial '}
          specSheet={null}
          description={`
          Output	30 / 50 / 100 kW	Max. Capacity	1032.2 kWh
          Battery	M48112-S and	Inverter Dimensions	1180 x 700 x 1500 mm
          
          Cluster Capacity Range	28.7 ~ 1032.2 kWh
          
          Inverter Weight	 170kg w/o battery for 30kW
          520 / 750 kg for 50 / 100 kW combined  with battery
          
          
          DOD	90%,     Certifications	CE, IEC
          `}
        />
        <ProductCard
          image={Containerised}
          title={'Containerised energy storage solutions  '}
          subtitle={'Industrial, Utility, On-Grid and Off-Grid  '}
          specSheet={null}
          description={`
          AlphaESS also enable communities and companies with multiple distributed energy resources to share energy with a microgrid. This type of interconnected “Virtual Power Plant” is ideal for areas with no grid access, communities that want to disconnect from the network, or companies that want to provide renewable energy electricity supply.  See press article link below:

Alpha ESS powers Africa's largest solar & energy storage project for a hospital commissioned at FOCO.

 
          `}
        />
        <h2>Alpha Cloud</h2>
        <p>
          AlphaCloud platform provides monitoring of the system's operating
          status in real time through web pages or mobile APPs, remote setting
          of various functions and enables remote software upgrades for
          inverters, EMS and BMS.
        </p>
        <p className="mb-5">
          <ul>
            <li>Safe operation with built-in system protection mechanisms</li>
            <li>Prompt response to any problems with remote diagnostics</li>
            <li>Local technical support from Alpha engineers</li>
            <li>Easy to update online or via USB drive</li>
            <li>Free Upgrades for Life of System</li>
          </ul>
        </p>
        <img className="w-100 mb-5" src={Cloud} />
        <h3>Industrial Batteries Regulation</h3>
        <p>
          As a distributor of industrial batteries under the Waste Batteries and
          Accumulator Regulations 2009, Solar PV Partners provide and have
          provided Aqueous Hybrid and Lithium Iron Phosphate (LFP) LiFePO4
          batteries. We are obliged to take back waste industrial batteries
          supplied to an end user by us for treatment and recycling. We are
          required to do this in any calendar year we place new industrial
          batteries on the market. If any of our customers, or in certain cases
          other end users, require us to take back Industrial batteries, they
          should contact us at recycle@solarpvpartners.com. We will assist in
          the necessary arrangements for the return, proper treatment and
          recycling of the waste industrial batteries.{' '}
        </p>
      </div>
    </Layout>
  )
}

const styles = {
  smallLogo: {
    height: 30,
    objectFit: 'cover',
    marginRight: 20,
  },
}

export default Products
