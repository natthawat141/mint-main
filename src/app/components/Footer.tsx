// components/Footer.js
'use client';

import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-darkBlue text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* โลโก้และคำอธิบาย */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <Link href="/" className="text-2xl font-bold">
              Bullmoon
            </Link>
            <p className="text-gray-400 mt-2">
              Empowering partners through innovation and excellence.
            </p>
          </div>
          {/* ลิงก์เมนู */}
          <div className="flex flex-wrap justify-center space-x-6 mb-6 md:mb-0">
            <Link href="/our-story" className="hover:text-blue-400">
              Our Story
            </Link>
            <Link href="/our-sibling" className="hover:text-blue-400">
              Our Sibling
            </Link>
            <Link href="/service" className="hover:text-blue-400">
              Service
            </Link>
            <Link href="/learning" className="hover:text-blue-400">
              Learning
            </Link>
            <Link href="/nft" className="hover:text-blue-400">
              NFT
            </Link>
          </div>
          {/* ไอคอนโซเชียลมีเดีย */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
              aria-label="Facebook"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
        {/* ส่วนล่าง */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Bullmoon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
