import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Swiper.css";
// import required modules
import { Navigation } from "swiper/modules";
const SwiperFree = ({ FreeMovies }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {FreeMovies?.map((elem) => {
          return (
            <SwiperSlide>
              <div className="w-[40%] h-[170px] relative">
                <span className="text-green-800 text-[11px] absolute top-2 left-[70%] bg-green-300 px-1 rounded-xl ">
                  رایگان
                </span>
                <div className="w-full ">
                  <img className="w-full rounded-lg" src={elem.image} />
                </div>
                <span className="text-white text-[16px] absolute right-1 z-50">
                  {elem.title}
                </span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SwiperFree;
