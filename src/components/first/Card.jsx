import React from "react";

const Card = ({ data }) => {
  return (
    <div className="bg-[#1F2123] h-24 flex items-center gap-4 px-5 py-4 rounded-full overflow-hidden">
      <img src={data.image} alt="img" className="h-12 w-12 shrink" />

      <p className="text-white min-w-0 truncate">{data.text}</p>
    </div>
  );
};

export default Card;
