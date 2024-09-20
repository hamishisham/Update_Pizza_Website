import React from "react";
import chef from "../assets/chef.jpg"
import restruant from "../assets/onepage_restaurant.jpg"

const About = () => {
  return (
    <div id="about" className="bg-gray-400 text-white text-2xl py-16 px-8">
      <h1 className="text-center text-6xl font-light mb-12">About</h1>

      <p className="mb-8">
        The Pizza Restaurant was founded in blabla by Mr. Italiano in lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <p className="flex items-center justify-between mb-8">
        <strong className="text-3xl">The Chef?</strong> 
        <span className="text-2xl">Mr. Italiano himself</span>
        <img
          src={chef}
          alt="Chef"
          className="w-36 h-36 rounded-full ml-8"
        />
      </p>

      <p className="mb-8">We are proud of our interiors.</p>

      <div className="mb-12">
        <img
          src={restruant}
          alt="Restaurant"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      <h1 className="text-4xl font-bold mb-6 text-center">Opening Hours</h1>

      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-8 text-xl">
          <div>
            <p className="font-semibold">Mon & Tue</p>
            <p className="text-gray-300">CLOSED</p>
          </div>
          <div>
            <p className="font-semibold">Friday</p>
            <p className="text-gray-300">10:00 - 12:00</p>
          </div>
          <div>
            <p className="font-semibold">Wednesday</p>
            <p className="text-gray-300">10:00 - 24:00</p>
          </div>
          <div>
            <p className="font-semibold">Saturday</p>
            <p className="text-gray-300">10:00 - 23:00</p>
          </div>
          <div>
            <p className="font-semibold">Thursday</p>
            <p className="text-gray-300">10:00 - 24:00</p>
          </div>
          <div>
            <p className="font-semibold">Sunday</p>
            <p className="text-gray-300">Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
