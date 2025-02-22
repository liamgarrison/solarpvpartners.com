import React from "react";
import AboutCard from "../../components/AboutCard";
import Image from "next/image";
import Sparsholt from "../../public/images/sparsholt_college.jpg";
import BatterySolarWind from "../../public/images/battery_solar_wind.png";
export const metadata = {
  title: "About | Solar PV Partners",
  description:
    "Learn about Solar PV Partners and our renewable energy solutions",
};

const About = () => {
  return (
    <div className="container py-10 max-w-3xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-12">About Us</h1>
      <h2 className="text-2xl font-bold mb-4">Our Story</h2>
      <p className="mb-8">
        Solar PV Partners (SPVP) deliver improved financial and environmental
        performance with our partners in the education, energy, farming, retail,
        IT, manufacturing, government and distribution sectors. Our purpose is
        to improve energy independence and deploy sustainable, renewable
        resources for the improvement of our environment. SPVP partners with
        companies in the UK/Ireland, the Caribbean, Czech Republic, Estonia,
        Kenya, Malta, Mexico, Netherlands, Nigeria, Netherlands, Norway,
        Portugal, Sierra Leone, Zimbabwe, UAE and the USA to install safe,
        non-toxic battery technology solutions with Solar PV systems, for both
        on-grid and off-grid locations.
      </p>
      <Image
        className="w-full h-[350px] object-cover mb-8"
        src={Sparsholt}
        alt="Sparsholt College"
      />
      <p className="mb-8">
        We initially started the journey in 2012 with the goal of providing
        commercial Solar PV systems to Colleges and local governments, which we
        started in Hampshire, UK in 2013 with a 100kW system installation at
        Basingstoke College of Technology and then added storage technologies as
        part of our renewable energy system solutions. We spent nine months
        researching various battery chemistries and energy storage solutions.
        Energy storage system (ESS) installations began in 2014 with the
        cleanest, safest battery available worldwide. SPVP were the first UK
        company to license the only Cradle to Cradle Certified battery from
        Aquion (the salt water battery) and were the largest distributor for
        both the residential and commercial markets; the first to install
        Simipli Phi Power batteries in the UK in 2017 and the first to trial the
        Alpha ESS Lithium Iron Phosphate LiFePO4 Storion SMILE5 complete energy
        storage solution with a UK utility for residential applications in 2019.
      </p>
      <p className="mb-8">
        In 2015/2016 Solar PV Partners was the creator, architect, project
        facilitator and project manager for the largest Solar PV installation at
        any UK educational establishment, Sparsholt College, with 633kWp of
        Solar PV across 20 different rooftops. Sparsholt College will continue
        to benefit for the next two decades from very significant reductions in
        their reduced per kW hour rate of electricity through the Power Purchase
        Agreement arranged by SPVP.
      </p>
      <Image
        className="w-full h-[350px] object-cover mb-8"
        src={BatterySolarWind}
        alt="Battery Solar Wind"
      />
      <p className="mb-8">
        In 2017, Solar PV Partners installed the first SimpliPhi Power Lithium
        Iron Phosphate LiFePO4 battery/energy storage system in a Winchester, UK
        home. SimpliPhi Power is one of the most robust, safest, longest life,
        low voltage Lithium battery solutions. The robustness of the Simpliphi
        battery was confirmed in stress testing against thirty other mostly well
        known battery brands; documented by the US military in 3 day stress
        tests.
      </p>
      <p className="mb-8">
        In 2018, SPVP’s subsidiary company shipped Simpliphi batteries to Nature
        Grid in Nigeria for use in Total petrol stations to replace diesel
        generators with Solar + Storage. LiFePo4 (non-cobalt) batteries were
        selected for their outstanding performance in hot climates and safety.
      </p>
      <p className="mb-8">
        In 2019, Alpha ESS, another outstanding LiFePO4 battery with a a
        sophisticated cloud control app, Alpha Cloud has become the low and high
        voltage residential/commercial/industrial SPVP partners for delivery of
        residential, commercial and multi-megawatt containerized solutions in
        the UK market. Solar PV Partners are now offering energy storage
        technology solutions for grid balancing solutions for Demand Side
        Response (DFR Scheme), STOR, peak shaving, on site consumption of
        renewables, uninterrupted back-up power supply systems and energy market
        brokering. Solar PV Partners are working with partners and directly with
        customers in the UK/Ireland, Europe, Middle East, Mexico, the Caribbean,
        USA and across Africa for a variety of Solar PV plus Storage low/high
        voltage, on off-grid solutions. Solar PV Partners have become the first
        licensed UK distributor of Encell Fused Iron batteries. Contact us to
        discuss how to maximise renewable energy performance.
      </p>
      <h2 className="text-2xl font-bold mb-4 mt-12">Meet the team</h2>
      <AboutCard
        image={"/images/dennis.jpg"}
        title={"Dennis Garrison"}
        subtitle={"Manging Director"}
        description={
          "Dennis founded the company with partners in 2012 and has over 10 years experience in environmental technologies deployment in a dozen countries. He has extensive experience launching new businesses and numerous technologies Internationally in both the media communications and renewable energy sectors."
        }
      />
      <AboutCard
        image={"/images/andy.png"}
        title={"Andy Rigg"}
        subtitle={"Founder"}
        description={
          "Andy is one of the original founders of Solar PV Partners, a Hampshire farm owner generating almost all energy requirements from solar plus storage and has been involved in sustainability for over 28 years."
        }
      />
      <AboutCard
        image={"/images/liam.jpeg"}
        title={"Liam Garrison"}
        subtitle={"IT and Energy Analyst"}
        description={
          "Liam is a data analyst who majored in chemistry at Oxford University and has assisted several businesses in improving business processes, including the NHS. He is an ardent photographer, environmentalist and mountain climber."
        }
      />
    </div>
  );
};

export default About;
