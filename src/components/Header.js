import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaPizzaSlice, FaInfoCircle, FaPhone, FaShoppingCart } from 'react-icons/fa';



const Header = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full bg-black bg-opacity-70 text-xl flex justify-end space-x-8 py-4 pr-8 z-50">
        <Link to="/" className="text-white hover:text-gray-300 flex items-center space-x-2">
          <FaHome />
          <span>HOME</span>
        </Link>
        <Link to="/menu" className="text-white hover:text-gray-300 flex items-center space-x-2">
          <FaPizzaSlice />
          <span>MENU</span>
        </Link>
        <Link to="/about" className="text-white hover:text-gray-300 flex items-center space-x-2">
          <FaInfoCircle />
          <span>ABOUT</span>
        </Link>
        <Link to="/contact" className="text-white hover:text-gray-300 flex items-center space-x-2">
          <FaPhone />
          <span>CONTACT</span>
        </Link>
        <Link to="/cart" className="text-white hover:text-gray-300 flex items-center space-x-2">
          <FaShoppingCart />
          <span>CART</span>
        </Link>
      </div>

      
    </div>
  );
};

export default Header;
