import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // import your logo

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* Navbar */}
      <header className="bg-black text-white p-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Logo */}
<Link to="/">
  <img
    src={logo}
    alt="Barot Stock Brokers Logo"
    className="h-14 md:h-20 w-auto"
  />
</Link>

          {/* Desktop Links */}
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:text-gray-400 transition">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gray-400 transition">Services</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-400 transition">About</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-400 transition">Contact</Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black mt-2 rounded-md shadow-lg">
            <ul className="flex flex-col p-4 space-y-2">
              <li>
                <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-gray-400 transition">Home</Link>
              </li>
              <li>
                <Link to="/services" onClick={() => setIsOpen(false)} className="hover:text-gray-400 transition">Services</Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-gray-400 transition">About</Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-gray-400 transition">Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Page content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-black text-white p-10 mt-auto">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
    {/* Company Info */}
    <div>
      <h3 className="font-bold mb-2">Barot Stock Brokers PVT LTD</h3>
      <p>Since 1995</p>
    </div>

    {/* Contact Info */}
    <div>
      <h3 className="font-bold mb-2">Contact</h3>
      <p>Email: barotstock@gmail.com</p>
      <p>I.N. Barot: +91 98981 13124</p>
      <p>G.N. Barot: +91 7574-864732</p>
      <p>Y.N. Barot: +91 9727701902</p>
    </div>

    {/* Address */}
    <div>
      <h3 className="font-bold mb-2">Address</h3>
      <p>123 Stock Street, Mumbai, India</p>
    </div>
  </div>

  <p className="text-center mt-6 text-gray-400">
    © {new Date().getFullYear()} Barot Stock Brokers PVT LTD
  </p>
</footer>

    </div>
  );
}
