'use client';
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          AI Image & Video Processing
        </Link>
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        <div className={`flex-col md:flex md:flex-row md:items-center w-full md:w-auto ${isOpen ? 'flex' : 'hidden'}`}>
          <Link href="/" className="block px-2 py-1 hover:text-purple-500">
            Home
          </Link>
          <Link href="/about" className="block px-2 py-1 hover:text-purple-500">
            About
          </Link>
          <Link href="/contact" className="block px-2 py-1 hover:text-purple-500">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
