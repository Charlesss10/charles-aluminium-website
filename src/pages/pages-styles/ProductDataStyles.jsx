import styled from 'styled-components';
import colors from '../../helper-components/Color';
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

export const ProductPageContainer = styled.div`
  font-family: ${fonts.font1};
  width: 100%;
  max-width: 1060px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: ${colors.darkGray};
  margin-bottom: 20px;
  gap: 20px;
  background-color: #f9f9f9;
  padding: 20px;
  justify-content: space-between; /* Ensures spacing between the columns */

   @media (max-width: 768px) {
    flex-direction: column;
    align-items: left;
  }
`;

export const ProductDescription = styled.div`
  flex: 1; /* Takes up half the width of the container */
  text-align: left;
  line-height: 1.5;

   @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ProductImageContainer = styled.div`
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

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adds a shadow to the image */
`;

export const OtherProductsOuterContainer = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
`

export const OtherProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 10px;
`;

export const OtherProductsItem = styled.div`
  border: 1px solid #ddd;
  overflow: hidden;
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: auto;
  }

  h3 {
    margin: 10px 0;
    font-size: 1.1rem;
    color: #333;
  }
`;

export const OtherProductLink = styled.a`
  color: rgb(240, 240, 240);
  text-decoration: none;
  position: relative;
  padding: 5px 0;
`

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
