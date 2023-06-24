import React from "react";
import ReactDOM from "react-dom";
import "../Style.css"
import MySliderComponent from '../hooks/showsleed';
import 'swiper/css';
import JohnApp from "../hooks/johnapp";
import John from "../hooks/johnthumb";

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
			Modifikasi proper dimulai dari Velg.
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
				<img src={require('../Images/FirstSlideBG.png')} className="DiJohnAppBG" />
				
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

				<div className="containeree">
				<div className="Johnspecial">
				<John/>
				</div>
				</div>
		</div>
		
	);
	
};

export default Home;
