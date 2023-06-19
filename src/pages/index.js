import React from "react";
import TestPic from '../Test.png';
import "../Style.css"

const Home = () => {
	return (
		<div>
			<h1>
			<h1 className="BigTitle">
				Velg Showcase
			</h1>
			</h1>
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
