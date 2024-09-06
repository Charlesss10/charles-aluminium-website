import colors from '../../helper-components/Color';
import fonts from '../../helper-components/Font';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  background: ${colors.white};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  box-sizing: border-box;
  display: flex;
  justify-content: center;

  & > .inner-header {
    max-width: 1060px;
    width: 100%;
    padding: 20px;
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
  margin: 0 auto;
  height: 0;
  padding: 20px;

  @media (max-width: 768px) {
  padding: 0;
  height: 40px;
  }
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
  margin-left: 40px;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: ${colors.gray};
  font-family: ${fonts.font1};
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

export const MobileNavMenu = styled.div`
  position: fixed;
  top: 0;
  left: ${({ 
  // @ts-ignore
  menuOpen }) => (menuOpen ? '0' : '-250px')}; /* Hide or show sidebar */
  width: 250px;
  height: 100%;
  background: ${colors.white};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  opacity: ${({ 
  // @ts-ignore
  menuOpen }) => (menuOpen ? '1' : '0')};
  transform: ${({ 
  // @ts-ignore
  menuOpen }) => (menuOpen ? 'translateX(0)' : 'translateX(-10px)')};
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



