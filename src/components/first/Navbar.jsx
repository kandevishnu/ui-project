import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="relative flex items-center pt-4 w-[90%] mx-auto mb-20">
      {/* Logo */}
      <div className="mx-auto md:mx-0">
        <h2 className="text-[#5846FB] text-4xl md:text-2xl font-bold font-[Space_Grotesk]">
          CoinFusion
        </h2>
      </div>

      {/* Navbar */}
      <div className="hidden md:flex justify-center items-center w-10/12">
        <nav className="bg-white m-2 px-14 py-3.5 rounded-full">
          <ul className="flex justify-center gap-6 px-3 font-[Space_Grotesk]">
            <li>Learn</li>
            <li>Build</li>
            <li>Explore</li>
            <li>Join</li>
            <li>Help</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
