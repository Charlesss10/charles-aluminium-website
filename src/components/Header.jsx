import { useState, useEffect, useRef } from 'react';
import { FaBars, FaFacebook, FaTimes } from 'react-icons/fa';
import logo2 from '../assets/logo2.png';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import {
  HeaderContainer,
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
  const menuRef = useRef(null);

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

  // UseEffect to handle outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false); // Close the menu when clicked outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef, setMenuOpen]);

  return (
    <>
      <HeaderContainer>
        <div className="inner-header">
          <NavBar>
            {/*Desktop Navigation Menu*/}
            <a href="/">
              <LogoImage src={logo2} alt="Charles Aluminium Logo" />
            </a>
            <HamburgerIcon onClick={toggleMenu}>
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </HamburgerIcon>
            <NavMenu>
              <NavItem>
                <NavLink href="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/products">
                  Product
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/services">
                  Services
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">
                  Contact
                </NavLink>
              </NavItem>
            </NavMenu>

            <MobileNavMenu ref={menuRef}
              // @ts-ignore
              $menuopen={menuOpen ? 'true' : undefined}>
              {/*Mobile Navigation Menu*/}
              <NavItem>
                <NavLink href="/" onClick={toggleMenu}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about" onClick={toggleMenu}>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/products" onClick={toggleMenu}>Products</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/services" onClick={toggleMenu}>Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact" onClick={toggleMenu}>Contact</NavLink>
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
        </div>
      </HeaderContainer>
    </>
  );
}

export default Header;
