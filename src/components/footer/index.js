import { Link } from 'gatsby'
import React from 'react'

const Footer = ({ author, title }) => (
  <div className="footer shadow-sm">
    <div className="container py-5">
      <p className="text-center">
        © {new Date().getFullYear()} Solar PV Partners Limited
      </p>
      <p className="text-center">
        Hill View Farm, Hensting Lane, Owslebury, Winchester, Hampshire, SO21
        1LE
      </p>
    </div>
  </div>
)

export default Footer
