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
  background: ${colors.footerBlack};
  margin-top: 50px;
  max-width: 1200px; // Added max-width to control the footer width
  margin-left: auto; // Center the footer horizontally
  margin-right: auto; // Center the footer horizontally
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 20px; 
  }
`;

export const FooterBox = styled.div`
  color: ${colors.gray};

  &.head-office, &.follow-us, &.quick-links {
    display: flex;
    flex-direction: column;
    align-items: center;
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
`;
