'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-950">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/">
          <span className="text-2xl font-bold tracking-wider">
            AI Image & Video
          </span>
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Nav Links */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:block md:flex md:items-center`}
        >
          <Link
            href="/"
            className="block mt-2 md:mt-0 md:ml-6 text-white hover:text-purple-400"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block mt-2 md:mt-0 md:ml-6 text-white hover:text-purple-400"
          >
            About
          </Link>
          <Link
            href="/services"
            className="block mt-2 md:mt-0 md:ml-6 text-white hover:text-purple-400"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="block mt-2 md:mt-0 md:ml-6 text-white hover:text-purple-400"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
