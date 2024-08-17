import colors from '../helper-components/Color';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterOuterContainer = styled.div`
  background: ${colors.footerBlack};
`;

export const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
  gap: 40px; 
  padding: 40px; 
  padding-bottom: 80px; /* Add extra padding to prevent overlap */
  background: ${colors.footerBlack};
  margin-top: 50px;
  max-width: 1200px; // Added max-width to control the footer width
  margin-left: auto; // Center the footer horizontally
  margin-right: auto; // Center the footer horizontally
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 20px; 
    padding-bottom: 60px; /* Ensure footer bottom is not covered */
  }
`;

export const FooterBox = styled.div`
  color: ${colors.gray};

  &.head-office, &.quick-links {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &.follow-us {
    display: flex;
    flex-direction: column;
    align-items: center;

      @media (max-width: 768px) {
    display: none; /* Hide social icons on mobile */
  }
  }

  a {
    color: ${colors.gray};
    text-decoration: none;

    &:hover {
      color: ${colors.white};
    }
  }
`;

export const FooterTitle = styled.h3`
  font-size: 25px;
  margin: 20px 0;
  color: ${colors.white};
  text-align: center;
  border-bottom: 2px solid ${colors.lightBlue};
  padding-bottom: 10px; /* Adds some spacing between the text and the line */
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
  position: relative;
  padding: 5px 0;
  text-align: center;

  &:hover {
    color: ${colors.white};
  }
`;

export const SocialIcon = styled.a`
  text-decoration: none;

  svg {
    margin: 0;
  }
`;

export const SocialIconContainer = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
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
  background-color: ${colors.black};

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
