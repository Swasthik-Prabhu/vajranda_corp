'use client'

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white mt-8">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        {/* Brand & Description */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold mb-2">Vajranda Corp</h3>
          <p className="text-sm text-gray-400">
            Empowering lives with advanced healthcare. Delivering compassionate and personalized medical services every day.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-center md:text-right">
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex gap-4 justify-center md:justify-end text-xl">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaLinkedinIn /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300"><FaTwitter /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-200 border-t border-gray-700 py-4">
        © {new Date().getFullYear()} Vajranda Corp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
