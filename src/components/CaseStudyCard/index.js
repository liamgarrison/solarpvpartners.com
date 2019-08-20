import React from 'react'

class CaseStudyCard extends React.Component {
  render() {
    return (
      <div className="case-study-card shadow-sm">
        <img className="case-study-card-image" src={this.props.image} />
        <div className="case-study-card-content">
          <p className="case-study-card-title">{this.props.title}</p>
          <p className="case-study-card-subtitle">{this.props.subtitle}</p>
          <p className="case-study-card-description">
            {this.props.description}
          </p>
        </div>
      </div>
    )
  }
}

export default CaseStudyCard
