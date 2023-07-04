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

export default function Johncase() {
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
        <img src={require('../Images/Cars/Kobo.jpeg')}  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Cars/KoboW.jpeg')}  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Cars/86.jpeg')}  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Cars/86W.jpeg')}  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Cars/Agya.jpeg')}  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Cars/AgyaW.jpeg')}  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Cars/Alphard.jpeg')}  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Cars/AlphardW.jpeg')}  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Cars/Bertiga.jpeg')}  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Cars/BertigaW.jpeg')}  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Cars/Wuling.jpeg')}  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Cars/WulingW.jpeg')}  />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
