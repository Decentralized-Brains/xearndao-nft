import React from "react";
import HeroSmall from "../assets/hero-small.png";

const Hero = () => {
  return (
    <div className="container">
      <div className="hero-img">
        <div className="flex justify-center items-center h-full px-5 py-10 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h1 className="text-5xl lg:text-[65px] font-bold text-white max-w-[36rem] lg:leading-[75px]">
                Discover the true value of your NFTs with HypeScore
              </h1>
              <p className="text-[#CACACE] text-xl md:text-2xl max-w-md mt-4">
                the cutting-edge ranking system
                <span className="font-bold "> powered by AI</span>
              </p>

              <div className="mt-4 text-base md:text-lg text-white font-bold flex gap-[20px]">
                <button className="bg-[#3772FF] hover:bg-[#74798A] px-5 py-1.5 rounded-lg duration-300">
                  Sell NFT
                </button>
                <button className="bg-[#74798A] hover:bg-[#3772FF] px-5 py-1.5 rounded-lg duration-300">
                  Explore
                </button>
              </div>
            </div>
            <div className="flex items-end justify-end">
              <div className="flex gap-2 justify-center items-center">
                <img
                  src={HeroSmall}
                  alt=""
                  className="h-16 w-16 rounded-full"
                />
                <div>
                  <h6 className="text-sm text-white">Visual Artist</h6>
                  <h3 className="text-lg font-bold text-white">
                    @RareRevolutionary
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
