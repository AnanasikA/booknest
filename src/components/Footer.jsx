// src/components/Footer.jsx

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#CDAA7D] text-gray-900 py-8 px-4  border-t border-gray-300">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Informacje o prawach autorskich */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-lg font-semibold">© 2024 BookNest. Wszystkie prawa zastrzeżone.</p>
        </div>
        
        {/* Linki do mediów społecznościowych */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition duration-300">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition duration-300">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition duration-300">
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Nawigacja w stopce */}
        <div className="text-center md:text-right">
          <a href="/" className="text-gray-800 hover:text-gray-600 transition duration-300 mx-2">Strona Główna</a>
          <a href="/articles" className="text-gray-800 hover:text-gray-600 transition duration-300 mx-2">Artykuły</a>
          <a href="/archive" className="text-gray-800 hover:text-gray-600 transition duration-300 mx-2">Archiwum</a>
          <a href="/about" className="text-gray-800 hover:text-gray-600 transition duration-300 mx-2">O nas</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
