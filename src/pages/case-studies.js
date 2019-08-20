import { Link } from 'gatsby'
import React from 'react'
import Layout from 'components/layout'
import CaseStudyCard from 'components/CaseStudyCard'
import Sparsholt from '../images/sparsholt_college.jpg'

const CaseStudies = () => {
  return (
    <Layout title={'Case Studies'}>
      <div className="container py-5">
        <h1>Case Studies</h1>
        <CaseStudyCard
          image={Sparsholt}
          title={'Sparsholt College, UK 633kWp Installation'}
          subtitle={'Project Development & Finance'}
          description={`During 2015/2016, Solar PV Partners was the creator, architect, project facilitator and manager of the largest Solar PV installation at any UK educational establishment, Sparsholt College.  

          The 633kWp of Solar on 20 different rooftops will continue to benefit  Sparsholt College for next 2 decades from very significant reductions in their per kW hour rate of electricity through the Power Purchase Agreement (PPA), which Solar PV Partners facilitated. 
          
          Sparsholt College has saved over 1,000 tons of CO2 emissions from the use of their Solar PV systems over the past 3 years, the equivalent of planting more than 20,000 trees.`}
        />
        <CaseStudyCard
          image={Sparsholt}
          title={
            'Total Oil Petrol Stations in Nigeria convert to Solar + Storage'
          }
          subtitle={
            'Renewable Energy Replaces Diesel Generator Use in October 2018'
          }
          description={`Nature Grid, was the contracted EPC for installaltions of the Total Petrol Stations project in Nigeria for both Solar PV panels and SimpliPhi Power batteries, which were supplied by Solar PV Partners.  The photo from one of the Petrol Station installations has 14KWhr’s of SimpliPhi batteries.

          Savings of up to 78% were realized with the combinantion of Solar plust Storage from the previously diesel generator powered pertrol stations. Renewable energy has been proven across Africa as a viable replacement to the use of diesel generation and has the additional benefits of significantly reducing carbon emissions, reducing noise and the smell of burning fuel to generate electricity. 
          
          Additionally, the cost of maintenance of diesel generators and frequent replacement requirements makes the Solar + Storage model a very viable     and cost effective alternative.
          `}
        />
        <CaseStudyCard
          image={Sparsholt}
          title={
            'Lithium Iron Phosphate Residential Installation Winchester, First SimpliPhi Power UK Installation'
          }
          subtitle={'Solar + Storage'}
          description={`Solar PV Partners installed the 6.88kWhr SimpliPhi Power battery/energy storage system in March 2017 with a Victron inverter in a Harry Potter sized cupboard under the stairs of a residential home. The system will provide overnight power for the Winchester family for  the next 10 -15 plus years.

          The two SimpliPhi Power PHI 3.4kWhr batteries, which do not contain cobalt or pose the risk of ‘thermal runaway’, are the safest, most efficient, compact and robust Lithium Ion battery available (based on U.S. Government extreme stress testing of 31 different battery technologies) are charged using excess power generated from the Winchester home owner’s rooftop solar panels during the daylight hours.
          
          LiFePO4 (LFP) Lithium Iron Phosphate batteries are one of the very safest,  long life energy storage solutions.`}
        />
        <CaseStudyCard
          image={Sparsholt}
          title={
            'Consultation and Energy Storage Supply Cabo San Lucas , Mexico'
          }
          subtitle={
            'Solar + Storage in Executive Estate On-Grid/Off-Grid 4th Quarter 2016'
          }
          description={`Our partner in Mexico, Innovacion Solar installed a 16.2kWp Solar PV array with a   62kWhr Aquion Aspen Energy Storage system in Pedregal, Cabo San Lucas, Mexico.      The combination of solar generation plus electricity storage with a small back up generator   was ideal for our customer, who wanted to be as grid independent as possible in their new family home, especially during hurricane season when grid electricity supplies can go down for days at a time.
          
          Francisco Vargas, Operations Director of Innovacion Solar said, “Our customer wanted the latest and cleanest energy storage system available. We worked with Solar PV Partners to configure the system specifications and are delighted with the performance of the Aquion Aspen batteries. We will now be looking to incorporate Aquion batteries for our projects going forward.”`}
        />
        <CaseStudyCard
          image={Sparsholt}
          title={'Eurotunnel Motorway Sign'}
          subtitle={'Solar + Storage Off-Grid'}
          description={`Aquion Lights the way to Europe!  
          First Commercial Installation of Aquion in the UK
          
          Solar PV Partners and ESS Limited(Energy Saving Specialist), two UK renewable energy resource management companies, announced in February 2016 the first UK and European Off-Grid solar installation with a 25 kWhr Aquion Energy battery system to illuminate the entry sign at the EURO TUNNEL UK border.

          Dennis Garrison, Managing Director of Solar PV Partners Ltd, a UK/European dealer of Aquion Energy storage systems, said:  “We are delighted to work with ESS, an innovative renewable energy  installation company on the first Off-Grid Aquion Energy system installed in the UK and Europe for storing solar power.   ESS had the vision to create a renewable energy solution, combining solar with the award-winning Aquion Energy batteries for lighting the new Channel Tunnel welcome sign in Folkestone”.

          “This is an exciting project for ESS and helps demonstrate Euro Tunnel’s commitment to the environment through use of renewable energy,” said ESS Director Bill Roberts. “The installation of solar PV and sodium ion batteries at the EURO TUNNEL site is supplying clean renewable energy to the new welcome sign at the M20 entrance. Aquion Energy Storage is completely non-toxic, contains no heavy metals, is non-flammable and a genuinely sustainable alternative to lead acid battery and lithium ion technologies.  The ability to fully discharge the Aquion system to 100% was a key factor in our choice of batteries and the environmental credentials of the Aquion technology was an important consideration for the client”`}
        />
      </div>
    </Layout>
  )
}

export default CaseStudies
