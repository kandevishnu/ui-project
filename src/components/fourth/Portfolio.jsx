import React from "react";
import image from "./image.png";
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";
import img4 from "./images/4.png";
import Card from "./Card";
const Portfolio = () => {
  const data = [
    { id: 1, img: img1, desc: "Stacks web wallet" },
    { id: 2, img: img2, desc: "DeFi plateform alex" },
    { id: 3, img: img3, desc: "Xverse app Jolocam " },
    { id: 4, img: img4, desc: "Xverse meta wallet" },
  ];
  return (
    <div className="bg-black min-h-fit rounded-[45px] lg:p-21 p-6">
      <div className="text-white font-[Space_Grotesk]">
        <div className="flex items-center gap-5">
          {/* LEFT */}
          <div className="w-[90%] mt-10 m-auto md:w-[50%] min-w-0 text-center sm:text-left">
            <p className="my-4 pb-5 text-2xl text-center sm:text-left text-[#5846FB] lg:text-2xl md:text-xl">
              Stacks for developer
            </p>

            <h1 className="text-[46px] leading-13 text-center font-semibold lg:leading-20 lg:text-[clamp(3.65rem,5vw,4.6rem)] md:text-5xl sm:text-6xl sm:text-left sm:leading-16 md:leading-14">
              <div>Build powerful</div>
              <div>apps, secured</div>
              <div>by bitcoin</div>
            </h1>

            <div className="py-5 sm:px-0 text-[12px] font-light leading-7 lg:leading-7 md:py-7 md:text-base md:leading-6 sm:py-7 sm:leading-6">
              <div className="hidden sm:block sm:text-[16px] md:max-lg:hidden lg:text-[clamp(0.85rem,1.2vw,1.5rem)] lg:leading-7">
                <div>
                  Stacks connects to Bitcoin, enabling you to build apps, smart
                </div>
                <div>
                  contracts, and digital assets that are integrated with Bitcoin's
                </div>
                <div>security, capital, and networks.</div>
              </div>
              <div className="sm:hidden text-center leading-4 md:text-left md:leading-5 md:max-lg:block">
                <div>
                  Stacks connects to Bitcoin, enabling you to build apps, smart contracts, and digital assets that are integrated with Bitcoin's security, capital, and networks.</div>
              </div>
            </div>

            <button className="rounded-full bg-[#5846FB] lg:px-7 lg:py-3 text-base md:px-6 md:py-2.5 md:text-sm sm:px-5 sm:py-2 px-3 py-2 ">
              Start Stacking
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hidden md:flex w-[50%] min-w-0 justify-end">
            <img
              src={image}
              alt=""
              className="h-auto w-full max-w-150 object-contain"
            />
          </div>
        </div>
        <div className="my-20">
          <div className="text-white text-[50px] font-medium pb-10 lg:text-7xl leading-20">
            <div>See what</div>
            <div>being built</div>
          </div>
          <div className="grid grid-cols-4 gap-5 lg:my-10">
            {data.map((elem) => (
              <Card key={elem.id} data={elem} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
