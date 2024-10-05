import { useState, useEffect } from 'react';

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  let lastScrollY = 0; // Initialize lastScrollY

  useEffect(() => {
    if (typeof window === 'undefined') return; // Ensure the window is available

    lastScrollY = window.scrollY; // Use scrollY instead of pageYOffset

    const updateScrollDirection = () => {
      const scrollY = window.scrollY; // Use scrollY here as well
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      if (direction !== scrollDirection) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener('scroll', updateScrollDirection);

    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, [scrollDirection]); // Make sure the effect runs when scrollDirection changes

  return scrollDirection;
};

export default useScrollDirection;
