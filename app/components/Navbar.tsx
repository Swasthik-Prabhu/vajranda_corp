'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-800">
          🚀 Vajranda Corp
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-700 text-md font-medium ">
          <Link className='hover:text-blue-400' href="/">Home</Link>
          <Link className='hover:text-blue-400' href="/about">About</Link>
          <Link className='hover:text-blue-400'  href="/contact">Contact Us</Link>
          <Link  className='hover:text-blue-400' href="/careers">Careers</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-gray-700">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 px-2">
          <Link href="/" onClick={toggleMenu} className="block text-gray-700">Home</Link>
          <Link href="/about" onClick={toggleMenu} className="block text-gray-700">About</Link>
          <Link href="/contact" onClick={toggleMenu} className="block text-gray-700">Contact Us</Link>
          <Link href="/careers" onClick={toggleMenu} className="block text-gray-700">Careers</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
