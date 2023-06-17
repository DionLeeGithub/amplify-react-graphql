import React from "react";
import ComLog from '../../Images/WheelsLogo-Clean.png';
import '../../App.css';
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
import "../../Style.css"
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                <   NavLink to="/" activeStyle>
                <img src={ComLog} className="LogoPic" alt="logo" />
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact Us
                    </NavLink>
                    <NavLink to="/blogs" activeStyle>
                        Blogs
                    </NavLink>
                    <NavLink to="/sign-up" activeStyle>
                        Sign Up
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;