import React from "react";
import ReactDOM from "react-dom";
import "../Style.css"
import MySliderComponent from '../hooks/showsleed';
import 'swiper/css';
import JohnApp from "../hooks/johnapp";
import Actuallyproperreviews from "../hooks/reviews";
import { Helmet } from "react-helmet";
import "../transitions.css";

function reveal() {
	var reveals = document.querySelectorAll(".reveal");
  
	for (var i = 0; i < reveals.length; i++) {
	  var windowHeight = window.innerHeight;
	  var elementTop = reveals[i].getBoundingClientRect().top;
	  var elementVisible = 150;
  
	  if (elementTop < windowHeight - elementVisible) {
		reveals[i].classList.add("active");
	  } else {
		reveals[i].classList.remove("active");
	  }
	}
  }

const Home = () => {
	
	return (
		
		<div>
			<Helmet>
			<script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
			</Helmet>
<div class="elfsight-app-b7496915-1930-4894-9868-602c743b26c6"></div>
			
			<div>
			<div>
			<video class="HomepageVideo" autoplay="autoplay" muted="muted" playsinline="playsinline" loop="loop" src="https://myvideobucketpog.s3.ap-southeast-1.amazonaws.com/BannerVid.mp4"></video>
			</div>
			<div class="HomepageLayers"></div>
			<div class="HomepageLayersSecond"></div>
			</div>
			<div className="containeree">
			<h2 className="BigTitle">
			ALLYOURWHEELS
			</h2>
			<h2 className="BigTitleDesc">
			<span className="Bold">	Modifikasi proper dimulai dari Velg.</span><br/>
			Kami hadir sebagai solusi bagi para pencinta otomotif, khususnya di bidang Velg dan Ban mobil.
			</h2>
			</div>
			<div className="containeree VelgShowcaseBgpic">
				<h2 className="BigTitle VelgShowcase">
			Portofolio Velg Kami
			</h2>
			</div>
			
				<div Style="margin-top: 200px;">
					<MySliderComponent/>
				</div>

				<div className="LongBoiBrand reveal fade-left">
					<h2 className="ReviewTitle">Penyedia Kami</h2>
				<img src={require('../Images/Brands.png')} />
				</div>

				<div className="containereeDiJohnAgain">
				
				
				<div className="containereeDiJohn reveal fade-right">
			<h2 className="DiJohnTitle">
			Velg Kami
			</h2>
			<h2 className="DiJohnText">
			Velg kami dipilih dengan baik dan teliti hingga hasil yang kami miliki merupakan produk yang berkualitas dan terjamin memuaskan.
			</h2>
			</div>
				<div className="DijohnApp reveal fade-bottom">
				<JohnApp />
				</div>
				</div>
				
				<div className="LongBoiBrand2 reveal fade-right">
					<h2 className="ReviewTitle">Benefit belanja dengan kami</h2>
				<img src={require('../Images/Bene.png')} />
				</div>

				<h2 className="ReviewTitle reveal fade-bottom">
			Reviews
			</h2>
			<div className="containerer reveal fade-bottom">
				<div className="containereeDiJohn">
				
			<Actuallyproperreviews />
				</div>
				</div>

		</div>
		
	);
	
};

export default Home;
