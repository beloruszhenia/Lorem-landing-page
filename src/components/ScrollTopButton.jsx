import React, { useEffect, useState, useCallback } from 'react';

const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);

  const onScroll = useCallback(() => {
    setVisible(window.scrollY > 300);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed right-4 bottom-4 z-[100] rounded-full shadow-lg transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-brand-accent
        bg-brand-accent text-white w-12 h-12 flex items-center justify-center hover:bg-primary-600 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M12 4.5a.75.75 0 01.53.22l6 6a.75.75 0 11-1.06 1.06L12 6.31 6.53 11.78a.75.75 0 11-1.06-1.06l6-6A.75.75 0 0112 4.5z" clipRule="evenodd" />
        <path d="M12 9a.75.75 0 01.75.75v9.5a.75.75 0 01-1.5 0v-9.5A.75.75 0 0112 9z" />
      </svg>
    </button>
  );
};

export default ScrollTopButton;


