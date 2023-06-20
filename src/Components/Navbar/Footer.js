import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
FooterLinkWT,
Heading,
} from "./FooterStyles";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import "../../Style.css";


const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
		<div class="container">
		<fakecolumn>
		<img src={require('../../Images/WheelsLogo-Dark.png')} className="LogoPic SpecialImage" alt="logo" />
		<footext>
			<p>
			Lorem Ipsum blablabalbalbalab	
			</p>
		</footext>
		</fakecolumn>
		</div>
		
		<Column>
			<Heading>Head Office</Heading>
			<FooterLinkWT>Ruko Mendrisio 3 C no.18, Jl. Boulevard Illago Raya Gading Serpong, Cihuni, Kec. Pagedangan, Kabupaten Tangerang, Banten 15332</FooterLinkWT>
		</Column>
		<Column>
			<Heading>Hubungi Kami</Heading>
			<FooterLink href="https://api.whatsapp.com/send?phone=628111720216" target="_blank"><img src={require('../../Images/PogWa.png')} className="TextImage" alt="logo" /><textimagetext>Kevin</textimagetext></FooterLink>
			<FooterLink href="#">Pratama</FooterLink>
			<FooterLink href="#">Simanjuntak</FooterLink>
			<FooterLink href="#">Mumbai</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	<ul className="FooterText" href="#">©2023 ALLYOURWHEELS. All Rights Reserved.</ul>
	</Container>
	
	</Box>
);
};
export default Footer;
