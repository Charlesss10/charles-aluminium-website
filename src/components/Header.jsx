import { useState, useEffect } from 'react';
import { FaBars, FaFacebook, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';
import {  FaInstagram, FaLinkedin } from 'react-icons/fa';
import {
  HeaderContainer,
  LogoLink,
  LogoImage,
  NavBar,
  NavItem,
  NavLink,
  MobileNavMenu,
  HamburgerIcon,
  SocialIconContainer,
  SocialIcon,
  NavMenu
} from './components-styles/HeaderStyles';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // UseEffect to close the menu when resizing the screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
        <HeaderContainer>

          <NavBar>
            {/*Desktop Navigation Menu*/}
            <LogoLink to="/">
              <LogoImage src={logo} alt="Charles Aluminium Logo" />
            </LogoLink>
            <HamburgerIcon onClick={toggleMenu}>
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </HamburgerIcon>
            <NavMenu>
              <NavItem>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/products">Products</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/services">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact">Contact</NavLink>
              </NavItem>
            </NavMenu>

            <MobileNavMenu 
            // @ts-ignore
            menuOpen={menuOpen}>
              {/*Mobile Navigation Menu*/}
              <NavItem>
                <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about" onClick={toggleMenu}>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/products" onClick={toggleMenu}>Products</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/services" onClick={toggleMenu}>Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink>
              </NavItem>

              <SocialIconContainer>
                <SocialIcon href="https://www.facebook.com/p/Charles-Aluminium-100064226793845/" target="_blank">
                  <FaFacebook size={24} />
                </SocialIcon>
                <SocialIcon href="https://www.instagram.com/charles_aluminium_company/" target="_blank">
                  <FaInstagram size={24} />
                </SocialIcon>
                <SocialIcon href="https://www.linkedin.com/company/charles-aluminium/about/" target="_blank">
                  <FaLinkedin size={24} />
                </SocialIcon>
              </SocialIconContainer>
            </MobileNavMenu>
          </NavBar>   

        </HeaderContainer>
    </>
  );
}

export default Header;
