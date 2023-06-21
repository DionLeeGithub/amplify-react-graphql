import React, { useEffect, useState } from "react";
import ComLog from '../../Images/WheelsLogo-Clean.png';
import '../../App.css';
import { Nav, NavLink, NavMenu, Bars, NavBtn, NavBtnLink } from "./NavbarElements";
import "../../Style.css";

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)
  
    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }
  
    return (
      <nav className="navbar">
        <div className="container">
          <div className="logo">
          <   NavLink to="/" activeStyle>
                <img src={ComLog} className="LogoPic" alt="logo" />
                    </NavLink>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
          <img src={require('../../Images/Drop.png')} className="DropPic" alt="logo" />
          </div>
          <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <sidenav className="SideNavStyle">
            <ul>
              <li>
              
                    <NavLink to="/about" activeStyle>
                        <onhover>
                        Showcase
                        </onhover>
                    </NavLink>
                    
              </li>
              <li>
              <NavLink to="https://www.google.com/maps/place/ALLYOURWHEELS/@-6.2685673,106.6310378,15z/data=!4m6!3m5!1s0x2e69f9ceacba3545:0xb86c65efcda912d7!8m2!3d-6.2685673!4d106.6310378!16s%2Fg%2F11pcrnsmmx?entry=ttu" target="_blank" activeStyle>
                        <onhover>
                        Lokasi
                        </onhover>
                    </NavLink>
              </li>
              <li>
              <NavLink to="/contact" activeStyle>
                        <onhover>
                        Layanan
                        </onhover>
                    </NavLink>
              </li>
              <li>
              <NavLink to="/sign-up" activeStyle>
                         <onhover>
                        Tentang Kami
                        </onhover>
                        </NavLink>
              </li>
              <li>
              <NavLink to="https://drive.google.com/drive/u/0/folders/19wQMZCu6qGv9uFR3rjejBcP9RkmUi7al" target="_blank" activeStyle>
                         <onhover>
                        Galeri
                        </onhover>
                    </NavLink>  
              </li>
            </ul>
            
            </sidenav>
          </div>
        </div>
        <   NavLink to="https://www.tokopedia.com/allyourwheels" target="_blank" activeStyle>
                        <onhover>
                <img src={require('../../Images/Shop.png')} className="BuyPic" alt="logo" />
                        </onhover>
                    </NavLink>
      </nav>
    )
  }
  
  export default Navbar
/*const Navbar = () => {
    return (
        <>
        <Nav>
        <Bars />
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
                        Lokasi
                        </onhover>
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        <onhover>
                        Layanan
                        </onhover>
                    </NavLink>
                    <NavLink to="/sign-up" activeStyle>
                         <onhover>
                        Tentang Kami
                        </onhover>
                    </NavLink>  
                    <NavLink to="https://drive.google.com/drive/u/0/folders/19wQMZCu6qGv9uFR3rjejBcP9RkmUi7al" target="_blank" activeStyle>
                         <onhover>
                        Galeri
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
            </Nav>
        </>
    );
};
 
export default Navbar; */