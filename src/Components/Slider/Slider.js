import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSlide } from "../../Redux/Slider/SliderSlice";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import "./Slider.css";

// import required modules
import { Autoplay, EffectFade } from "swiper/modules";
const Slider = () => {
  const { Slides } = useSelector((state) => state.Slider);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSlide());
  }, []);
  return (
    <div className="w-full h-[600px] relative">
      <Swiper
        effect={"fade"}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
      >
        {Slides?.map((elem) => {
          return (
            <SwiperSlide>
              <img
                className="Autoplay w-full "
                src={elem.image}
                alt={elem.alt}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
