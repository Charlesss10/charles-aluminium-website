import colors from '../../helper-components/Color';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  background: ${colors.white};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 0;
`;

export const LogoLink = styled(Link)`
  margin-top: 10px;
  margin-left: 25px; /* Space between logo and menu */

   @media (max-width: 768px) {
    margin-left: 0px;
    padding: 0 30px;  /* Add padding to the sides */
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
  height: 80px;
`;

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

    @media (max-width: 768px) {
    &::after {
      transition: none;
      width: 0;
      height: 0; 
    }
  }
`;

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
    padding: 0 30px;  /* Add padding to the sides */
  }
`;

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

  ${NavLink} {
    display: block;
    padding: 10px 20px;
    width: 100%;
  }

  ${NavItem} {
    margin: 5px 0;
    width: 90%;
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

    &:hover {
    color: ${colors.gray};
  }
`;

export const SocialIconContainer = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 20px;
  padding: 10px 20px;
`;



