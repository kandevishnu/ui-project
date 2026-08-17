import React from "react";

const Card = ({ data }) => {
  return (
    <div className="bg-[#1F2123] flex items-center gap-2 md:rounded-2xl md:h-25 lg:rounded-full rounded-full px-5 py-5 sm:max-md:px-10 sm:max-md:py-7 md:max-lg:px-1">
      <img src={data.image} alt="img" className="h-10 w-10 sm:max-lg:h-15 sm:max-lg:w-15" />

      <p className="text-white hidden md:block md:text-sm lg:text-[16px] wrap-break-word ">{data.text}</p>
    </div>
    // <div className="bg-[#1F2123] h-24 flex items-center gap-4 px-5 py-4 rounded-full overflow-hidden">
    //   <img src={data.image} alt="img" className="h-12 w-12 shrink" />

    //   <p className="text-white min-w-0 truncate">{data.text}</p>
    // </div>
  );
};

export default Card;
