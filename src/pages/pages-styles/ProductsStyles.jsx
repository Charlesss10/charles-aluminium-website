import styled from 'styled-components';
import colors from '../../helper-components/Color';
import { Link } from 'react-router-dom';

export const ProductPageContainer = styled.div`
  width: 100%;
  max-width: 1060px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 50px;
  }
`;

export const PageHeader = styled.h1`
  background-color: rgba(72, 209, 204, 0.3);
  color: ${colors.darkGray};
  font-size: 32px;
  padding: 40px;
  margin-top: 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const Introduction= styled.p`
  margin-bottom: 40px;
  margin-top: 40px;
  color: ${colors.darkGray};
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 60px;
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

export const CTASection = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
export const ProductLink = styled(Link)`
  color: rgb(240, 240, 240);
  text-decoration: none;
  position: relative;
  padding: 5px 0;
`