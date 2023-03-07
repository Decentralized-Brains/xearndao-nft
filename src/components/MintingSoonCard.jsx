import React from "react";

const MintingSoonCard = ({ data, idIndexObject }) => {
  return (
    <>
      <div className="relative bg-white rounded-[20px] overflow-hidden border border-[#74798A]">
        <div className="relative">
          <img
            src={data.img}
            alt=""
            className=" h-[300px] w-full object-cover  "
          />
          <div className="absolute top-0 right-0 mx-4 my-4 bg-black rounded-xl text-[16px] font-bold text-white px-2">
            12:05:15
          </div>
        </div>
        <div className="p-4">
          <div className=" flex gap-0 sm:gap-2  sm:items-center flex-col sm:flex-row">
            <img
              src={data.imgsmall}
              alt=""
              className=" h-16 w-16 rounded-full object-cover border-2 border-white"
            />

            <div className="leading-[20px]">
              <span className="text-[16px] font-bold">{data.title}</span>
              <h1 className="text-[14px] ">{data.name}</h1>
            </div>
          </div>
          <div className="mt-4 flex justify-between">
            <div className="leading-[20px]">
              <p className="text-xs"> Reserve</p>
              <h1 className="font-bold">{data.money}</h1>
            </div>
            <div className="flex">
              <img
                src={data.groupimg1}
                alt=""
                className="h-10 w-10 rounded-full object-cover "
              />
              <img
                src={data.groupimg2}
                alt=""
                className="h-10 w-10 rounded-full object-cover -ml-2"
              />
              <img
                src={data.groupimg3}
                alt=""
                className="h-10 w-10 rounded-full object-cover -ml-2"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MintingSoonCard;
