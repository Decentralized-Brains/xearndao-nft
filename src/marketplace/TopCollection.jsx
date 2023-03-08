import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/css/grid";

import TopCollectionCard from "../components/TopCollectionCard";
import { TopCollectionData } from "../data/Data";

SwiperCore.use([Navigation, Pagination]);

import CustomButton from "../components/CustomButton";

import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const TopCollection = () => {
  let swiper_top_collection;

  const handleNext = () => {
    if (swiper_top_collection) {
      swiper_top_collection.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiper_top_collection) {
      swiper_top_collection.slidePrev();
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
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  };

  return (
    <div className="top-collection">
      <div className="container">
        <div className="flex relative justify-between my-5 ">
          <h1 className="text-2xl  md:text-[28px] text-white font-bold">
            Top Collections
          </h1>
          <div className="absolute flex gap-2 right-0 top-0 ">
            {" "}
            <div className=" swiper-button-prev-top " onClick={handlePrev}>
              <CustomButton>
                <MdOutlineArrowBackIos className="sm:text-xl text-black group-hover:text-white" />
              </CustomButton>
            </div>
            <div className=" swiper-button-next-top " onClick={handleNext}>
              <CustomButton>
                <MdOutlineArrowForwardIos className="sm:text-xl text-black group-hover:text-white" />
              </CustomButton>
            </div>
          </div>
        </div>

        <div className="relative">
          <Swiper
            {...swiperParams}
            onSwiper={(s) => (swiper_top_collection = s)}
            navigation={{
              nextEl: ".swiper-button-next-top",
              prevEl: ".swiper-button-prev-top",
            }}
            className="flex justify-center items-center gap-4 h-auto w-full"
          >
            {TopCollectionData.map((item, index) => {
              return (
                <SwiperSlide key={item.id}>
                  <TopCollectionCard
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
    </div>
  );
};

export default TopCollection;
