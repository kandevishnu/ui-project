import React from "react";

const Card = ({data}) => {
  return (
    <div className="bg-[#f0f0f0] flex flex-col lg:h-135 md:h-110 h-105 justify-between p-6 sm:p-5 lg:p-7 rounded-3xl w-80 sm:w-full">
      <div>
        <img
          src={data.img}
          alt=""
          className="h-15 w-15 bg-[#5846FB] p-4 rounded-full"
        />
      </div>
      <div>
        <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl mb-3">{data.title}</h1>
        <p className="leading-5 mb-4 sm:text-lg line-clamp-2">
          {data.description}
        </p>
        <p className="text-sm text-[#5846FB] font-semibold">Learn more</p>
      </div>
    </div>
  );
};

export default Card;
