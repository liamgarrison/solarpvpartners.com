import React from 'react'

class AboutCard extends React.Component {
  render() {
    return (
      <div className="about-card shadow-sm d-flex">
        <img className="about-card-image" src={this.props.image} />
        <div className="about-card-content">
          <p className="about-card-title">{this.props.title}</p>
          <p className="about-card-subtitle">{this.props.subtitle}</p>
          <p className="about-card-description">{this.props.description}</p>
          {/* <p className="about-card-description">
            {this.props.email}
          </p> */}
        </div>
      </div>
    )
  }
}

export default AboutCard
