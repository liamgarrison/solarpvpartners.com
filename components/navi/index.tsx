'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Links = ({ className }: { className?: string }) => {
  return (
    <ul
      className={`flex flex-col md:flex-row items-center md:items-center space-y-2 md:space-y-0 md:space-x-4 px-5 py-2 ${className}`}
    >
      <li>
        <Link className="text-gray-500 hover:text-gray-700" href="/solutions">
          Solutions
        </Link>
      </li>
      <li>
        <Link className="text-gray-500 hover:text-gray-700" href="/products">
          Products
        </Link>
      </li>
      <li>
        <Link
          className="text-gray-500 hover:text-gray-700"
          href="/case-studies"
        >
          Case Studies
        </Link>
      </li>
      <li>
        <Link className="text-gray-500 hover:text-gray-700" href="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="text-gray-500 hover:text-gray-700" href="/contact">
          Contact
        </Link>
      </li>
    </ul>
  )
}

const Navi: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className="bg-white shadow-sm relative">
      <div className="flex items-center justify-between pl-6 pr-2 py-2 ">
        <Link href="/" className="mb-0">
          <Image
            src={'/images/logo_horizontal.png'}
            alt="Logo"
            height={44}
            width={180}
            unoptimized
          />
        </Link>
        <button
          className="md:hidden text-gray-700"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            // Close icon
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
        <Links className="md:flex hidden" />
      </div>

      <div
        className={`${isOpen ? 'block' : 'hidden'} `}
        id="navbarSupportedContent"
      >
        <Links />
      </div>
    </nav>
  )
}

export default Navi
