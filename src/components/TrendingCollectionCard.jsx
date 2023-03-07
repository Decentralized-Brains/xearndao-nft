import React from "react";
import Img from "../assets/trending-collection/t1.png";

const TrandingCollectionCard = ({ data, idIndexObject }) => {
  return (
    <div className="relative bg-white rounded-[20px] overflow-hidden border-[0.5px] border-[#74798A]">
      <div className="relative">
        <img
          src={data.img}
          alt=""
          className=" h-[200px] w-full object-cover  "
        />
        <div className="absolute top-0 right-0 h-full w-full bg-gradient-to-t from-gray-800 to-transparent  text-[16px] font-bold text-white px-2">
          <div className="flex justify-start items-end h-full gap-2 py-4 px-2">
            <img
              src={data.imgsmall}
              alt=""
              className="h-10 w-10 rounded-full border border-white"
            />
            <div>
              <h1>{data.title}</h1>
              <p className="font-normal text-sm">{data.name}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-[#74798A] text-sm">Floor Price</span>
          <span className="font-bold">{data.price} ETH</span>
        </div>
        <div>
          <button className="bg-[#EC183E] hover:bg-red-700 duration-300 text-white py-1.5 px-4 rounded-lg">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrandingCollectionCard;
