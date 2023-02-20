import React from 'react'

export default function CaseStudyCard ({image, title, subtitle, description}: {image: string, title: string, subtitle: string, description: string}) {
    return (
      <div className="case-study-card shadow-sm">
        <Image className="case-study-card-image" src={image} />
        <div className="case-study-card-content">
          <p className="case-study-card-title">{title}</p>
          <p className="case-study-card-subtitle">{subtitle}</p>
          {
            <p className="case-study-card-description">
              {description}
            </p>
          }
        </div>
      </div>
    )
  
}

