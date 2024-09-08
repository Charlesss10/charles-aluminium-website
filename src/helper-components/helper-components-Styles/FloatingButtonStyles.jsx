import styled, { css } from 'styled-components';
import colors from '../Color';
import { keyframes } from 'styled-components';

export const slideUp = keyframes`
  0% {
    transform: translateY(100%); // Start from off-screen (below the view)
    opacity: 0; // Invisible at the start
  }
  100% {
    transform: translateY(0); // End at the original position
    opacity: 1; // Fully visible
  }
`;

const slideDown = keyframes`
  0% {
    transform: translateY(0); // Start at the original position
    opacity: 1; // Fully visible at the start
  }
  100% {
    transform: translateY(100%); // Slide down off the screen
    opacity: 0; // Become invisible
  }
`;

export const Button = styled.button`
  position: fixed;
  bottom: 40px;
  right: 20px;
  background-color: ${colors.lightBlue};
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: opacity 0.3s ease;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease, opacity 0.3s ease;

  ${props => 
// @ts-ignore
    props.show ? css`
    animation: ${slideUp} 0.5s ease forwards;
  ` : css`
    animation: ${slideDown} 0.5s ease forwards;
  `};
`;