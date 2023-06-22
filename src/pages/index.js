import React from "react";
import "../Style.css"
import MySliderComponent from '../hooks/showsleed';
import 'swiper/css';

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
			<h2 className="BigTitle">
			Pelek kami legendaris.
			</h2>
			<h2 className="BigTitleDesc">
				Ngeeeeeeeeeeeeeeeeeee
				eeeeeeeeeeeeeeeeeeeeee
				eeeeeeeeeeeeeeeeeeeeeee
				eeeeeeeeeeeeeeeeeeeeeng~
			</h2>
			
				
					<MySliderComponent/>
				
			
		</div>
		
	);
	
};

export default Home;
