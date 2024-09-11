import { useState, useEffect, useRef } from 'react';
import { FaBars, FaFacebook, FaTimes } from 'react-icons/fa';
import logo2 from '../assets/logo2.png';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

import {
  HeaderContainer,
  LogoImage,
  NavBar,
  NavLink,
  MobileNavMenu,
  HamburgerIcon,
  SocialIconContainer,
  SocialIcon,
  NavMenu,
  DropdownContainer,
  DropdownMenu,
} from './components-styles/HeaderStyles';
import ProductInfoData from '../products/ProductInfoData';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation(); // Get the current path

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
              <NavLink href="/"
                // @ts-ignore
                $isactive={location.pathname === '/' ? 'true' : undefined}>
                Home
              </NavLink>
              <NavLink href="/about"
                // @ts-ignore
                $isactive={location.pathname === '/about' ? 'true' : undefined}>
                About
              </NavLink>
              <DropdownContainer>
                <NavLink href="/products"
                  // @ts-ignore
                  $isactive={location.pathname === '/products' ? 'true' : undefined}>
                  Products
                </NavLink>
                <DropdownMenu>
                  {ProductInfoData.map(product => (
                    <NavLink key={product.id} href={`/products/${product.name}`}>
                      {product.name}
                    </NavLink>
                  ))}
                </DropdownMenu>
              </DropdownContainer>
              <NavLink href="/services"
                // @ts-ignore
                $isactive={location.pathname === '/services' ? 'true' : undefined}>
                Services
              </NavLink>
              <NavLink href="/contact"
                // @ts-ignore
                $isactive={location.pathname === '/contact' ? 'true' : undefined}>
                Contact
              </NavLink>
            </NavMenu>

            <MobileNavMenu ref={menuRef}
              // @ts-ignore
              $menuopen={menuOpen ? 'true' : undefined}>
              {/*Mobile Navigation Menu*/}
                <NavLink href="/" 
                // @ts-ignore
                $isactive={location.pathname === '/' ? 'true' : undefined} onClick={toggleMenu}>Home</NavLink>
              <NavLink href="/about"
                // @ts-ignore
                $isactive={location.pathname === '/about' ? 'true' : undefined} onClick={toggleMenu}>About</NavLink>
              <NavLink href="/products"
                // @ts-ignore
                $isactive={location.pathname === '/products' ? 'true' : undefined} onClick={toggleMenu}>Products</NavLink>
              <NavLink href="/services"
                // @ts-ignore
                $isactive={location.pathname === '/services' ? 'true' : undefined} onClick={toggleMenu}>Services</NavLink>
              <NavLink href="/contact"
                // @ts-ignore
                $isactive={location.pathname === '/contact' ? 'true' : undefined} onClick={toggleMenu}>Contact</NavLink>

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
