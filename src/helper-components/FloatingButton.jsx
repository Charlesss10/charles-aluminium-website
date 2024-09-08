import { useState, useEffect } from 'react';
import { Button } from './helper-components-Styles/FloatingButtonStyles';

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
      {...{ show: showButton }} onClick={scrollToTop}>
      <i className="fas fa-chevron-up"></i>
    </Button>
  );
};

export default FloatingButton;
