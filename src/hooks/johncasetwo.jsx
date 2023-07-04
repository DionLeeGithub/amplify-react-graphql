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

export default function Johncasetwo() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={false}
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
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper3"
      >
        <SwiperSlide>
        <img src={require('../Images/Cars/BMW.jpeg')}  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Cars/BMWW.jpeg')}  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Cars/Camry.jpeg')}  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Cars/CamryW.jpeg')}  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Cars/City.jpeg')}  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Cars/CityW.jpeg')}  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Cars/Fiesta.jpeg')}  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Cars/FiestaW.jpeg')}  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Cars/Hilux.jpeg')}  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Cars/HiluxW.jpeg')}  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Cars/Sonata.png')}  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Cars/SonataW.jpeg')}  />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
