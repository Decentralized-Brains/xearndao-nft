import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Grid } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css/grid";
import { TrendingCollectionData } from "../data/Data";
import TrendingCollectionCard from "./TrendingCollectionCard";

SwiperCore.use([Navigation, Pagination, Grid]);

import CustomButton from "./CustomButton";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const Slider = () => {
  let swiper_trend;

  const handleNext = () => {
    if (swiper_trend) {
      swiper_trend.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiper_trend) {
      swiper_trend.slidePrev();
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
      640: {
        slidesPerView: 1,
        spaceBetween: 8,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
    },
    grid: {
      rows: 2,
      fill: "row",
    },
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex relative justify-between mb-5 ">
        <h1 className="text-2xl  md:text-[28px] text-[#101317] font-bold">
          Trending Collection
        </h1>

        <div className="absolute flex gap-2 right-0 top-0 ">
          {" "}
          <div className=" swiper-button-prev-trend" onClick={handlePrev}>
            <CustomButton>
              <MdOutlineArrowBackIos className="sm:text-xl text-black group-hover:text-white" />
            </CustomButton>
          </div>
          <div className=" swiper-button-next-trend " onClick={handleNext}>
            <CustomButton>
              <MdOutlineArrowForwardIos className="sm:text-xl text-black group-hover:text-white" />
            </CustomButton>
          </div>
        </div>
      </div>
      <div>
        <Swiper
          {...swiperParams}
          onSwiper={(s) => (swiper_trend = s)}
          navigation={{
            nextEl: ".swiper-button-next-trend",
            prevEl: ".swiper-button-prev-trend",
          }}
        >
          {TrendingCollectionData.map((item, index) => {
            return (
              <SwiperSlide key={item.id}>
                <TrendingCollectionCard
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

export default Slider;
