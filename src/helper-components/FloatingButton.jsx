import { useState, useEffect } from 'react';
import styled from 'styled-components';
import colors from './Color';

const Button = styled.button`
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
  display: ${props => (props.show ? 'block' : 'none')};  
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: opacity 0.3s ease;
  margin-bottom: 20px;

  &:hover {
    transform: scale(1.05);
  }
`;

const FloatingButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust this value as needed
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button 
// @ts-ignore
    show={showButton} onClick={scrollToTop}>
      <i className="fas fa-chevron-up"></i>
      </Button>
  );
};

export default FloatingButton;
