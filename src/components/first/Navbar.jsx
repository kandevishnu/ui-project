import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex items-center pt-4 w-[90%] mx-auto mb-20">
      <div>
        <h2 className="text-[#5846FB] text-2xl font-bold font-[bodoni-heading]">
          CoinFusion
        </h2>
      </div>
      <div className="flex justify-center items-center w-10/12">
        <nav className="bg-white m-2 px-14 py-3.5 rounded-full ">
          <ul className="flex justify-center gap-6 px-3 selection:bg-cyan-600 ">
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
