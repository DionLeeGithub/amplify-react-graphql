import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../Style.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function JohnApp() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        initialSlide="4"
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src={require('../Images/Tire1.png')}  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Tire2.png')}  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Tire3.png')}  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Tire4.png')}  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Tire5.png')}  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Tire6.png')}  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Tire7.png')}  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Tire8.png')}  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Tire9.png')}  />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
