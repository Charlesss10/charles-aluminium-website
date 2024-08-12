import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';
import {
  HeaderOuterContainer,
  HeaderContainer,
  LogoLink,
  LogoImage,
  NavBar,
  NavMenu,
  NavItem,
  NavLink,
  MobileNavMenu,
  HamburgerIcon,
  HeroSection,
  HeroContent,
  HeroButton,
  WelcomeTextHeader,
  WelcomeText
} from './HeaderStyles'; // Adjust the import path as needed

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // UseEffect to close the menu when resizing the screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) { // Adjust the width as per your design
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
      <HeaderOuterContainer>
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
                <NavLink to="/about">About Us</NavLink>
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

            <MobileNavMenu menuOpen={menuOpen}>
              {/*Mobile Navigation Menu*/}
              <NavItem>
                <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about" onClick={toggleMenu}>About Us</NavLink>
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
            </MobileNavMenu>

          </NavBar>
        </HeaderContainer>
      </HeaderOuterContainer>

      <HeroSection>
        <HeroContent>
          <WelcomeTextHeader>Welcome to Charles Aluminium</WelcomeTextHeader>
          <WelcomeText>Your Partner in Quality Aluminium Products and Nigeria's Leading Roofing Experts. Quality, durability, and excellence in every project.</WelcomeText>
          <HeroButton href="/about">Read More</HeroButton>
        </HeroContent>
      </HeroSection>
      <hr />
    </>
  );
}

export default Header;
