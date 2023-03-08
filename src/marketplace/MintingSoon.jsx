import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/css/grid";

SwiperCore.use([Navigation, Pagination]);

import CustomButton from "../components/CustomButton";
import { MintingSoonData } from "../data/Data";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import MintingSoonCard from "../components/MintingSoonCard";

const MintingSoon = () => {
  let swiper_minting;

  const handleNext = () => {
    if (swiper_minting) {
      swiper_minting.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiper_minting) {
      swiper_minting.slidePrev();
    }
  };

  const slidesPerView = 1;
  const spaceBetween = 16;

  const swiperParams = {
    spaceBetween,
    slidesPerView,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      540: {
        slidesPerView: 1,
        spaceBetween: 8,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
  };
  return (
    <div className="container">
      <div className="flex relative justify-between my-5 ">
        <h1 className="text-2xl  md:text-[28px] text-[#101317] font-bold">
          Minting Soon
        </h1>

        <div className="absolute flex gap-2 right-0 top-0 ">
          {" "}
          <div className=" swiper-button-prev-mint" onClick={handlePrev}>
            <CustomButton>
              <MdOutlineArrowBackIos className="sm:text-xl text-black group-hover:text-white" />
            </CustomButton>
          </div>
          <div className=" swiper-button-next-mint " onClick={handleNext}>
            <CustomButton>
              <MdOutlineArrowForwardIos className="sm:text-xl text-black group-hover:text-white" />
            </CustomButton>
          </div>
        </div>
      </div>
      <div>
        <Swiper
          {...swiperParams}
          onSwiper={(s) => (swiper_minting = s)}
          navigation={{
            nextEl: ".swiper-button-next-mint",
            prevEl: ".swiper-button-prev-mint",
          }}
          className="flex justify-center items-center gap-4  h-auto w-full"
        >
          {MintingSoonData.map((item, index) => {
            return (
              <SwiperSlide key={item.id}>
                <MintingSoonCard
                  key={item.name + index}
                  data={item}
                  idIndexObject={index}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default MintingSoon;
