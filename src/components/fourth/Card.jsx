import React from "react";

const Card = (data) => {

  return (
    <div className="bg-[#1F2123] flex items-center gap-6 rounded-full px-8 py-10">
      <img src={data.data.img} alt="img" className="h-14 w-14" />

      <p className="text-white hidden md:block md:text-sm lg:text-2xl wrap-break-word font-light ">{data.data.desc}</p>
    </div>
  );
};

export default Card;
