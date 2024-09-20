// src/pages/HomePage.js
import React from 'react';
import { FaPizzaSlice, FaTruck, FaLeaf } from 'react-icons/fa';
import backgroundImage from '../assets/home.jpeg'; 
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="grayscale-25  ">
      
      {/* Header Image */}
      <div
        className="h-[800px] bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute bottom-10 left-10 bg-black text-white text-xl p-2">
          Open from 10am to 12pm
        </div>
        <div className="text-center text-white">
          <h1 className="text-7xl font-bold uppercase tracking-wide">Thin<br />CRUST PIZZA</h1>
          <p className="mt-8">
            <Link to="/menu" className="text-xl bg-black px-6 py-3">Let me see the menu</Link>
          </p>
        </div>
      </div>
      <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-6">Welcome to Our Pizza Restaurant</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <FaPizzaSlice className="text-6xl mx-auto text-red-600" />
          <h2 className="text-2xl font-semibold mt-4">Delicious Pizzas</h2>
          <p className="mt-2">Made with the freshest ingredients and baked to perfection.</p>
        </div>
        <div className="text-center">
          <FaTruck className="text-6xl mx-auto text-red-600" />
          <h2 className="text-2xl font-semibold mt-4">Fast Delivery</h2>
          <p className="mt-2">Hot and fresh pizza delivered right to your doorstep.</p>
        </div>
        <div className="text-center">
          <FaLeaf className="text-6xl mx-auto text-red-600" />
          <h2 className="text-2xl font-semibold mt-4">Fresh Ingredients</h2>
          <p className="mt-2">We use only the finest and freshest ingredients.</p>
        </div>
      </div>
    </div>
    </div>
    
    
    
  );
};

export default Home;
