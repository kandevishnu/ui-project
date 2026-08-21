import React from "react";
import Badge from "./Badge";

const Footer = () => {
  const data = [
    { name: "Wallets" },
    { name: "Docs" },
    { name: "Get GXT" },
    { name: "Apps" },
    { name: "Learning resources" },
    { name: "Eco System" },
    { name: "Event" },
    { name: "Blog" },
    { name: "Resources" },
    { name: "Videos Learning" },
    { name: "Etherum Learning" },
    { name: "Smart contract" },
    { name: "NFTs" },
  ];
  return (
    <div className="h-fit bg-black text-white rounded-t-[45px] pb-1">
      <div className="w-[90%] m-auto">
        <div className="lg:text-[100px] text-5xl text-center sm:text-left sm:text-6xl md:text-7xl font-semibold py-30 ">
          Explore Stacks
        </div>
        <div className="flex lg:gap-4 gap-2 flex-wrap mb-10 sm:mb-[10%]">
          {data.map((name, idx) => (
            <Badge key={idx} props={name} />
          ))}
        </div>
        <div className="flex items-center justify-between mb-10">
          <div className="text-[#5846FB] text-3xl text-center font-semibold  w-full md:w-fit ">
            CoinFusion
          </div>
          <div className="hidden md:block">
            Terms & conditions | Sitemap | Privacy Policy | Cookies Policy
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
