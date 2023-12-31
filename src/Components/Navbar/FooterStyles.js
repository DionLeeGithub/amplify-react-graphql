import styled from 'styled-components';

export const Box = styled.div`
padding: 0px 80px;
background: black;
bottom: 0;
width: 100%;
opacity: 0.9;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1200px;
	margin: 0 auto;
	 background: black; 
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 80\px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 18px;
opacity:0.5;
text-decoration: none;

&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;

export const FooterLinkWT = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 16px;
opacity:0.5;
text-decoration: none;
`;

export const Heading = styled.p`
font-size: 30px;
color: #fff;
margin-bottom: 20px;
font-weight: bold;
`;
