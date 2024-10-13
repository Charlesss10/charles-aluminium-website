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

export const IntroductionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  margin-bottom: 40px;
  justify-content: space-between; /* Ensures spacing between the columns */

   @media (max-width: 768px) {
    gap: 10px;
    flex-direction: column;
    align-items: left;
  }
`;

export const AboutUs = styled.div`
  flex: 1;
  text-align: justify;
  line-height: 1.5;
  hyphens: auto;

  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
  }
`;

export const MissionVisionContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  justify-content: space-between; /* Ensures spacing between the columns */

   @media (max-width: 768px) {
    gap: 10px;
    margin-bottom: 10px;
    flex-direction: column;
  }
`
export const MissionStatement = styled.div`
  flex: 1;
  line-height: 1.5;
  text-align: justify;
  hyphens: auto;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

export const VisionStatement = styled.div`
  flex: 1;
  line-height: 1.5;
  text-align: justify;
  hyphens: auto;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  margin-bottom: 60px;
  text-align: justify;
  justify-content: space-between; /* Ensures spacing between the columns */

   @media (max-width: 768px) {
    gap: 10px;
    flex-direction: column;
    align-items: left;
  }
`

export const ProductGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

export const ProductItem = styled.div`
  position: relative;
  border: 1px solid #ddd;
  overflow: hidden;
  text-align: center;
  transition: transform 0.3s;
  background: linear-gradient(135deg, rgba(72, 209, 204, 0.3), rgba(255, 255, 255, 0.8));

  &:hover {
    transform: scale(1.05);
    background: none;

    img {
      opacity: 0.7;
    }
  }

  img {
    border-bottom: 1px solid #ddd;
    width: 100%;
    height: 200px;
    transition: opacity 0.3s ease;
  }

  h3 {
    margin: 10px 0;
    font-size: 1.1rem;
    color: ${colors.darkGray};
  }

  @media (max-width: 768px) {
  img {
    height: 250px;
  }
  }
`;

export const ProductLink = styled.a`
  text-decoration: none;
  position: relative;
  padding: 5px 0;
`

export const CharlesFeltVideo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  video {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;

    &:hover {
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    }
  }
`

export const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
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


