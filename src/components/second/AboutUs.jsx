import React from "react";
import img1 from "./1.png";
import img2 from "./2.png";
const AboutUs = () => {
  return (
    <div className="h-screen flex items-center justify-around p-20 font-[Space_Grotesk]">
      <div className="w-[35%]">
        <h1 className="font-medium text-7xl py-5">Stacking, a new way to earn bitcoin</h1>
        <p className="py-5">
          Hold and temporarily lock STX, stacks native currency, and support the
          networks security and consensus. As a rewards, you`ll earn BTC.
        </p>
        <button className="bg-[#5846FB] text-white px-5 py-2 rounded-full">Start Stacking</button>
      </div>
      <div className="w-[45%]">
        <div className="flex items-center gap-4 mb-3">
          <p className="bg-[#f0f0f0] text-5xl rounded-full px-10 py-5">9.5%</p>
          <img src={img1} alt="image" className="h-[5em]" />
        </div>
        <div className="flex justify-between bg-[#5846FB] text-white px-7 py-5 mb-3 rounded-full items-center">
          <p className="text-5xl">$864,896,126</p>
          <p>Total value locked</p>
        </div>
        <div className="flex items-center justify-end gap-4">
          <img src={img2} alt="" className="h-[5em]" />
          <p className="font-semibold text-2xl w-70 rounded-full bg-[#f0f0f0] px-10 py-5">Data courtesy of stacking club</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
