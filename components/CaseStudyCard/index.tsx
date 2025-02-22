import React from 'react'
import Image from 'next/image'

interface CaseStudyCardProps {
  image: string
  title: string
  subtitle: string
  description: string
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  image,
  title,
  subtitle,
  description,
}) => {
  return (
    <div className="rounded-lg shadow-md mb-8 overflow-hidden">
      <div className="relative h-[350px]">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="px-4 py-6">
        <p className="font-bold text-xl mb-1">{title}</p>
        <p className="text-sm text-gray-400 mb-4">{subtitle}</p>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  )
}

export default CaseStudyCard
