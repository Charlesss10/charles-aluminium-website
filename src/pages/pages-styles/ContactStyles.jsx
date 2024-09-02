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

export const MapContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  margin-top: 50px;
`;

export const ContactDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;


  .branch{
    background-color: #f9f9f9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;

    h2 {
    color: ${colors.darkGray};
    }

    p {
    line-height: 1.5;
    color: ${colors.gray};
    }
  };

  .reachOut{
    background-color: #f9f9f9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;

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
    background-color: #f9f9f9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;

    h2 {
    color: ${colors.darkGray};
    }

    a {
    margin-right: 20px;
  };

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;