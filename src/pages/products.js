import { Link } from 'gatsby'
import React from 'react'
import Layout from 'components/layout'
import CELogo from '../images/ce_logo.png'
import IECLogo from '../images/iec_logo.png'
import ProductCard from 'components/ProductCard'
import StorionSmile5 from '../images/storion_smile_5.png'
import StorionEcoES5 from '../images/Storion_Eco_ES5.png'
import Commercial from '../images/commercial_ess.png'
import Containerised from '../images/alpha_container.jpg'
import Cloud from '../images/product_cloud.png'

const Products = () => {
  return (
    <Layout title={'Products'}>
      <div className="container py-5">
        <h1>Our Products</h1>
        <h2>Made in Britain Energy Storage Systems</h2>
        <p>
          Solar PV Partners work with Multi Source Power’s team of experts to design, build, and deliver Battery Energy Storage Systems for both on and off-grid applications. Our high-performance modular BESS fully integrates into any power plant to accelerate return on investment on projects across the globe.        </p>
        <p>
          Our commercial BESS partners have a wealth of experience with solutions across the UK and Internationally, leveraging low OPEX, energy-dense technology to enable customers to optimise their energy objectives and create new revenue streams from frequency balancing, curtailment and other grid services, including dynamic containment.
        </p>
        <p>
          Energy storage systems also provide solutions to projects outside of traditional markets, where stable power can be scarce and investing in the right equipment is vital in providing consumers, businesses and investors with stable power grids. Our grid-forming BESSs tour the globe fuelling high profile events, providing power solutions to some of the remotest communities and reinforce island grids through hybridisation, DC-coupled solar and other renewables.        </p>
        <p>
          Multi Source Power systems are proudly British Made, working to enable the UK and countries around the world to achieve their net zero carbon ambitions.
        </p>
        <h3>Flex-ESS250</h3>
        <p>The most flexible all-in-one energy storage solution on the market today</p>
        <ul>
          <li>Modular for a flexible energy storage configuration</li>
          <li>Market leading power density and efficiency</li>
          <li>Ultra-Low Installation Cost/Time</li>
          <li>DC Coupled Solar</li>
          <li>Manufactured in Great Britain</li>
        </ul>
        <p>
          The Flex-ESS250 hybrid power system is a high-density, modular energy solution. Reduced project risk and cost due to simple installation, small footprint, and lightweight construction. Low operating costs with enclosed cooling and durable housing. Integrating KORE Power energy storage and our ground-breaking FLEX Inverter, Flex-ESS250 achieves an industry-leading, optimising footprint for applications where space is constrained or at a premium. Working with multiple power sources and output configurations, the Flex-ESS250 provides the ultimate, flexible approach for most applications.
        </p>
        <h3>Flex-ESS500</h3>
        <p>For low cost project overheads</p>
        <h4>Inverter</h4>
        <ul>
          <li>Reduced infrastructure &amp; component costs</li>
          <li>UPS function offering protection to your facility</li>
          <li>Both Off &amp; On grid forming and following</li>
          <li>Peak efficiency 98.6% (lowest 97%)</li>
          <li>Outdoor housing IP64 (indoor version available)</li>
        </ul>
        <h4>Storage</h4>
        <ul>
          <li>Long lifespan with all components designed to last 5000 to 6000 cycles (10/15/20 year lifespan)</li>
          <li>British-engineered with 5/10/15 year product extendable warranties</li>
          <li>Maximum safety, modules certified to UL9540A</li>
          <li>Expandable flexible energy storage system can be sized according to need</li>
          <li>Optimised battery performance via the Master/String-Rack Controller (SRC)</li>
          <li>Li-ion Tamer off-gas protection</li>
        </ul>
        <h4>BESS</h4>
        <p>
          Modular and expandable, the FLEX-ESS500 offers a plug-and-play, factory built-and-tested solution. The thermally insulated and ultra durable housing ensures ideal climatic conditions for the ESS. Parasitic loads are minimised by water cooling the inverter and HVAC for the KORE Mark 1 batteries, resulting in class leading efficiencies.
        </p>
        <h3>Flex-ESS1000</h3>
        <p>Utility-Scale Modular Storage System</p>
        <ul>
          <li>1Hr to 4Hrs +</li>
          <li>Ultra-Low Lifetime Op-Ex</li>
          <li>Ultra-Low Installation Cost/Time</li>
          <li>Manufactured in Great Britain</li>
        </ul>
        <p>
          The Flex-ESS1000 integrated energy storage system is a high-density, modular energy solution. Low operating costs due to its enclosed cooling and IP64 housing. Integrating KORE Power Mark1 storage modules and EPC's CAB1000 inverter, Flex-ESS1000 achieves an industry-leading, density-optimising footprint for applications where space is constrained or at a premium. Working with multiple power sources and output configurations, the Flex-ESS1000 provides the ultimate, flexible approach for scalable ESS applications.
        </p>
        <h2>Alpha ESS Storion Systems</h2>
        <p>
          The Lithium Iron Phosphate (LFP or LiFePO4) battery systems from Alpha
          ESS are non-toxic, non-hazardous (no cobalt) and have very high
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
            'https://www.alpha-ess.com/Upload/Images/20190902054742_276149.pdf'
          }
        >
          <p>
            The STORION Smile 5, is the perfect complete energy storage solution
            for storing excess solar PV generation at home or in a business for
            self consumption. Power storage ranges from 5.7kWh to 22.8kWh. A 5kW
            inverter is included along with the Alpha Cloud software, which
            provides remote control of the system and helps to maximize savings.
            The 24-hour Alpha Cloud monitoring system via the user-friendly
            interface demonstrates real-time profit. Other benefits include:
          </p>
          <ul>
            <li>
              Worry-Free-Safe operation with built-in system protection
              mechanisms
            </li>
            <li>Prompt response to any problems with remote diagnostics</li>
            <li>Local technical support from Alpha engineers</li>
            <li>Free Upgrades for Life of System</li>
            <li>
              Easy to update your system online or via USB dri Prices for SMILE5
              start at £3.3k for 5.7kWh storage, 5kW inverter and Alpha Cloud
            </li>
          </ul>
        </ProductCard>
        <ProductCard
          image={StorionEcoES5}
          title={'Storion Eco-S5'}
          subtitle={'Commercial'}
          specSheet={
            'https://www.alpha-ess.com/Upload/Images/20180525095118_228575.pdf'
          }
          description={`
          
          `}
        >
          <p>
            Schools, universities, government office buidlings, factories,
            petrol stations, and other commercial buildings with high levels of
            energy demand can maximize their energy independence and reduce grid
            power demand with solar PV and battery storage. Even businesses
            without solar PV systems can benefit from the ability of batteries
            to reduce peak power demand and shift grid consumption to off-peak
            hours.
          </p>
          <p>
            AlphaESS provides a one-stop solution for commercial and industrial
            facilities seeking to save on electricity bills, reduce exposure to
            rising energy prices, generate additional revenues from renewable
            energy, and reduce their environmental impacts. AlphaESS's remote
            monitoring and maintenance platform, the AlphaCloud platform helps
            customers monitor the system's operating status in real time through
            web pages or mobile APPs, remotely set various functions, perform
            remote software upgrades for inverters, EMS and BMS.
          </p>
        </ProductCard>
        <ProductCard
          image={Commercial}
          title={'Storion-T30/T50/T100'}
          subtitle={'Commercial, Industrial '}
          specSheet={null}
        >
          <p>Output 30 / 50 / 100 kW Max. Capacity 1032.2 kWh</p>
          <p>Battery M48112-S and Inverter Dimensions 1180 x 700 x 1500 mm</p>
          <p>Cluster Capacity Range 28.7 ~ 1032.2 kWh</p>
          <p>
            Inverter Weight 170kg w/o battery for 30kW 520 / 750 kg for 50 / 100
            kW combined with battery
          </p>
          <p>DOD 90%, Certifications CE, IEC</p>
        </ProductCard>
        <ProductCard
          image={Containerised}
          title={'Containerised energy storage solutions  '}
          subtitle={'Industrial, Utility, On-Grid and Off-Grid  '}
          specSheet={null}
        >
          <p>
            AlphaESS also enable communities and companies with multiple
            distributed energy resources to share energy with a microgrid. This
            type of interconnected “Virtual Power Plant” is ideal for areas with
            no grid access, communities that want to disconnect from the
            network, or companies that want to provide renewable energy
            electricity supply. See press article link below: Alpha ESS powers
            Africa's largest solar & energy storage project for a hospital
            commissioned at FOCO.
          </p>
        </ProductCard>
        <h2>Alpha Cloud</h2>
        <p>
          AlphaCloud platform provides monitoring of the system's operating
          status in real time through web pages or mobile APPs, remote setting
          of various functions and enables remote software upgrades for
          inverters, EMS and BMS.
        </p>
        <p className="mb-5"></p>
        <ul>
          <li>Safe operation with built-in system protection mechanisms</li>
          <li>Prompt response to any problems with remote diagnostics</li>
          <li>Local technical support from Alpha engineers</li>
          <li>Easy to update online or via USB drive</li>
          <li>Free Upgrades for Life of System</li>
        </ul>
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
