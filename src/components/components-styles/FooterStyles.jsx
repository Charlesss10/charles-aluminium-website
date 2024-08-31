import colors from '../../helper-components/Color';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterOuterContainer = styled.div`
  background-color: ${colors.footerBlack};
`;

export const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
  gap: 40px; 
  padding: 40px; 
  background-color: ${colors.footerBlack};
  margin-top: 50px;
  max-width: 1060px;
  height: 300px;
  margin-left: auto; // Center the footer horizontally
  margin-right: auto; // Center the footer horizontally
  
   @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 50px; 
    padding-bottom: 60px; /* Ensure footer bottom is not covered */
    height: auto;
  }
`;

export const NavLink = styled(Link)`
  color: ${colors.gray};
  text-decoration: none;

    &:hover {
      color: ${colors.white};
    }

    @media (max-width: 768px){
     display: block; 
     width: 100%;
    }
`;

export const FooterBox = styled.div`
  color: ${colors.gray};

  &.head-office {
    display: flex;
    flex-direction: column;
  }

  &.quick-links {
    display: flex;
    flex-direction: column;

    div {
    margin-bottom: 10px;
    }
  }

  &.follow-us {
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
      display: none; /* Hide social icons on mobile */
    }
  }

  &.reachOut{
    h2 {
    color: ${colors.darkGray};
  }
    p {
    display: flex;
    margin: 10px 0;
    gap: 10px;
    color: ${colors.gray};

    a {
    color: ${colors.gray};
    text-decoration: none;

     &:hover {
     color: ${colors.white};
     }
    }
  }
`;

export const FooterTitle = styled.h3`
  font-size: 25px;
  margin: 20px 0;
  color: ${colors.white};
  border-bottom: 1px solid ${colors.lightBlue};
  padding-bottom: 10px; /* Adds some spacing between the text and the line */

    @media (max-width: 768px) {
    text-align: left;
    width: 90%;
    padding-left: 0;
  }
`;

export const SocialIcon = styled.a`
  text-decoration: none;
  color: ${colors.gray};
  text-decoration: none;

    &:hover {
      color: ${colors.white};
    }

  svg {
    margin: 0;
  }
`;

export const SocialIconContainer = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 20px;

   @media (max-width: 768px) {
    display: none; /* Hide social icons on mobile */
  }
`;

export const FooterSignature = styled.div`
  text-align: center;
  color: ${colors.gray};
  font-size: 14px;
  margin-top: 20px;
  padding: 15px 0;
  background-color: rgba(0, 0, 0, 0.1);

   @media (max-width: 768px) {
    font-size: 12px;
    margin-top: 10px;
    padding: 10px 0;
  }

  a {
    color: ${colors.gray}; // Link color
    text-decoration: none;

    &:hover {
      color: ${colors.white}; // Color on hover
    }
  }
`;

