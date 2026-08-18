import React from "react";
import Card from "./Card";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
const Features = () => {
  const obj = [
    {
      id: 1,
      img: img1,
      title: "Proof of transfer",
      description: "The consensus mechanism that connects stacks and bitcoin.",
    },
    {
      id: 2,
      img: img2,
      title: "Bitcoin to NFTs",
      description: "NFTs is secured by bitcoin by exploding on the network",
    },
    {
      id: 3,
      img: img3,
      title: "Bitcoin to DeFi",
      description:
        "Stacks bring DeFi to bitcoin, unlocking over $2 trillion in capital.",
    },
  ];

  return (
    <div className="font-[Space_Grotesk] flex flex-col items-center py-16">
      <h1 className="my-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-semibold">
        <div>Stacks unleashed</div>
        <div>Bitcoin</div>
      </h1>

        <div className="grid sm:grid-cols-3 grid-cols-1 gap-3 sm:gap-4 lg:gap-6 md:px-10 lg:px-10">
          {obj.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>

      <p className="underline mt-10">see all features</p>
    </div>
  );
};

export default Features;
