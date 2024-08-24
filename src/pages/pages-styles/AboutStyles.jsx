import styled from 'styled-components';
import colors from '../.././helper-components/Color'
import { Link } from 'react-router-dom';

export const AboutPageContainer = styled.div`
  padding: 20px;
`;

export const ContentWrapper = styled.div`
  max-width: 1060px; /* Sets the maximum width for the content */
  margin: 0 auto;    /* Centers the content horizontally */
  padding: 0 20px;   /* Optional: adds some horizontal padding */
`;

export const AboutContainer = styled.section`
  max-width: 1060px; /* Ensuring content width */
  margin: 0 auto; /* Centers the section */
  
  @media (max-width: 768px) {
    text-align: left; /* Align text to the left */
    padding: 0 10px;  /* Add padding to the sides */
  }
`;

export const AboutTitle = styled.h2`
  text-align: center;
  color: ${colors.darkGray};
  margin-bottom: 20px;

    @media (max-width: 768px) {
    text-align: left; /* Align text to the left */
  }
`;

export const AboutContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: ${colors.darkGray};
  gap: 20px;
  justify-content: space-between; /* Ensures spacing between the columns */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: left;
  }
`;

export const AboutText = styled.div`
  flex: 1; /* Takes up half the width of the container */
  text-align: left; /* Align text to the left */
  line-height: 2;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const AboutImageContainer = styled.div`
  flex: 1; /* Takes up half the width of the container */
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  gap: 20px;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

export const AboutImage = styled.img`
  width: 100%;
  height: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adds a shadow to the image */

`;

export const MissionStatement = styled.div`
  background-color: ${colors.lightGray};
  padding: 20px;
  margin: 40px 0;
  text-align: center;
  color: ${colors.darkGray};

    @media (max-width: 768px) {
    text-align: left; /* Align text to the left */
    padding: 0 10px;  /* Add padding to the sides */
  }
`;

export const VisionStatement = styled.div`
  background-color: ${colors.lightGray};
  padding: 20px;
  margin: 40px 0;
  text-align: center;
  color: ${colors.darkGray};

    @media (max-width: 768px) {
    text-align: left; /* Align text to the left */
    padding: 0 10px;  /* Add padding to the sides */
  }
`;

export const ValuesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 40px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Value = styled.div`
  flex: 1;
  padding: 20px;
  text-align: center;
  color: ${colors.darkGray};

    @media (max-width: 768px) {
    text-align: left; /* Align text to the left */
    padding: 0 10px;  /* Add padding to the sides */
  }
`;

export const TeamContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 40px 0;
  color: ${colors.darkGray};

    @media (max-width: 768px) {
    text-align: left; /* Align text to the left */
    padding: 0 10px;  /* Add padding to the sides */
  }
`;

export const CTASection = styled.div`
  background-color: ${colors.lightBlue};
  color: ${colors.darkGray};
  text-align: center;
  padding: 20px;
  margin: 40px 0;
`;

export const CTASectionLink = styled(Link)`
  color: ${colors.darkGray};
  text-decoration: none;
  position: relative;
  padding: 5px 0;
  text-align: center;

  &:hover {
    color: ${colors.white};
  }
`