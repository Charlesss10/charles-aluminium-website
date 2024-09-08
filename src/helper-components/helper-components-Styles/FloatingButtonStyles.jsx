import styled from 'styled-components';
import colors from '../Color';

export const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: ${colors.lightBlue};
  color: white;
  border: none;
  border-radius: 20%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  cursor: pointer;
  display: ${props => (props.
// @ts-ignore
  show ? 'block' : 'none')};  
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: opacity 0.3s ease;
  margin-bottom: 20px;
  text-align: center;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.05);
  }
`;