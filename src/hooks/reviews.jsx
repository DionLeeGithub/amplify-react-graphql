import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../Style.css";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper";


export default function Actuallyproperreviews() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div className="ReviewText">★★★★★✩✩✩✩✩<br></br><i>"Wow pelek ku bisa terbang di langit yang biru gaes wkwkwkwk"</i><br></br><br></br>Pelek Master</div><img src={require('../Images/Pelak One.png')} /></SwiperSlide>
        <SwiperSlide><div className="ReviewText">★★★★✩✩✩<br></br><i>"Gaes pelek ku kok bisa melayang sendiri ke rumah tetangga ya???"</i><br></br><br></br>Setan Pelek</div><img src={require('../Images/Pelak Two.png')} /></SwiperSlide>
        <SwiperSlide><div className="ReviewText">★★★★★★★★★★★★★★★★★✩✩✩✩✩<br></br><i>"Gaes aku berhasil ngeheck bintang reviewnya, kerenz kanz? oiya peleknya bagus."</i><br></br><br></br>Hackerman6969</div><img src={require('../Images/Pelak Three.png')} /></SwiperSlide>
        <SwiperSlide><div className="ReviewText">★★★✩✩✩<br></br><i>"Gaes keknya aku salah beli pelek, ini apaan?"</i><br></br><br></br>Pedagang Baso Allogio</div><img src={require('../Images/Bocchi.gif')} /></SwiperSlide>
        <SwiperSlide><div className="ReviewText">★★★★★✩✩✩✩✩<br></br><i>"Wow pelek ku bisa terbang di langit yang biru gaes wkwkwkwk"</i><br></br><br></br>Pelek Master</div><img src={require('../Images/Pelak One.png')} /></SwiperSlide>
        <SwiperSlide><div className="ReviewText">★★★★★✩✩✩✩✩<br></br><i>"Wow pelek ku bisa terbang di langit yang biru gaes wkwkwkwk"</i><br></br><br></br>Pelek Master</div><img src={require('../Images/Pelak One.png')} /></SwiperSlide>
        <SwiperSlide><div className="ReviewText">★★★★★✩✩✩✩✩<br></br><i>"Wow pelek ku bisa terbang di langit yang biru gaes wkwkwkwk"</i><br></br><br></br>Pelek Master</div><img src={require('../Images/Pelak One.png')} /></SwiperSlide>
        <SwiperSlide><div className="ReviewText">★★★★★✩✩✩✩✩<br></br><i>"Wow pelek ku bisa terbang di langit yang biru gaes wkwkwkwk"</i><br></br><br></br>Pelek Master</div><img src={require('../Images/Pelak One.png')} /></SwiperSlide>
        <SwiperSlide><div className="ReviewText">★★★★★✩✩✩✩✩<br></br><i>"Wow pelek ku bisa terbang di langit yang biru gaes wkwkwkwk"</i><br></br><br></br>Pelek Master</div><img src={require('../Images/Pelak One.png')} /></SwiperSlide>
      </Swiper>
    </>
  );
}
