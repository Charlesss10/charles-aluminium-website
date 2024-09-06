import styled from 'styled-components';
import colors from '../.././helper-components/Color'
import fonts from '../../helper-components/Font';

export const PageHeaderOuterContainer = styled.h2`
  background-color: ${colors.footerBlack};
  margin-top: 0;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  margin-bottom: 10px;
  box-sizing: border-box;
`;

export const PageHeader = styled.h2`
  color: ${colors.lightGray};
  font-family: ${fonts.font1};
  font-size: 32px;
  max-width: 1060px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const AboutPageContainer = styled.div`
  font-family: ${fonts.font1};
  width: 100%;
  max-width: 1060px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

export const WhoWeAreContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: ${colors.darkGray};
  background-color: #f9f9f9;
  padding: 20px;
  gap: 20px;
  margin-bottom: 20px;
  justify-content: space-between; /* Ensures spacing between the columns */

   @media (max-width: 768px) {
    flex-direction: column;
    align-items: left;
  }
`;

export const WhoWeAreText = styled.div`
  flex: 1; /* Takes up half the width of the container */
  text-align: left;
  line-height: 1.5;

   @media (max-width: 768px) {
    width: 100%;
  }
`;

export const WhoWeAreImageContainer = styled.div`
  flex: 1; /* Takes up half the width of the container */
  display: flex;
  flex-direction: column;
  margin-top: 30px;
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
  line-height: 1.5;
  color: ${colors.darkGray};
  background-color: #f9f9f9;
  padding: 20px;
  margin-bottom: 20px;
`;

export const VisionStatement = styled.div`
  line-height: 1.5;
  color: ${colors.darkGray};
  background-color: #f9f9f9;
  padding: 20px;
  margin-bottom: 20px;
`;

export const ValuesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;

  h2 {
    grid-template-columns: 0;
  }

   @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const ValuesOuterContainer = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
`

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
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, rgba(72, 209, 204, 0.3), rgba(255, 255, 255, 0.8));
  color: ${colors.darkGray};
  text-align: center;
  align-items: center;
  padding: 40px 20px;
  margin: 50px 0;

  @media (max-width: 768px) {
   display: grid;
  }
`;

export const CTASectionLink = styled.a`
  color: ${colors.darkGray};
  text-decoration: none;
  position: relative;
  padding: 10px 0;
  text-align: center;
  transition: color 0.3s ease, border-color 0.3s ease;
  

  &:hover {
    color: ${colors.lightBlue};
    border-color: ${colors.lightBlue};
  }

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: ${colors.lightBlue};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;
