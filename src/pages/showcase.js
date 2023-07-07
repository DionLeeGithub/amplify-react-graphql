import React from "react";
import ReactDOM from "react-dom";
import "../Style.css"
import 'swiper/css';
import Johncase from "../hooks/johncaseone";
import Johncasetwo from "../hooks/johncasetwo";
import Johncasethree from "../hooks/johncasethree";
import John from "../hooks/johnthumb";
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
  
  window.addEventListener("scroll", reveal);
  
  

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
				<div className="reveal fade-bottom" Style="margin-top: 100px;"><Johncase /></div>
				<div className="reveal fade-left" Style="margin-top: 100px;"><Johncasetwo/></div>
				<div className="reveal fade-right" Style="margin-top: 100px;"><Johncasethree/></div>
				
				</div>
				<div className="Notagainjohn reveal fade-right">
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
