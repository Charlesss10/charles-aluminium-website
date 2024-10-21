import styled from 'styled-components';
import colors from '../.././helper-components/Color'
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
  color: ${colors.lightGray};
  font-family: ${fonts.mainFont};
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

export const ContactPageContainer = styled.div`
  font-family: ${fonts.mainFont};
  width: 100%;
  max-width: ${dimensions.pageDimension};
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;

  h2{
    border-bottom: 2px solid ${colors.lightBlue};
    padding-bottom: 10px;
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  background-color: #f9f9f9;
`;

export const ContactDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 40px;
  margin: 50px 0;
  margin-bottom: 20px;
  
  .branch{
    background-color: #f9f9f9;
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