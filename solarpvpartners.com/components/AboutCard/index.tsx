import React from 'react'
import Image from 'next/image'

export default function AboutCard ({image, title, subtitle, description}: {image: string, title: string, subtitle: string, description: string}) {
    return (
      <div className="about-card shadow-sm d-flex">
        <Image className="about-card-image" src={image} alt={description}/>
        <div className="about-card-content">
          <p className="about-card-title">{title}</p>
          <p className="about-card-subtitle">{subtitle}</p>
          <p className="about-card-description">{description}</p>
          {/* <p className="about-card-description">
            {this.props.email}
          </p> */}
        </div>
      </div>
    )
  
}

