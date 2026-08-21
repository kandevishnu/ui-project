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
    <div className="bg-black min-h-fit rounded-[45px] p-21">
      <div className="text-white font-[Space_Grotesk]">
        <div className="flex">
          <div className="w-[50%]">
            <p className="text-[#5846FB] pb-5 text-2xl my-4">
              Stacks for devoloper
            </p>
            <h1 className="text-7xl font-semibold leading-20">
              <div>Build powerful</div>
              <div>apps, secured</div>
              <div>by bitcoin</div>
            </h1>
            <div className="py-11 font-light leading-7 text-lg">
              <div>
                Stacks connects to Bitcoin, enabiling you to build apps, smart
              </div>
              <div>
                contracts, and digital assets that are integerated with
                Bitcoin`s
              </div>
              <div>security, capital , and networks.</div>
            </div>
            <button className="bg-[#5846FB] px-7 py-3 rounded-full">
              Start Stacking
            </button>
          </div>
          <div className="w-[50%] flex justify-end">
            <img src={image} alt="" className="h-140 w-150" />
          </div>
        </div>
        <div className="my-20">
          <div className="text-white text-7xl font-medium pb-10 leading-20">
            {" "}
            <div>See what</div>
            <div>being built</div>
          </div>
          <div className="grid grid-cols-4 gap-5 my-10">
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
