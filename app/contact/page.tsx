import React from "react";
import Image from "next/image";
import Link from "next/link";
import Dennis from "../../public/images/sparsholt_dennis.png";
export const metadata = {
  title: "Contact | Solar PV Partners",
  description: "Contact Solar PV Partners for renewable energy solutions",
  openGraph: {
    title: "Contact | Solar PV Partners",
    description: "Contact Solar PV Partners for renewable energy solutions",
    images: [{ url: "/images/logo_horizontal.png" }],
  },
};

const Contact = () => {
  return (
    <div className="py-10 max-w-3xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-12">Contact Us</h1>
      <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-8 sm:space-y-0 items-stretch min-h-[200px]">
        <div className="w-full sm:w-1/2 h-full">
          <p className="mb-4">
            We would love to discuss your energy requirement needs with you.
            Please get in touch with us using the contact details below:
          </p>
          <p className="space-x-2 mt-2">
            <strong>Email: </strong>
            <Link href="mailto:info@solarpvpartners.com">
              <span className="text-orange-500 hover:text-orange-700">
                info@solarpvpartners.com
              </span>
            </Link>
          </p>
          <p className="space-x-2 mt-2">
            <strong>Mobile:</strong>
            <Link href="tel:+447785353901">
              <span className="text-orange-500 hover:text-orange-700">
                +44 (0)7785 353 901
              </span>
            </Link>
          </p>
          <p className="space-x-2 mt-2">
            <strong>Office:</strong>
            <Link href="tel:+442381230230">
              <span className="text-orange-500 hover:text-orange-700">
                +44 (0)2381 230 230
              </span>
            </Link>
          </p>
        </div>
        <Image
          src={Dennis}
          placeholder="blur"
          alt="Dennis Garrison"
          className="object-cover h-[200px] w-full sm:w-1/2 relative sm:h-auto"
        />
      </div>
    </div>
  );
};

export default Contact;
