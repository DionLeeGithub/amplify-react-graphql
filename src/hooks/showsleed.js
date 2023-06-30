import React, { useEffect } from 'react';
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';

Swiper.use([Navigation, Pagination, Autoplay]);

const MySliderComponent = () => {
  useEffect(() => {
    // Initialize Swiper when the component mounts
    const mySwiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      loop: true,
      pagination: '.swiper-pagination',
      grabCursor: true,
      speed: 1000,
      paginationClickable: true,
      parallax: true,
      autoplay: {
        delay: 8000,
        disableOnInteraction: false,
      },
      effect: 'slide',
      mousewheel: true
    });

  }, []);

  return (
    <div className="page-wrap">
    <div id="home-slider">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide swiper-slide-one">
            <div className="swiper-image" data-swiper-parallax-y="-20%">
              <div className="swiper-image-inner swiper-image-left swiper-image-one">
                <h1> <span className="emphasis">Toyota</span> <br /><span>GR86</span></h1>
              </div>
            </div>
            <div className="swiper-image" data-swiper-parallax-y="35%">
              <div className="swiper-image-inner swiper-image-right swiper-image-two">
                <p className="paragraph">
                <span className="emphasis">SSW S202</span><br></br>Ring 18"<br></br>PCD 5x100<br></br>8.5 et42<br></br>GMD
                </p>
              </div>
            </div>
          </div>
          <div className="swiper-slide swiper-slide-two">
            <div className="swiper-image" data-swiper-parallax-y="-20%">
              <div className="swiper-image-inner swiper-image-left swiper-image-three">
                <h1><span className="emphasis">Wuling</span> <br /><span>Air EV</span></h1>
              </div>
            </div>
            <div className="swiper-image" data-swiper-parallax-y="35%">
              <div className="swiper-image-inner swiper-image-right swiper-image-four">
                <p className="paragraph">
                <span className="emphasis">JF WORK RS11</span><br></br>Flow Forming<br></br>Ring 15"<br></br>PCD 4x100<br></br> 6.5 et42<br></br>White Polish
                </p>
              </div>
            </div>
          </div>
          <div className="swiper-slide swiper-slide-three">
            <div className="swiper-image" data-swiper-parallax-y="-20%">
              <div className="swiper-image-inner swiper-image-left swiper-image-five">
                <h1><span className="emphasis">Fortuner</span> <br /><span>GR</span></h1>
              </div>
            </div>
            <div className="swiper-image" data-swiper-parallax-y="35%">
              <div className="swiper-image-inner swiper-image-right swiper-image-six">
                <p className="paragraph">
                <span className="emphasis">JF GAZE</span><br></br>Ring 18"<br></br>PCD 6x139,7<br></br> 9 et0<br></br>Request Repaint Gold</p>
              </div>
            </div>
          </div>
          <div className="swiper-slide swiper-slide-four">
            <div className="swiper-image" data-swiper-parallax-y="-20%">
              <div className="swiper-image-inner swiper-image-left swiper-image-seven">
                <h1><span className="emphasis">Innova</span><br /><span>Zenix</span></h1>
              </div>
            </div>
            <div className="swiper-image" data-swiper-parallax-y="35%">
              <div className="swiper-image-inner swiper-image-right swiper-image-eight">
                <p className="paragraph">
                <span className="emphasis">JF RPF-1</span><br></br>Flow Forming<br></br>Ring 18"<br></br>9.5 et25<br></br>Black Chrome
                </p>
              </div>
            </div>
          </div>
          <div className="swiper-slide swiper-slide-five">
            <div className="swiper-image" data-swiper-parallax-y="-20%">
              <div className="swiper-image-inner swiper-image-left swiper-image-nine">
                <h1><span className="emphasis">Raize</span><br /><span></span></h1>
              </div>
            </div>
            <div className="swiper-image" data-swiper-parallax-y="35%">
              <div className="swiper-image-inner swiper-image-right swiper-image-ten">
                <p className="paragraph">
                <span className="emphasis">JF ES Tarmac</span><br></br>Ring 15"<br></br>PCD 4x100 <br></br>6.5 et40<br></br>White
                </p>
              </div>
            </div>
          </div>
          {/* Add more swiper-slide elements here if desired */}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  </div>
);
};

export default MySliderComponent;