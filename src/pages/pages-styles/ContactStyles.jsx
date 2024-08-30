import styled from 'styled-components';
import colors from '../.././helper-components/Color'


export const ContactPageContainer = styled.div`
  width: 100%;
  max-width: 1060px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Header = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: ${colors.darkGray};
  text-align: left;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    text-align: center; // Center align on mobile
    font-size: 28px; // Adjust font size for better fit on smaller screens
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  margin-bottom: 40px;
`;

export const FormAndSocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

export const FormContainer = styled.div`
  flex: 1;
  background-color: #eaeaea;
  padding: 30px;
  margin-right: 20px;

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;

    input, textarea {
      padding: 12px 16px;
      font-size: 16px;
      border: 1px solid #ccc;  // Light border
      border-radius: 4px;  // Rounded corners for inputs
      background-color: ${colors.white};
      transition: border-color 0.3s ease;  // Smooth transition for border color

      &:focus {
        border-color: #007bff;  // Focus color for inputs
        outline: none;  // Remove default focus outline
      }
    }

    textarea {
      resize: vertical;  // Allow vertical resizing only
      max-height: 100px;  // Minimum height for better usability
    }

    button {
      padding: 12px 24px;
      background-color: ${colors.lightBlue};
      color: ${colors.white};
      border: none;
      border-radius: 4px;  // Rounded corners for the button
      cursor: pointer;
      font-size: 16px;
      transition: background-color 0.3s ease, transform 0.2s ease;  // Smooth transitions

      &:hover {
        background-color: ${colors.gray};
      }

      &:active {
        transform: scale(0.98);  // Subtle click effect
      }
    }
  }

  @media (max-width: 768px) {
    margin-right: 0;
    padding: 20px;  // Adjust padding for smaller screens
  }
`;

export const SocialContainer = styled.div`
  flex: 0.3;
  background-color: #eaeaea;
  padding: 20px;
  text-align: center;

  a {
    margin: 0 10px;
    color: ${colors.darkGray};
    text-decoration: none;

    &:hover {
      color: ${colors.gray};
    }
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const BranchesContainer = styled.div`
  background-color: #eaeaea;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  text-align: center;

  .branch {
    flex: 1;
    margin-right: 20px;

    h3 {
      margin: 0 0 5px 0;
      color: ${colors.darkGray};
    }
    p {
      margin: 0 0 5px 0;
      color: ${colors.gray};
    }
  }

  .branch:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 10px;

    .branch {
      margin-right: 0;
      margin-bottom: 20px;
    }

    .branch:last-child {
      margin-bottom: 0;
    }
  }
`;
