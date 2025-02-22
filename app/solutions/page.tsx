import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Our Solutions",
  description: "Our Solutions",
  openGraph: {
    title: "Our Solutions",
    description: "Our Solutions",
    images: [{ url: "/images/logo_horizontal.png" }],
  },
};

const Solutions = () => {
  return (
    <div className="py-10 max-w-3xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-16">Our Solutions</h1>
      <div className="flex flex-col sm:flex-row-reverse sm:-space-x-8 space-y-8 sm:space-y-0 items-stretch  mb-16">
        <div className="w-full sm:w-1/2 h-full relative min-h-[200px]">
          <Image
            src={"/images/project_management.jpg"}
            alt="Project Management"
            fill
            className="object-cover"
          />
        </div>
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
      <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-8 sm:space-y-0 items-stretch  mb-16">
        <div className="w-full sm:w-1/2 relative min-h-[200px]">
          <Image
            src={"/images/peak_solar.jpg"}
            alt="Peak Solar"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full sm:w-1/2">
          <h3 className="text-2xl font-bold mb-4">
            Maximising use of Solar PV generation
          </h3>
          <p className="mb-4">
            We provide Energy Storage Systems (ESS) for time shifting of Solar
            PV power generation to when it’s actually needed, increasing
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
        <div className="w-full sm:w-1/2 relative min-h-[200px]">
          <Image
            src={"/images/power_lines.jpg"}
            alt="Power Lines"
            fill
            className="object-cover"
          />
        </div>
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
        <div className="w-full sm:w-1/2 relative h-[200px]">
          <Image
            src={"/images/car_home.jpg"}
            alt="Car Home"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full sm:w-1/2">
          <h3 className="text-2xl font-bold mb-4">
            Residential Benefits of Solar + Storage
          </h3>
          <p className="mb-4">
            Managing your homes energy supply, when, when an how you use it is
            now possible. Renewable energy generation with Solar plus Storage
            provides more self consumption and efficient use of power. Also,
            power outages are becoming more frequent and security of supply more
            important. The combination of renewable energy generation and
            storage we provide help secure your supply and maximise use of your
            power. See energy storage benefits below:{" "}
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <Image
          src={"/images/benefits.png"}
          alt="Benefits"
          className="shadow-sm w-[500px] object-contain"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default Solutions;
