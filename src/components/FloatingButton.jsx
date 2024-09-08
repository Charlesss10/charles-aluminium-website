import { useState, useEffect } from 'react';
import { FloatingLink } from './components-styles/FloatingButtonStyles';
import { FaChevronUp } from 'react-icons/fa';

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

  const scrollToTop = (e) => {
    e.preventDefault(); // Since it's an `a` tag, prevent the default link behavior
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

return (
    <FloatingLink
      href="#top"
      // @ts-ignore
      show={showButton}
      onClick={scrollToTop}>
      <FaChevronUp size={30} />
    </FloatingLink>
  );
};

export default FloatingButton;
