import React from "react";

const TopCollectionCard = ({ data, idIndexObject }) => {
  return (
    <div>
      <div className=" bg-[#333241] rounded-[20px] p-4">
        <div className="w-full h-[250px] sm:h-[320px] rounded-xl overflow-hidden">
          <img src={data.img} alt="" className="object-cover h-full w-full" />
        </div>
        <div className=" py-2 text-white">
          <div className="text-[28px] font-bold">{data.title}</div>
          <p className="text-sm">{data.details}</p>
          <div className="flex justify-between items-center mt-4">
            <div className="flex flex-col">
              <span className="text-sm">Volume</span>
              <span className="font-bold text-xl">{data.volume}K ETH</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm">Floor Price</span>
              <span className="font-bold text-xl">{data.floor} ETH</span>
            </div>
            <div className="">
              <button className="bg-[#EC183E] hover:bg-red-700 duration-300 px-6 py-2 rounded-lg">
                Buy!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCollectionCard;
