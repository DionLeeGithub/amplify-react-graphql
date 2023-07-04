import React from "react";
import ReactDOM from "react-dom";
import "../Style.css"
import 'swiper/css';
import Johncase from "../hooks/johncaseone";
import Johncasetwo from "../hooks/johncasetwo";
import Johncasethree from "../hooks/johncasethree";
import John from "../hooks/johnthumb";

const Showcase = () => {
	
	return (
		
		<div>
			
			<div>
			<div>
			<video class="HomepageVideo" autoplay="autoplay" muted="muted" playsinline="playsinline" loop="loop" src="https://myvideobucketpog.s3.ap-southeast-1.amazonaws.com/Carlmao.mp4"></video>
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
			

				<div className="containereeDiJohnAgain">
				
				
				<div className="containereeDiJohn">
			<h2 className="DiJohnTitle">
			Showcase
			</h2>
			<h2 className="DiJohnText">
			Hasil ALLYOURWHEELS
			</h2>
			</div>
				<div className="DijohnApp">
				<Johncase />
				<Johncasetwo/>
				<Johncasethree/>
				
				</div>
				<div className="Notagainjohn">
				<div className="containereejohn">
				<div className="Johnspecial">
				<John />
				</div>
				</div>
				</div>
				</div>
				
		

		

		</div>
		
	);
	
};

export default Showcase;
