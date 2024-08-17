import colors from '../helper-components/Color';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import heroImage from '../assets/heroImage.png';

export const HeaderOuterContainer = styled.div`
  background: ${colors.white};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  background: ${colors.white};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 0;
`;

export const LogoLink = styled(Link)`
  display: flex
  align-items: center;
  margin-top: 10px;
  margin-left: 25px; /* Space between logo and menu */

  @media (max-width: 768px) {
    margin-left: 0px;
  }

`;

export const LogoImage = styled.img`
  width: 120px;
  height: auto;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  max-width: 1020px;
  margin: 0 auto;
  height: 80px; /* Adjust the height as needed */

  @media (max-width: 768px) {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

// Navigation menu for desktop
export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  margin-right: 40px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${colors.gray};
  font-size: 18px;
  font-weight: 500;
  position: relative;
  padding: 10px 0;

  &:hover {
    color: ${colors.black};
  }

  &::after {
    content: '';
    position: absolute;
    width: 0%;
    height: 2px;
    background-color: ${colors.lightBlue};
    left: 0;
    bottom: -5px;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }

`;

// Hamburger icon style for mobile
export const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  color: ${colors.gray};

  svg {
    width: 25px; /* Adjust icon size */
    height: auto;
  }

  @media (max-width: 768px) {
    display: block;
    margin-right: 0;
  }
`;

// Sidebar style for mobile navigation
export const MobileNavMenu = styled.div`
  position: fixed;
  top: 0;
  left: ${({ menuOpen }) => (menuOpen ? '0' : '-250px')}; /* Hide or show sidebar */
  width: 250px;
  height: 100%;
  background: ${colors.white};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  opacity: ${({ menuOpen }) => (menuOpen ? '1' : '0')};
  transform: ${({ menuOpen }) => (menuOpen ? 'translateX(0)' : 'translateX(-10px)')};
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  padding: 20px;
  list-style: none;
  border-top: 5px solid ${colors.lightBlue};
  z-index: 1001; /* Ensure sidebar is above other content */

  ${NavItem} {
    margin: 15px 0;  // Adjust vertical spacing between items
  }

`;

export const SocialIcon = styled.a`
  text-decoration: none;
  color: ${colors.darkGray};
  height: '100px';

  svg {
    margin: 0;
  }

    svg {
    height: 25px; // Adjust the height of the icon
  }
`;

export const SocialIconContainer = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  margin-top: 20px;
`;

export const HeroSection = styled.section`
  height: 90vh;
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;

  /* Pseudo-element for dimming effect */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Adjust the alpha value (0.5) for more or less dimming */
    z-index: 1; /* Ensure the overlay is above the background image but below the content */
  }

  /* Ensure content is above the dimming overlay */
  > * {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 768px) {
    height: 60vh;
    padding: 20px;
  }
`;

export const HeroContent = styled.div`
  z-index: 2;
  max-width: 800px;
  padding: 20px;
  color: ${colors.white};
`;

export const HeroButton = styled.a`
  display: inline-block;
  padding: 5px 13px;
  font-size: 13px;
  font-weight: 400;
  color: ${colors.black};
  background-color: ${colors.lightBlue}; //Color Name: Medium Turquoise
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${colors.gray};
  }
`;

export const WelcomeTextHeader = styled.h1`
  font-size: 36px;
`;

export const WelcomeText = styled.p`
  font-size: 14px;
  margin-top: -10px;
`;

