// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa'; // Add an icon for the cart

const Navigation = () => {
  const cart = useSelector(state => state.cart);

  // Calculate total number of items in the cart
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => {
    const itemPrice = parseFloat(item.price.replace('$', '')); // Ensure price is a number
    return total + itemPrice * item.quantity;
  }, 0).toFixed(2); // Keep two decimal places

  return (
    <nav className="flex justify-center space-x-4 bg-red-500 py-3">
      <Link to="/" className="text-white">Home</Link>
      <Link to="/menu" className="text-white">Menu</Link>
      <Link to="/contact" className="text-white">Contact</Link>
      <Link to="/cart" className="text-white relative">
        <FaShoppingCart className="inline" />
        <span className="ml-1">({totalItems})</span> {/* Display total items */}
        <span className="absolute top-0 right-0 bg-white text-red-500 rounded-full text-xs px-1">
          ${totalPrice}
        </span>
      </Link>
    </nav>
  );
};

export default Navigation;
