import React from "react";
import image1 from "./images/1.png";
import image2 from "./images/2.png";
import image3 from "./images/3.png";
import image4 from "./images/4.png";
import Card from "./Card";
const Footer = () => {
  const data = [
    {
      id: 1,
      image: image1,
      text: "Alex rasises $8.6M to bring Defi to the..",
    },
    {
      id: 2,
      image: image2,
      text: "Nyc get own cryptocurrancy after",
    },
    {
      id: 3,
      image: image3,
      text: "Alex rasises $8.6M to bring Defi to the..",
    },
    {
      id: 4,
      image: image4,
      text: "Alex rasises $8.6M to bring Defi to the..",
    },
  ];
  return (
    <div className="text-white w-[90%] mx-auto text-[18px] my-8 mb-20">
      <p className="mb-3">Latest Ecosystem news</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((item) => (
          <div className="grow" key={item.id}>
            <Card data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
