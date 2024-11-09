// src/components/Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header
      className="text-white py-4 px-8 shadow-lg"
      style={{
        background: "linear-gradient(to right, #4B2E2A, #B68D40, #D1A054)",
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold tracking-wide" style={{ color: "#F4E3C1" }}>
          BookNest
        </Link>
        
        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/"
                className="relative group text-lg font-medium"
                style={{ color: "#F4E3C1" }}
              >
                Strona Główna
                <span
                  className="absolute -bottom-1 left-0 w-0 h-1 transition-all group-hover:w-full"
                  style={{ backgroundColor: "#E6C893" }}
                ></span>
              </Link>
            </li>
            <li>
              <Link
                to="/articles"
                className="relative group text-lg font-medium"
                style={{ color: "#F4E3C1" }}
              >
                Artykuły
                <span
                  className="absolute -bottom-1 left-0 w-0 h-1 transition-all group-hover:w-full"
                  style={{ backgroundColor: "#E6C893" }}
                ></span>
              </Link>
            </li>
            <li>
              <Link
                to="/archive"
                className="relative group text-lg font-medium"
                style={{ color: "#F4E3C1" }}
              >
                Archiwum
                <span
                  className="absolute -bottom-1 left-0 w-0 h-1 transition-all group-hover:w-full"
                  style={{ backgroundColor: "#E6C893" }}
                ></span>
              </Link>
            </li>
            <li>
              <Link
                to="/newsletter"
                className="relative group text-lg font-medium"
                style={{ color: "#F4E3C1" }}
              >
                Newsletter
                <span
                  className="absolute -bottom-1 left-0 w-0 h-1 transition-all group-hover:w-full"
                  style={{ backgroundColor: "#E6C893" }}
                ></span>
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="relative group text-lg font-medium"
                style={{ color: "#F4E3C1" }}
              >
                O nas
                <span
                  className="absolute -bottom-1 left-0 w-0 h-1 transition-all group-hover:w-full"
                  style={{ backgroundColor: "#E6C893" }}
                ></span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

