import React from "react";
import ComLog from '../../Images/WheelsLogo-Clean.png';
import '../../App.css';
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
import "../../Style.css"
 
const Navbar = () => {
    return (
        <>
            <replacednav className="RepNav">
                <NavMenu>
                <   NavLink to="/" activeStyle>
                <img src={ComLog} className="LogoPic" alt="logo" />
                    </NavLink>
                    <sidenav className="SideNavStyle">
                    <NavLink to="/about" activeStyle>
                        <onhover>
                        Showcase
                        </onhover>
                    </NavLink>
                    <NavLink to="/blogs" activeStyle>
                        <onhover>
                        Our Location
                        </onhover>
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        <onhover>
                        Contact Us
                        </onhover>
                    </NavLink>
                    <NavLink to="/sign-up" activeStyle>
                         <onhover>
                        About Us
                        </onhover>
                    </NavLink>  
                    <NavLink to="/sign-up" activeStyle>
                         <onhover>
                        Our Work
                        </onhover>
                    </NavLink>  
                    </sidenav>
                    
                </NavMenu>
                <   NavLink to="https://www.tokopedia.com/allyourwheels" target="_blank" activeStyle>
                        <onhover>
                <img src={require('../../Images/Shop.png')} className="BuyPic" alt="logo" />
                        </onhover>
                    </NavLink>
            </replacednav>
            
        </>
    );
};
 
export default Navbar;