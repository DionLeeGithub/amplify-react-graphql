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
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><textswipepog><div className="Velgname">SSW F104</div> <br></br>Velg ban dari Stamford Sport Wheels ukuran 19" dengan ET 38 PCD 5x114.</textswipepog>
        <img src={require('../Images/Tire1.png')}  />{/*Rp 14.000.000 SSW F104 R19 PCD 5X114.3 8.5 ET 38 FPBK-GCBK.jpeg*/}
        </SwiperSlide>
        <SwiperSlide><textswipepog><div className="Velgname">SSW S323</div> <br></br>Velg ban dari Stamford Sport Wheels ukuran 17" dengan ET 16 PCD 6x139.</textswipepog>
        <img src={require('../Images/Tire2.png')}  />{/*SOLD OUT Rp 8.300.000,- SSW S323 R17 PCD 6x139,7 9 ET 15 GMM.jpeg */}
        </SwiperSlide>
        <SwiperSlide><textswipepog><div className="Velgname">JF FULLRACE</div> <br></br>Velg ban dari JF Luxury Wheels ukuran 16" dengan ET 32 PCD 5x114,3.</textswipepog>
        <img src={require('../Images/Tire3.png')}  />{/*Rp 5.300.000 JF FULLRACE R16 PCD 5x114.3 7 ET 32 WHITE.jpeg */}
        </SwiperSlide>
        <SwiperSlide><textswipepog><div className="Velgname">SSW S200</div> <br></br>Velg ban dari Stamford Sport Wheels ukuran 15" dengan ET 38 PCD 8Hx100/114,3.</textswipepog>
        <img src={require('../Images/Tire4.png')}  />{/*Rp 4.800.000 SSW S200 15X6.5/8/100/114.3/40 HS/LP.jpeg*/}
        </SwiperSlide>
        <SwiperSlide><textswipepog><div className="Velgname">JF CE28 SPOKE</div> <br></br>Velg ban dari JF Luxury Wheels ukuran 14" dengan ET 38 PCD 4x100-114,3.</textswipepog>
        <img src={require('../Images/Tire5.png')}  />{/*Rp 3.500.000 JF CE28 SPOKE R14 PCD 4X100-114,3 5.5 ET 38 RALLY BRONZE.jpeg*/}
        </SwiperSlide>
        <SwiperSlide><textswipepog><div className="Velgname">SSW S397</div> <br></br>Velg ban dari Stamford Sport Wheels ukuran 16" dengan ET 42 PCD 4x100.</textswipepog>
        <img src={require('../Images/Tire6.png')}  />{/*Rp 5.800.000 SSW S397 R16 PCD 4x100 7 ET 42 ABDS-LPBR.jpeg */}
        </SwiperSlide>
        <SwiperSlide><textswipepog><div className="Velgname">SSW S165</div> <br></br>Velg ban dari Stamford Sport Wheels ukuran 17" dengan ET 42 PCD 4x100.</textswipepog>
        <img src={require('../Images/Tire7.png')}  />{/*Rp 6.800.000 SSW S165 R17 PCD 4x100 7.5 ET 42 GMD.jpeg */}
        </SwiperSlide>
        <SwiperSlide><textswipepog><div className="Velgname">JF REP BBS CHR</div> <br></br>Velg ban dari JF Luxury Wheels ukuran 18" dengan ET 40 PCD 5x114.</textswipepog>
        <img src={require('../Images/Tire8.png')}  />{/*Rp 7.000.000,- JF-REP BBS CHR R18 FLOWFORGED PCD 5.114 8.5 ET 40 BLACK.jpeg */}
        </SwiperSlide>
        <SwiperSlide><textswipepog><div className="Velgname">SSW S369</div> <br></br>Velg ban dari Stamford Sport Wheels ukuran 19" dengan ET 45 PCD 5x114,3.</textswipepog>
        <img src={require('../Images/Tire9.png')}  />{/*Rp 11.000.000 SSW S369 R19 PCD 5X114.3 8.5 ET 45 HB.jpeg */}
        </SwiperSlide>
      </Swiper>
    </>
  );
}
