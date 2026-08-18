import React from "react";
import img1 from "./1.png";
import img2 from "./2.png";
const AboutUs = () => {
  return (
    <div className="h-fit my-15 mt-25 md:my-20 md:mt-30 lg:my-25 lg:mt-35 flex items-center justify-around font-[Space_Grotesk]">
      <div className="sm:w-[50%] md:w-[50%] lg:w-[36%] w-[80%] my-10 sm:my-1 pl-4">
        <h1 className="font-medium lg:text-[76px] sm:py-[3%] sm:text-5xl md:text-6xl  text-5xl line-clamp-3 lg:leading-20 lg:w-120  ">
          <span className="block">Stacking, a</span>
          <span className="block">new way to</span>
          <span className="block">earn bitcoin</span>
        </h1>
        <p className="pb-4 sm:max-md:leading-5 md:text-lg  leading-6 my-3 text-sm">
          Hold and temporarily lock STX, stacks native currency, and support the
          networks security and consensus. As a rewards, you`ll earn BTC.
        </p>
        <div className="sm:text-left">
          <button className="bg-[#5846FB] text-white px-5 py-3 rounded-full">
            Start Stacking
          </button>
        </div>
      </div>
      <div className="w-[45%] hidden sm:block">
        <div className="flex items-center gap-4 mb-4">
          <p className="bg-[#f0f0f0] lg:text-6xl rounded-full lg:px-15 lg:py-9 sm:max-lg:text-4xl sm:max-lg:px-10 sm:max-lg:py-6 ">
            9.5%
          </p>
          <img
            src={img1}
            alt="image"
            className="lg:h-[8em] sm:max-lg:h-[5em] sm:max-lg:w-[5em] h-[3em]"
          />
        </div>
        <div className="flex justify-between bg-[#5846FB] text-white px-7 py-7 mb-4 rounded-full items-center">
          <p className="lg:text-5xl md:max-lg:text-4xl sm:text-2xl">
            $864,896,126
          </p>
          <p className="text-end sm:max-lg:text-sm">Total value locked</p>
        </div>
        <div className="flex items-center justify-end gap-4">
          <img
            src={img2}
            alt=""
            className="lg:h-[8em] sm:max-lg:h-[5em] sm:max-lg:w-[5em] h-[3em]"
          />
          <p className="font-semibold lg:text-2xl w-70 md:max-lg:w-55 rounded-full bg-[#f0f0f0] px-[10%] lg:px-10 lg:py-7 sm:max-lg:text-sm8 sm:max-lg:py-5">
            Data courtesy of stacking club
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
