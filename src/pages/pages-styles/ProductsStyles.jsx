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
  background-color: #f9f9f9;
  color: ${colors.darkGray};
  font-size: 32px;
  padding: 40px;
  margin-top: 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    margin-top: -20px;
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

export const ProductLink = styled(Link)`
  color: rgb(240, 240, 240);
  text-decoration: none;
  position: relative;
  padding: 5px 0;
`

export const CTASection = styled.div`
  display: grid;
  background: linear-gradient(135deg, rgba(72, 209, 204, 0.3), rgba(255, 255, 255, 0.8));
  color: ${colors.darkGray};
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  text-align: center;
  padding: 40px 20px;
  margin: 50px 0;
`;

export const CTASectionLink = styled(Link)`
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
