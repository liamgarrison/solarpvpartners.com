import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
interface CaseStudyCardProps {
  image: StaticImport;
  title: string;
  subtitle: string;
  description: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  image,
  title,
  subtitle,
  description,
}) => {
  return (
    <div className="rounded-lg shadow-md mb-8 overflow-hidden">
      <Image
        src={image}
        alt={title}
        className="object-cover h-full w-full max-h-[500px]"
      />

      <div className="px-4 py-6">
        <p className="font-bold text-xl mb-1">{title}</p>
        <p className="text-sm text-gray-400 mb-4">{subtitle}</p>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default CaseStudyCard;
