import React from "react";
import ActiveIcon from "../assets/active/icon.png";
import Ac1 from "../assets/active/ac1.png";
import { ActiveTrandingData } from "../data/Data";

const ActiveHypeScore = () => {
  return (
    <div>
      <h1 className="text-3xl  lg:text-[28px] text-[#101317] font-bold flex items-center gap-2">
        <span>Active HypeScore </span>
        <span>
          <img src={ActiveIcon} alt="" className="h-6" />
        </span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 ml-10 mt-10">
        {ActiveTrandingData.map((item) => {
          return (
            <div className=" flex items-center gap-4" key={item.id}>
              <div className="relative overflow-hidden group">
                <img
                  src={item.img}
                  alt=""
                  className="h-20 w-20 object-cover rounded-full"
                />
                <div className="absolute text-white top-0 z-10 bg-[#3772FF] border border-white  rounded-full py-0.5 px-2 font-bold text-sm">
                  {item.badge}
                </div>
                <div className="absolute top-0 w-full h-full left-0 bg-[#EC183E] rounded-full opacity-0 group-hover:opacity-100 duration-300 flex justify-center items-center font-bold text-2xl text-white">
                  98
                </div>
              </div>
              <div>
                <div className="font-bold ">{item.name}</div>
                <div className="font-bold text-xl">
                  {item.money}
                  <span className="text-sm font-normal"> ETH</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActiveHypeScore;
