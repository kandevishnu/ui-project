import React from "react";
import img1 from "./1.png";
import img2 from "./2.png";
const AboutUs = () => {
  return (
    <div className="h-screen flex items-center justify-around p-[5%] font-[Space_Grotesk]">
      <div className="sm:w-[35%] w-[70%]">
        <h1 className="font-medium lg:text-7xl sm:py-[4%] sm:text-5xl md:text-6xl text-5xl">
          Stacking, a new way to earn bitcoin
        </h1>
        <p className="py-[4%] sm:max-md:leading-5 ">
          Hold and temporarily lock STX, stacks native currency, and support the
          networks security and consensus. As a rewards, you`ll earn BTC.
        </p>
        <div className="text-end sm:text-left">
          <button className="bg-[#5846FB] text-white px-5 py-[4%] rounded-full">
            Start Stacking
          </button>
        </div>
      </div>
      <div className="w-[45%] hidden sm:block">
        <div className="flex items-center gap-4 mb-3">
          <p className="bg-[#f0f0f0] lg:text-5xl rounded-full px-10 py-5 md:max-lg:text-3xl sm:text-2xl">
            9.5%
          </p>
          <img
            src={img1}
            alt="image"
            className="lg:h-[5em] sm:max-lg:h-[4em] sm:max-lg:w-[4em] h-[3em]"
          />
        </div>
        <div className="flex justify-between bg-[#5846FB] text-white px-7 py-5 mb-3 rounded-full items-center">
          <p className="lg:text-5xl md:max-lg:text-3xl sm:text-2xl">
            $864,896,126
          </p>
          <p className="text-end sm:max-lg:text-sm">Total value locked</p>
        </div>
        <div className="flex items-center justify-end gap-4">
          <img
            src={img2}
            alt=""
            className="lg:h-[5em] sm:max-lg:h-[4em] sm:max-lg:w-[4em] h-[3em]"
          />
          <p className="font-semibold lg:text-2xl w-70 rounded-full bg-[#f0f0f0] px-[10%] lg:px-10 py-5 sm:max-lg:text-sm">
            Data courtesy of stacking club
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
