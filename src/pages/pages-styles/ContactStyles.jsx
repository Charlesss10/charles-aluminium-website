import styled from 'styled-components';
import colors from '../.././helper-components/Color'

export const ContactPageContainer = styled.div`
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
  font-size: 32px;
  font-weight: bold;
  color: ${colors.darkGray};
  text-align: left;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: 40px;
`;

export const ContactDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;

  .branch{
    h2 {
    color: ${colors.darkGray};
  }
    p {
    line-height: 1.5;
    color: ${colors.gray};
    }
  };

  .reachOut{
    h2 {
    color: ${colors.darkGray};
  }
    p {
    display: flex;
    margin: 10px 0;
    color: ${colors.gray};

    a {
    color: ${colors.gray};
    text-decoration: none;

     &:hover {
     color: ${colors.darkGray};
     }
    }
  }

    svg {
      margin-right: 10px;
      color: ${colors.gray};
    }
  };

  .followUs{
    h2 {
    color: ${colors.darkGray};
  }
    a {
    margin-right: 20px;
    color: ${colors.gray};
    text-decoration: none;

    &:hover {
      color: ${colors.darkGray};
    }
  };

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;