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
  line-height: 1.5;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const AboutImageContainer = styled.div`
  flex: 1; /* Takes up half the width of the container */
  display: flex;
  flex-direction: column;
  margin-top: 22px;
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
  background-color: rgba(191, 242, 241, 0.2);
  padding: 20px;
  margin: 40px 0;
  text-align: center;
  line-height: 1.5;
  color: ${colors.darkGray};

    @media (max-width: 768px) {
    text-align: center; /* Align text to the left */
    padding: 10px 30px;  /* Add padding to the sides */
  }
`;

export const VisionStatement = styled.div`
  background-color: rgba(191, 242, 241, 0.2);
  padding: 20px;
  margin: 40px 0;
  text-align: center;
  line-height: 1.5;
  color: ${colors.darkGray};

    @media (max-width: 768px) {
    text-align: center; /* Align text to the left */
    padding: 10px 30px;  /* Add padding to the sides */
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
  line-height: 1.5;
  color: ${colors.darkGray};

    @media (max-width: 768px) {
    text-align: left; /* Align text to the left */
    padding: 0 10px;  /* Add padding to the sides */
  }
`;

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;

  img {
    width: 150px; /* Adjust the size as needed */
    height: auto;
  }

    @media (min-width: 768px) {
    img {
      width: 120px;
    }
  }
`;

export const CTASection = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  color: ${colors.white};
  text-align: center;
  padding: 20px;
  margin: 40px 0;
`;

export const CTASectionLink = styled(Link)`
  color: rgb(240, 240, 240);
  text-decoration: none;
  position: relative;
  padding: 5px 0;
  text-align: center;

  &:hover {
    color: ${colors.gray};
  }
`