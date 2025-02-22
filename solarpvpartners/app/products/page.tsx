import React from 'react'
import ProductCard from '../../components/ProductCard'
import Image from 'next/image'

export const metadata = {
  title: 'Products | Solar PV Partners',
  description:
    'Explore our range of products and solutions for renewable energy',
  openGraph: {
    title: 'Products | Solar PV Partners',
    description:
      'Explore our range of products and solutions for renewable energy',
    images: [{ url: '/images/logo_horizontal.png' }],
  },
}

const Products = () => {
  return (
    <div className="container py-10 max-w-3xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-12">Our Products</h1>

      {/* New Made in Britain Energy Storage Systems section */}
      <h2 className="text-2xl font-bold mb-4">
        Made in Britain Energy Storage Systems
      </h2>
      <p className="mb-8">
        Solar PV Partners work with Multi Source Power’s team of experts to
        design, build, and deliver Battery Energy Storage Systems for both on
        and off-grid applications. Our high-performance modular BESS fully
        integrates into any power plant to accelerate return on investment on
        projects across the globe.
      </p>
      <p className="mb-8">
        Our commercial BESS partners have a wealth of experience with solutions
        across the UK and Internationally, leveraging low OPEX, energy-dense
        technology to enable customers to optimise their energy objectives and
        create new revenue streams from frequency balancing, curtailment and
        other grid services, including dynamic containment.
      </p>
      <p className="mb-8">
        Energy storage systems also provide solutions to projects outside of
        traditional markets, where stable power can be scarce and investing in
        the right equipment is vital in providing consumers, businesses and
        investors with stable power grids. Our grid-forming BESSs tour the globe
        fuelling high profile events, providing power solutions to some of the
        remotest communities and reinforce island grids through hybridisation,
        DC-coupled solar and other renewables.
      </p>
      <p className="mb-8">
        Multi Source Power systems are proudly British Made, working to enable
        the UK and countries around the world to achieve their net zero carbon
        ambitions.
      </p>

      <ProductCard
        image={'/images/flex-ess-250.png'}
        title={'Flex-ESS250'}
        subtitle={'The most flexible all-in-one energy storage solution'}
      >
        <p className="mb-4">
          The Flex-ESS250 hybrid power system is a high-density, modular energy
          solution. Reduced project risk and cost due to simple installation,
          small footprint, and lightweight construction. Low operating costs
          with enclosed cooling and durable housing. Integrating KORE Power
          energy storage and our ground-breaking FLEX Inverter, Flex-ESS250
          achieves an industry-leading, optimised footprint for applications
          where space is constrained, or at a premium. Working with multiple
          power sources and output configurations, the Flex-ESS250 provides the
          ultimate, flexible approach for most applications.
        </p>
        <ul className="list-disc list-outside mb-4 pl-4">
          <li>Modular for flexible energy storage configurations</li>
          <li>Market leading power density and efficiency</li>
          <li>Ultra-Low Installation Cost/Time</li>
          <li>DC Coupled Solar</li>
          <li>Manufactured in Great Britain</li>
        </ul>
      </ProductCard>

      <ProductCard
        image={'/images/flex-ess-500.png'}
        title={'Flex-ESS500'}
        subtitle={'Engineered for low project overheads'}
      >
        <p className="mb-4">
          Flex-ESS500 provides a plug-and-play, factory built-and-tested energy
          storage solution designed for low cost project overheads. It
          integrates an efficient inverter with high-performance storage,
          offering both off- and on-grid functionality.
        </p>
        <ul className="list-disc list-outside mb-4 pl-4">
          <li>
            <strong>Inverter:</strong> Reduced infrastructure &amp; component
            costs, UPS function for facility protection, on/off grid forming and
            following with peak efficiency up to 98.6% (lowest 97%) and outdoor
            housing IP64 (indoor version available)
          </li>
          <li>
            <strong>Storage:</strong> Long lifespan (5000 to 6000 cycles,
            10/15/20 year lifespan), British-engineered with extendable
            warranties, maximum safety with modules certified to UL9540A,
            expandable and optimised via the Master/String-Rack Controller
            (SRC), and Li-ion Tamer off-gas protection
          </li>
          <li>
            <strong>BESS:</strong> Modular and expandable solution; thermally
            insulated and ultra-durable housing ensures ideal climatic
            conditions, with minimized parasitic loads by water cooling the
            inverter and HVAC for KORE Mark 1 batteries, resulting in
            class-leading efficiencies.
          </li>
        </ul>
      </ProductCard>

      <ProductCard
        image={'/images/flex-ess-1000.png'}
        title={'Flex-ESS1000'}
        subtitle={'Utility-Scale Modular Storage System'}
      >
        <ul className="list-disc list-outside mb-4 pl-4">
          <li>1Hr to 4Hrs + storage capability</li>
          <li>Ultra-Low Lifetime Op-Ex</li>
          <li>Ultra-Low Installation Cost/Time</li>
          <li>Manufactured in Great Britain</li>
        </ul>
        <p>
          The Flex-ESS1000 integrated energy storage system is a high-density,
          modular energy solution. Low operating costs due to its enclosed
          cooling and IP64 housing. Integrating KORE Power Mark1 storage modules
          and EPC’s CAB1000 inverter, Flex-ESS1000 achieves an industry-leading,
          density-optimising footprint for applications where space is
          constrained or at a premium. Working with multiple power sources and
          output configurations, the Flex-ESS1000 provides the ultimate,
          flexible approach for scalable ESS applications.
        </p>
      </ProductCard>

      <h2 className="text-2xl font-bold mb-8">Alpha ESS Storion Systems</h2>
      <p>
        The Lithium Iron Phosphate (LFP or LiFePO4) battery systems from Alpha
        ESS are non-toxic, non-hazardous (no cobalt) and have very high
        efficiency charge and discharge rates, even in extreme climates. Storion
        Series are an all-in-one energy storage and management system for
        residential, agricultural, industrial and commercial applications.
      </p>
      <div className="flex justify-start gap-4 my-4">
        <div className="relative w-10 h-10">
          <Image
            src={'/images/ce_logo.png'}
            alt="CE Logo"
            fill
            className="object-contain"
            unoptimized
          />
        </div>
        <div className="relative w-10 h-10">
          <Image
            src={'/images/iec_logo.png'}
            alt="IEC Logo"
            fill
            className="object-contain"
            unoptimized
          />
        </div>
      </div>
      <ProductCard
        image={'/images/storion_smile_5.png'}
        title={'Storion SMILE 5'}
        subtitle={'Residential, Commercial'}
        specSheet={
          'https://www.alpha-ess.com/Upload/Images/20190902054742_276149.pdf'
        }
      >
        <p className="mb-4">
          The STORION Smile 5, is the perfect complete energy storage solution
          for storing excess solar PV generation at home or in a business for
          self consumption. Power storage ranges from 5.7kWh to 22.8kWh. A 5kW
          inverter is included along with the Alpha Cloud software, which
          provides remote control of the system and helps to maximize savings.
          The 24-hour Alpha Cloud monitoring system via the user-friendly
          interface demonstrates real-time profit. Other benefits include:
        </p>
        <ul className="list-disc list-outside mb-4 pl-4">
          <li>
            Worry-Free-Safe operation with built-in system protection mechanisms
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
        image={'/images/storion_eco_es5.png'}
        title={'Storion Eco-S5'}
        subtitle={'Commercial'}
        specSheet={
          'https://www.alpha-ess.com/Upload/Images/20180525095118_228575.pdf'
        }
      >
        <p className="mb-4">
          Schools, universities, government office buidlings, factories, petrol
          stations, and other commercial buildings with high levels of energy
          demand can maximize their energy independence and reduce grid power
          demand with solar PV and battery storage. Even businesses without
          solar PV systems can benefit from the ability of batteries to reduce
          peak power demand and shift grid consumption to off-peak hours.
        </p>
        <p className="mb-4">
          AlphaESS provides a one-stop solution for commercial and industrial
          facilities seeking to save on electricity bills, reduce exposure to
          rising energy prices, generate additional revenues from renewable
          energy, and reduce their environmental impacts. AlphaESS&apos;s remote
          monitoring and maintenance platform, the AlphaCloud platform helps
          customers monitor the system&apos;s operating status in real time
          through web pages or mobile APPs, remotely set various functions,
          perform remote software upgrades for inverters, EMS and BMS.
        </p>
      </ProductCard>
      <ProductCard
        image={'/images/commercial_ess.png'}
        title={'Storion-T30/T50/T100'}
        subtitle={'Commercial, Industrial '}
      >
        <ul className="list-disc list-outside mb-4 pl-4">
          <li>Output 30 / 50 / 100 kW Max. Capacity 1032.2 kWh</li>
          <li>Battery M48112-S and Inverter Dimensions 1180 x 700 x 1500 mm</li>
          <li>Cluster Capacity Range 28.7 ~ 1032.2 kWh</li>
          <li>
            Inverter Weight 170kg w/o battery for 30kW 520 / 750 kg for 50 / 100
            kW combined with battery
          </li>
          <li>DOD 90%, Certifications CE, IEC</li>
        </ul>
      </ProductCard>
      <ProductCard
        image={'/images/alpha_container.jpg'}
        title={'Containerised energy storage solutions  '}
        subtitle={'Industrial, Utility, On-Grid and Off-Grid  '}
      >
        <p className="mb-4">
          AlphaESS also enable communities and companies with multiple
          distributed energy resources to share energy with a microgrid. This
          type of interconnected “Virtual Power Plant” is ideal for areas with
          no grid access, communities that want to disconnect from the network,
          or companies that want to provide renewable energy electricity supply.
          See press article link below: Alpha ESS powers Africa&apos;s largest
          solar & energy storage project for a hospital commissioned at FOCO.
        </p>
      </ProductCard>
      <h2 className="text-2xl font-bold mb-8">Alpha Cloud</h2>
      <p className="mb-4">
        AlphaCloud platform provides monitoring of the system&apos;s operating
        status in real time through web pages or mobile APPs, remote setting of
        various functions and enables remote software upgrades for inverters,
        EMS and BMS.
      </p>
      <ul className="list-disc list-outside mb-8 pl-4">
        <li>Safe operation with built-in system protection mechanisms</li>
        <li>Prompt response to any problems with remote diagnostics</li>
        <li>Local technical support from Alpha engineers</li>
        <li>Easy to update online or via USB drive</li>
        <li>Free Upgrades for Life of System</li>
      </ul>
      <div className="h-[300px] relative mb-12">
        <Image
          className="w-full h-auto object-contain"
          src={'/images/product_cloud.png'}
          alt="Cloud"
          fill
          unoptimized
        />
      </div>
      <h3 className="text-xl font-bold mb-4">
        Industrial Batteries Regulation
      </h3>
      <p className="mb-4">
        As a distributor of industrial batteries under the Waste Batteries and
        Accumulator Regulations 2009, Solar PV Partners provide and have
        provided Aqueous Hybrid and Lithium Iron Phosphate (LFP) LiFePO4
        batteries. We are obliged to take back waste industrial batteries
        supplied to an end user by us for treatment and recycling. We are
        required to do this in any calendar year we place new industrial
        batteries on the market. If any of our customers, or in certain cases
        other end users, require us to take back Industrial batteries, they
        should contact us at recycle@solarpvpartners.com. We will assist in the
        necessary arrangements for the return, proper treatment and recycling of
        the waste industrial batteries.{' '}
      </p>
    </div>
  )
}

export default Products
