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

export default function Johncasethree() {
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
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper3"
      >
        <SwiperSlide>
        <img src={require('../Images/Cars/Hrv.jpeg')}  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Cars/HrvW.jpeg')}  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Cars/MAZDA.jpeg')}  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Cars/MAZDAW.jpeg')}  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Cars/Mini.jpeg')}  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Cars/MiniW.jpeg')}  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Cars/Rocky.jpeg')}  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Cars/RockyW.jpeg')}  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Cars/Sciro.jpeg')}  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Cars/SciroW.jpeg')}  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Cars/Santa.jpeg')}  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Cars/SantaW.jpeg')}  />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
