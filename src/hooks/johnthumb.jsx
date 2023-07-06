import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "../Style.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
        <img src={require('../Images/Tire2.png')} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Tire3.png')} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Tire5.png')} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Tire6.png')} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Tire7.png')} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Tire8.png')} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src={require('../Images/Tire2.png')} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Tire3.png')} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Tire5.png')} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Tire6.png')} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Tire7.png')} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../Images/Tire8.png')} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
