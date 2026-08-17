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
      text: "Alex rasises $8.6M to bring Defi to the world of human nation",
    },
    {
      id: 2,
      image: image2,
      text: "Nyc get own crypto currancy is the key to success",
    },
    {
      id: 3,
      image: image3,
      text: "Alex rasises $8.6M to bring Defi to the crypto world",
    },
    {
      id: 4,
      image: image4,
      text: "Alex rasises $8.6M to bring Defi to the downfall ",
    },
  ];
  return (
    <div className="text-white w-[90%] mx-auto text-[18px] my-8 mb-20 font-[Space_Grotesk]">
      <p className="mb-6">Latest Ecosystem news</p>
      <div className="flex gap-2 justify-between">
        {data.map((item) => (
          <div className="" key={item.id}>
            <Card data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
