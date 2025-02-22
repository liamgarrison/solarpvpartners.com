import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface AboutCardProps {
  image: StaticImport;
  title: string;
  subtitle: string;
  description: string;
  email?: string;
}

export default function AboutCard({
  image,
  title,
  subtitle,
  description,
}: AboutCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
      <div className="md:flex">
        <div className="md:w-1/3 relative h-64 md:h-auto">
          <Image
            src={image}
            alt={title}
            className="object-cover h-full w-full"
          />
        </div>
        <div className="p-6 md:w-2/3">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <h4 className="text-lg text-gray-600 mb-4">{subtitle}</h4>
          <p className="text-gray-700 mb-4">{description}</p>
        </div>
      </div>
    </div>
  );
}
