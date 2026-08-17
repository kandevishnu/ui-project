import React from "react";
import img1 from "./1.png";

const Card = () => {
  return (
    <div className="bg-[#f0f0f0] flex flex-col h-full justify-between p-5 rounded-3xl w-[300px]">
      <div>
        <img
          src={img1}
          alt=""
          className="h-12 w-12 bg-[#5846FB] p-3 rounded-full"
        />
      </div>
      <div className="h-[53%]">
        <h1 className="text-5xl mb-3">Proof of transfer</h1>
        <p className="leading-5 mb-4">
          The consensus mechanism that connects stacks and bitcoin.
        </p>
        <p className="text-[11px] text-[#5846FB] font-semibold">Learn more</p>
      </div>
    </div>
  );
};

export default Card;
