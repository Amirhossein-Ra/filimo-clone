import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Swiper.css";
// import required modules
import { Navigation } from "swiper/modules";
const SwiperSeries = ({ singleSeries }) => {
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
        {singleSeries?.map((item) => {
          return (
            <SwiperSlide>
              <div className="   sm:w-[150px] sm:h-[120px] lg:w-[220px]  lg:h-[168px] relative m-0 ">
                <img className="w-full rounded-lg" src={item.image} />
                <h1 className="sm:text-[13px] absolute left-[50%] text-white font-bold lg:text-[20px] mt-2">
                  {item.title}
                </h1>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SwiperSeries;
