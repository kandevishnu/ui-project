import React from "react";

const Card = (data) => {

  return (
    <div className="bg-[#1F2123] flex items-center justify-center gap-6 rounded-full lg:px-8 lg:py-10 py-5 md:px-3 md:py-2">
      <img src={data.data.img} alt="img" className="lg:h-14 lg:w-14 h-8 w-8 md:h-10 md:w-10  object-cover" />

      <p className="text-white hidden md:block md:text-[10px] lg:text-[clamp(1rem,1.667vw,1.5rem)] wrap-break-word font-light ">{data.data.desc}</p>
    </div>
  );
};

export default Card;
