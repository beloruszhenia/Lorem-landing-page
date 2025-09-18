import React from 'react';
import { MenuProvider } from '../context/MenuContext';
import NavMenu from './menu/NavMenu';
import { menuConfig } from '../config/menuConfig';
import { useScroll } from '../hooks/useScroll';

const Header = () => {
  const isScrolled = useScroll(100);
  const { siteName, ctaButton } = menuConfig;

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <MenuProvider>
      <header
        id="header"
        className={`header fixed top-0 left-0 right-0 z-50 flex items-center w-full px-4 py-3 transition-all duration-500 ${
          isScrolled ? 'bg-brand-heading/80 backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between max-w-7xl relative">
          <a href="#" className="flex items-center no-underline">
            <h1 className="text-2xl md:text-3xl font-medium text-nav-default tracking-wider uppercase m-0 font-heading">
              {siteName}
            </h1>
          </a>

          {/* Navigation */}
          <NavMenu />

          {/* CTA Button (desktop) */}
          <a
            className="hidden xl:block bg-brand-accent hover:bg-primary-600 text-brand-contrast px-6 py-2 rounded-full text-sm font-medium 
            transition-colors duration-300 no-underline ml-8"
            href={`#${ctaButton.target}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(ctaButton.target);
            }}
          >
            {ctaButton.text}
          </a>
        </div>
      </header>
    </MenuProvider>
  );
};

export default Header;
