import styled from 'styled-components';
import colors from '../../helper-components/Color';
import fonts from '../../helper-components/Font';
import dimensions from '../../helper-components/Dimension';

export const PageHeaderOuterContainer = styled.div`
  background-color: ${colors.footerBlack};
  margin-top: 0;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  margin-bottom: 10px;
  box-sizing: border-box;
`;

export const PageHeader = styled.h2`
  font-family: ${fonts.mainFont};
  color: ${colors.lightGray};
  font-size: 32px;
  max-width: ${dimensions.pageDimension};
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const ServicesPageContainer = styled.div`
  font-family: ${fonts.mainFont};
  width: 100%;
  max-width: ${dimensions.pageDimension};
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

export const IntroContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: ${colors.darkGray};
  margin-bottom: 40px;
  gap: 20px;
  justify-content: space-between; /* Ensures spacing between the columns */

   @media (max-width: 768px) {
    gap: 10px;
    flex-direction: column;
    align-items: left;
  }
`;

export const IntroText = styled.div`
  flex: 1; /* Takes up half the width of the container */
  text-align: left;
  line-height: 1.5;

   @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  padding-left: 0;

  li {
    position: relative;
    padding-left: 25px;
    margin-bottom: 10px;

    &::before {
      content: '✔';
      color: ${colors.lightBlue};
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  @media (max-width: 768px) {
    li {
    &::before {
    color: ${colors.lightBlue};
    }
  }
}
`;

export const IntroImageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 30px;

   @media (max-width: 768px) {
    margin-top: 0;
    width: 100%;
    align-items: center;
  }
`;

export const IntroImage = styled.img`
  width: 100%;
  height: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adds a shadow to the image */
`;

export const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 10px;
`;

export const ServiceItem = styled.div`
  overflow: hidden;
  text-align: center;

  img {
    width: 200px;
    height: 130px;
  }

  h3 {
    margin: 10px 0;
    font-size: 1.1rem;
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
  margin-bottom: 20px;

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
