import React from "react";
import "../Style.css"

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
			<h1>
			<img src= {require('../Images/Pelak One.png')} className="ShowPic"/>
			<img src= {require('../Images/Pelak Two.png')} className="ShowPic"/>
			<img src= {require('../Images/Pelak Three.png')} className="ShowPic"/>
			<br></br>
			<img src= {require('../Images/Velg One.png')} className="ShowPic"/>
			<img src= {require('../Images/Velg Two.png')} className="ShowPic"/>
			</h1>

			<section id="slideshow">
      <div class="entire-content">
        <div class="content-carrousel">
          <figure class="shadow"><img src={require('../Images/Pelak One.png')}/></figure>
          <figure class="shadow"><img src={require('../Images/Pelak Two.png')}/></figure>
          <figure class="shadow"><img src={require('../Images/Pelak Three.png')}/></figure>
          <figure class="shadow"><img src={require('../Images/Velg One.png')}/></figure>
          <figure class="shadow"><img src={require('../Images/Velg Two.png')}/></figure>
          <figure class="shadow"><img src={require('../Images/Pelak One.png')}/></figure>
          <figure class="shadow"><img src={require('../Images/Pelak Two.png')}/></figure>
          <figure class="shadow"><img src={require('../Images/Pelak Three.png')} /></figure>
          <figure class="shadow"><img src={require('../Images/Velg Two.png')}/></figure>
    </div>
  </div>
</section>
		</div>
	);
	
};

export default Home;
