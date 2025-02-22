import React from "react";
import Image from "next/image";
import Link from "next/link";

// Import static images
import logoHorizontalImg from "../../public/images/logo_horizontal.png";
import projectManagementImg from "../../public/images/project_management.jpg";
import peakSolarImg from "../../public/images/peak_solar.jpg";
import powerLinesImg from "../../public/images/power_lines.jpg";
import carHomeImg from "../../public/images/car_home.jpg";
import benefitsImg from "../../public/images/benefits.png";

export const metadata = {
  title: "Our Solutions",
  description: "Our Solutions",
  openGraph: {
    title: "Our Solutions",
    description: "Our Solutions",
    images: [{ url: logoHorizontalImg.src }],
  },
};

const Solutions = () => {
  return (
    <div className="py-10 max-w-3xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-16">Our Solutions</h1>

      <div className="flex flex-col sm:flex-row-reverse sm:-space-x-8 space-y-8 sm:space-y-0 items-stretch mb-16">
        <Image
          src={projectManagementImg}
          alt="Project Management"
          className="w-full sm:w-1/2 h-full relative min-h-[200px] object-cover"
        />
        <div className="w-full sm:w-1/2">
          <h3 className="text-2xl font-bold mb-4">
            International project development and finance
          </h3>
          <p className="mb-4">
            We facilitate Solar PV and ESS, energy storage systems finance,
            which are available for UK, European, African and other
            International projects.{" "}
          </p>
          <Link
            href={"/case-studies"}
            className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors inline-block"
          >
            View Case Studies
          </Link>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-8 sm:space-y-0 items-stretch mb-16">
        <Image
          src={peakSolarImg}
          alt="Peak Solar"
          className="w-full sm:w-1/2 relative min-h-[200px] object-cover"
        />
        <div className="w-full sm:w-1/2">
          <h3 className="text-2xl font-bold mb-4">
            Maximising use of Solar PV generation
          </h3>
          <p className="mb-4">
            We provide Energy Storage Systems (ESS) for time shifting of Solar
            PV power generation to when it&apos;s actually needed, increasing
            financial benefits.
          </p>
          <Link
            href={"/products"}
            className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors inline-block"
          >
            View ESS Products
          </Link>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row-reverse sm:-space-x-8 space-y-8 sm:space-y-0 items-stretch mb-16">
        <Image
          src={powerLinesImg}
          alt="Power Lines"
          className="w-full sm:w-1/2 relative min-h-[200px] object-cover"
        />
        <div className="w-full sm:w-1/2">
          <h3 className="text-2xl font-bold mb-4">
            Reducing dependency on grid power
          </h3>
          <p className="mb-4">
            Power outages are becoming more frequent and security of supply more
            important. The combination of renewable energy and storage we
            provide gives a way to secure your supply. See benefits below{" "}
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-8 sm:space-y-0 items-stretch mb-10">
        <Image
          src={carHomeImg}
          alt="Car Home"
          className="w-full sm:w-1/2 relative h-[200px] object-cover"
        />
        <div className="w-full sm:w-1/2">
          <h3 className="text-2xl font-bold mb-4">
            Residential Benefits of Solar + Storage
          </h3>
          <p className="mb-4">
            Managing your home&apos;s energy supply, when and how you use it is
            now possible. Renewable energy generation with Solar plus Storage
            provides more self consumption and efficient use of power. Also,
            power outages are becoming more frequent and security of supply more
            important. The combination of renewable energy generation and
            storage we provide help secure your supply and maximise use of your
            power. See energy storage benefits below:{" "}
          </p>
        </div>
      </div>

      <Image src={benefitsImg} alt="Benefits" className="w-full" />
    </div>
  );
};

export default Solutions;
