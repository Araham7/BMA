import PropTypes from 'prop-types';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import Footer from './LayoutComponents/Footer';
import { Link } from "react-router-dom";

function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* (1). Drawer */}
      <div className="relative">
        {/* Hamburger Button */}
        <button 
          onClick={() => setIsOpen(true)} 
          className="fixed top-4 left-4 z-50 text-3xl p-2 bg-gray-800 text-white rounded-lg shadow-lg focus:outline-none"
        >
          <FaBars />
        </button>

        {/* Drawer Overlay */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          ></div>
        )}

        {/* Drawer */}
        <div className={`fixed top-0 left-0 h-full w-72 bg-gray-900 text-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-50 shadow-xl`}>
          {/* Close Button */}
          <button 
            onClick={() => setIsOpen(false)} 
            className="absolute top-4 right-4 text-2xl p-2 bg-red-600 text-white rounded-full shadow-lg focus:outline-none"
          >
            <FaTimes />
          </button>

          {/* Sidebar Content */}
          <ul className="mt-16 space-y-4 text-lg font-semibold p-6">
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About Us</Link>
            </li>
            <li>
            <Link to="/contact">Contact Us</Link>
            </li>
            <li>
            <Link to="/class-time">Class Time</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* (2). Children-Section */}
      {children}

      {/* (3). Footer */}
      <Footer/>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
