import { useState, useEffect } from 'react';
import { FloatingLink } from './components-styles/FloatingButtonStyles';
import { FaChevronUp } from 'react-icons/fa';

const FloatingButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

return (
    <FloatingLink
      href="#top"
      // @ts-ignore
      show={showButton ? 'true' : undefined}
      onClick={scrollToTop}>
      <FaChevronUp size={30} />
    </FloatingLink>
  );
};

export default FloatingButton;
