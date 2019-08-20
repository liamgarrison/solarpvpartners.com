import { Link } from 'gatsby'
import React from 'react'
import './style.scss'

const Footer = ({ author, title }) => (
  <div className="footer">
    <div className="container py-5">
      <p className="text-center">
        © {new Date().getFullYear()} Solar PV Partners Limited
      </p>
    </div>
  </div>
)

export default Footer
