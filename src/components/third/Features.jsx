import React from "react";
import Card from "./Card";
const Features = () => {
  const obj = [{}, {}, {}];
  return (
    <div className="font-[Space_Grotesk] h-screen  flex flex-col items-center justify-center ">
      <h1 className="my-8 text-6xl text-center font-semibold">Stacks unleashed <br /> Bitcoin</h1>
      <div className=" h-[50%] w-[80%] flex gap-4 justify-center my-8">
        {obj.map((item) => (
          <div className="" key={item.id}>
            <Card data={item} />
          </div>
        ))}
      </div>
      <p className="underline mb-20">see all features</p>
    </div>
  );
};

export default Features;
