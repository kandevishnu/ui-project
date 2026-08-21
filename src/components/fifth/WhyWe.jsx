import React from "react";
import img from "./image.png";
const WhyWe = () => {
  return (
    <div className="h-fit my-30 flex w-[89%] leading-10 items-center justify-between m-auto">
      <div className="w-fit">
        <p className="text-[clamp(15px,calc(8px+1.667vw),32px)] leading-snug max-w-3xl">
          Stacks mission to create a better, user-owned decentralized internet.
          To do it we're unleashing Bitcoin, the most battle-tested and valuable
          blockchain in the world.
        </p>

        <div className="my-9 flex items-center gap-4">
          <button className="bg-[#5846FB] px-4 text-sm sm:text-[16px] sm:px-5 py-2 rounded-full text-white font-semibold">
            Learn about series
          </button>

          <div className="underline text-gray-300 text-sm sm:text-[16px]">Why stacks in built</div>
        </div>
      </div>

      <div className="hidden lg:block">
        <img src={img} alt="" className="w-full max-w-120" />
      </div>
    </div>
  );
};

export default WhyWe;
