import styled from 'styled-components';
import colors from '../../helper-components/Color';

export const FloatingLink = styled.a`
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
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease, opacity 0.3s ease;
  
  /* Hide initially if $show is false */
  opacity: ${props => 
  // @ts-ignore
  (props.$show ? '1' : '0')};
  pointer-events: ${props => 
  // @ts-ignore
  (props.$show ? 'auto' : 'none')}; /* Disable clicks when hidden */
  transform: translateY(${props => 
  // @ts-ignore
  (props.$show ? '0' : '100%')});
`;