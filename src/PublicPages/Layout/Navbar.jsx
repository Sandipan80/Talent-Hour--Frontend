import React, { useState } from 'react';

const links = [
  { name: 'Home', href: '/home' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand/Logo */}
        <a href="/home" className="text-2xl font-bold text-gray-800">
          Your Brand
        </a>

        {/* Desktop Links (hidden on mobile, visible on md and up) */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">
              {link.name}
            </a>
          ))}
          {/* Example Call to Action Button */}
          <a href="#" className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200">
            Get Started
          </a>
        </div>

        {/* Mobile Menu Toggle Button (visible on mobile only) */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            // Close icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger menu icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Links (conditionally rendered below, positioned absolute, only on mobile screens) */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 z-40 transition-all duration-300 ease-in-out">
          <div className="flex flex-col items-center space-y-4 p-6">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-lg w-full text-center py-2" onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </a>
            ))}
             <a href="#" className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200 w-full text-center" onClick={() => setIsMobileMenuOpen(false)}>
                Get Started
             </a>
          </div>
        </div>
      )}
    </nav>
  );
}