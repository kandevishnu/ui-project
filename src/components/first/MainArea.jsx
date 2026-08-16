import React from "react";

const MainArea = () => {
  return (
    <div className="my-25">
      <div className="flex items-end justify-center">
        <div className="text-white text-6xl sm:text-7xl md:text-8xl font-[bodoni-heading]  text-center">
          <h1>Unleash Bitcoin</h1>
          <h1>full potential</h1>
        </div>
      </div>
      <div className="mt-5 leading-6">
        <p className="text-white font-[Martel] text-center">
          <p>stacks enables DeFi, NFTs, apps and</p>
          <p>smart contracts for bitcoin</p>
        </p>
      </div>
      <div className="flex justify-center mt-5">
        <button className="text-white bg-[#5846FB] hover:bg-[#4a3ae0] py-3 px-10 rounded-full">
          See whats built on stock
        </button>
      </div>
    </div>
  );
};

export default MainArea;
