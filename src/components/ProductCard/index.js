import React from 'react'

class CaseStudyCard extends React.Component {
  render() {
    return (
      <div className="product-card shadow-sm d-flex">
        <div className="product-card-image-wrapper">
          <img className="product-card-image" src={this.props.image} />
        </div>
        <div className="product-card-content">
          <p className="product-card-title">{this.props.title}</p>
          <p className="product-card-subtitle">{this.props.subtitle}</p>
          <p className="product-card-description">{this.props.children}</p>
          {this.props.specSheet ? (
            <a
              className="btn btn-primary"
              href={this.props.specSheet}
              target={'blank'}
            >
              Spec Sheet
            </a>
          ) : (
            ''
          )}
        </div>
      </div>
    )
  }
}

export default CaseStudyCard
