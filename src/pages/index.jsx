import React from "react";
import ReactDOM from "react-dom";
import "../Style.css"
import MySliderComponent from '../hooks/showsleed';
import 'swiper/css';
import JohnApp from "../hooks/johnapp";
import Actuallyproperreviews from "../hooks/reviews";

const Home = () => {
	
	return (
		<div>
			
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
			Slideshow Pelek Satu
			</h2>
			</div>
			
				<div>
					<MySliderComponent/>
				</div>
				<div className="containereeDiJohnAgain">
				
				
				<div className="containereeDiJohn">
			<h2 className="DiJohnTitle">
			Pelelelelek Lejen
			</h2>
			<h2 className="DiJohnText">
			Vroooom vrooooom ngeeeeeeeeeeng woooooooosh ngeeeeeeeeng skrrrrrttttttt.
			</h2>
			</div>
				<div className="DijohnApp">
				<JohnApp />
				</div>
				</div>

				<h2 className="ReviewTitle">
			Review Kerenz Kami Gaes
			</h2>
				<div className="containereeDiJohn">
				<div className="containerer">
			<Actuallyproperreviews />
				</div>
				</div>

		</div>
		
	);
	
};

export default Home;
