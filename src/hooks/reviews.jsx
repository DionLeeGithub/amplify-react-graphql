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
        <SwiperSlide><div className="ReviewText">★★★★★<br></br><i>"Lagi diracun sama @allyourwheels 😂😂😂"</i><br></br><br></br>ron.cx5ke</div><img src={require('../Images/Ron.png')} /></SwiperSlide>
        <SwiperSlide><div className="ReviewText">★★★★★<br></br><i>"tempat ku berlabuh @allyourwheels 🥰"</i><br></br><br></br>2gd.obs</div><img src={require('../Images/2gd.png')} /></SwiperSlide>
        <SwiperSlide><div className="ReviewText">★★★★★<br></br><i>"Akhirnya Si Candi Beres Juga dan langsung ganti sepatu.. untung aja @allyourwheels punya size yang cocok🥰🥰 "</i><br></br><br></br>gasz.mobilan</div><img src={require('../Images/Gaszm.png')} /></SwiperSlide>
        <SwiperSlide><div className="ReviewText">★★★★★<br></br><i>"Thx @allyourwheels . Kijang tua jadi punya sepatu baru …. 😂😂😂"</i><br></br><br></br>barong2kd</div><img src={require('../Images/Baro.png')} /></SwiperSlide>
        <SwiperSlide><div className="ReviewText">★★★★★<br></br><i>"Sepatu baru 😬😬"</i><br></br><br></br>b2drw</div><img src={require('../Images/B2d.png')} /></SwiperSlide>
        <SwiperSlide><div className="ReviewText">★★★★★<br></br><i>"Setelah 2 taun ga ganti velg🤧poll pokoknya @allyourwheels "</i><br></br><br></br>kodok.gk5</div><img src={require('../Images/Kodok.png')} /></SwiperSlide>
        <SwiperSlide><div className="ReviewText">★★★★★<br></br><i>"disakiti oleh si ZE, disembuhi oleh si TE <br></br>Special Thanks to @allyourwheels for the new shoes"</i><br></br><br></br>brovezel</div><img src={require('../Images/Bro.png')} /></SwiperSlide>
        <SwiperSlide><div className="ReviewText">★★★★★<br></br><i>"ganti sepatu ✌🏻 Thank you @allyourwheels"</i><br></br><br></br>vad3r.g5k</div><img src={require('../Images/Vad.png')} /></SwiperSlide>
        <SwiperSlide><div className="ReviewText">★★★✩✩✩<br></br><i>"Welcoming Rocky, a.k.a Minion as our new daily driver. Hope this car lasts long & have a long journey with us✨😃 "</i><br></br><br></br>raoul.sava</div><img src={require('../Images/Raoul.png')} /></SwiperSlide>
      </Swiper>
    </>
  );
}
