import styled from 'styled-components';
import colors from '../.././helper-components/Color'
import { Link } from 'react-router-dom';

export const AboutPageContainer = styled.div`
  width: 100%;
  max-width: 1060px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;

   @media (max-width: 768px) {
    padding: 50px;
  }
`;

export const WhoWeAreContainer = styled.section`
  margin: 0 auto;
`;

export const WhoWeAreTitle = styled.h1`
  color: ${colors.darkGray};
  font-size: 32px;
  margin-bottom: 20px;

   @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const WhoWeAreContent = styled.div`
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

export const WhoWeAreText = styled.div`
  flex: 1; /* Takes up half the width of the container */
  text-align: left; /* Align text to the left */
  line-height: 1.5;

   @media (max-width: 768px) {
    width: 100%;
  }
`;

export const WhoWeAreImageContainer = styled.div`
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

export const WhoWeAreImage = styled.img`
  width: 100%;
  height: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adds a shadow to the image */
`;

export const MissionStatement = styled.div`
  margin: 40px 0;
  line-height: 1.5;
  color: ${colors.darkGray};
`;

export const VisionStatement = styled.div`
  margin: 40px 0;
  line-height: 1.5;
  color: ${colors.darkGray};
`;

export const ValuesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;

   @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Value = styled.div`
  flex: 1;
  line-height: 1.5;
  color: ${colors.darkGray};
  margin-right: 40px ;

   @media (max-width: 768px) {
    text-align: left; /* Align text to the left */
  }
`;

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
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