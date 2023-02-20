import React from 'react'
import Link from 'next/link'
import logo from '@/images/logo_horizontal.png'
import Image from 'next/image'

export default function Navi () {
  return ( 
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm justify-content-between align-items-center px-5 py-2">
      <Link href="/" style={{ marginBottom: 0 }}>
        <Image src={logo} style={{ height: 50, marginBottom: 0 }}  alt="logo"/>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/solutions">
              Solutions
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/products">
              Products
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/case-studies">
              Case Studies
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

