import React from "react";
import "../Style.css"

const Home = () => {
	
	return (
		<div>
			<div>
			<video class="HomepageVideo" autoplay="autoplay" muted="muted" playsinline="playsinline" loop="loop" src="https://myvideobucketpog.s3.ap-southeast-1.amazonaws.com/BannerVid.mp4"></video>
			</div>
			<h2 className="BigTitle">
			Pelek kami legendaris.
			</h2>
			<div className="BigTitleDesc">
				Ngeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
				eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeng~
			</div>
			<h1>
			<img src= {require('../Images/Pelak One.png')} className="ShowPic"/>
			<img src= {require('../Images/Pelak Two.png')} className="ShowPic"/>
			<img src= {require('../Images/Pelak Three.png')} className="ShowPic"/>
			<br></br>
			<img src= {require('../Images/Velg One.png')} className="ShowPic"/>
			<img src= {require('../Images/Velg Two.png')} className="ShowPic"/>
			</h1>
		</div>
	);
	
};

export default Home;
