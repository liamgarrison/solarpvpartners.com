import React from "react";
import Image from "next/image";
interface ProductCardProps {
  image: string;
  title: string;
  subtitle: string;
  specSheet?: string;
  children: React.ReactNode;
}

const ProductCard = ({
  image,
  title,
  subtitle,
  specSheet,
  children,
}: ProductCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8 flex p-4 flex-col md:flex-row">
      <div className="relative w-full h-64 md:h-[unset] md:w-[30%] flex-shrink-0">
        <Image
          className="w-full h-auto object-contain"
          src={image}
          alt={title}
          fill
          unoptimized
        />
      </div>
      <div className="p-6">
        <p className="text-xl font-semibold mb-2">{title}</p>
        <p className="text-sm text-gray-400 mb-4">{subtitle}</p>
        <div className="text-gray-700 mb-4">{children}</div>
        {specSheet ? (
          <a
            className="inline-block bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
            href={specSheet}
            target="_blank"
            rel="noopener noreferrer"
          >
            Spec Sheet
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default ProductCard;
