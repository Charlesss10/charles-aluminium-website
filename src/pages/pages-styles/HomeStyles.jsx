import styled from 'styled-components';
import colors from '../.././helper-components/Color'
import fonts from '../../helper-components/Font';
import dimensions from '../../helper-components/Dimension';

export const HomePageContainer = styled.div`
  font-family: ${fonts.mainFont};
  color: ${colors.darkGray};
  width: 100%;
  max-width: ${dimensions.pageDimension};
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

export const WhoWeAreContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 40px;
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

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
`;

export const ProductItem = styled.div`
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

export const ProductLink = styled.a`
  color: rgb(240, 240, 240);
  text-decoration: none;
  position: relative;
  padding: 5px 0;
`

export const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
`;

export const ServiceItem = styled.div`
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


