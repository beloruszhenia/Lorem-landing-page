import React, { useState, useEffect } from 'react';
import { menuConfig } from '../config/menuConfig';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mainDropdownOpen, setMainDropdownOpen] = useState(false);
  const [deepDropdownOpen, setDeepDropdownOpen] = useState(false);

  // Використовуємо конфігурацію з окремого файлу
  const { siteName, ctaButton, menuItems } = menuConfig;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.classList.add('mobile-nav-active');
    } else {
      document.body.classList.remove('mobile-nav-active');
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Перевіряємо чи клік не всередині dropdown меню
      if (!event.target.closest('.group')) {
        setMainDropdownOpen(false);
        setDeepDropdownOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Закриття мобільного меню при кліку поза ним
  useEffect(() => {
    const handleClickOutside = (event) => {
      const nav = document.getElementById('navmenu');
      const toggle = event.target.closest('[aria-label="Toggle menu"]');
      
      if (isMobileMenuOpen && nav && !nav.contains(event.target) && !toggle) {
        setIsMobileMenuOpen(false);
        setMainDropdownOpen(false);
        setDeepDropdownOpen(false);
        document.body.classList.remove('mobile-nav-active');
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const handleMainDropdownClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setMainDropdownOpen(!mainDropdownOpen);
    if (!mainDropdownOpen) {
      setDeepDropdownOpen(false); // Закриваємо deep dropdown при відкритті основного
    }
  };

  const handleDeepDropdownClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDeepDropdownOpen(!deepDropdownOpen);
  };

  const handleDropdownItemClick = (href) => {
    if (href && href !== '#') {
      // Для реальних посилань
      window.location.href = href;
    }
    // Закриваємо мобільне меню та dropdown
    setIsMobileMenuOpen(false);
    setMainDropdownOpen(false);
    setDeepDropdownOpen(false);
    document.body.classList.remove('mobile-nav-active');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
    setMainDropdownOpen(false);
    setDeepDropdownOpen(false);
    document.body.classList.remove('mobile-nav-active');
  };

  // Рендер звичайного пункту меню
  const renderMenuItem = (item) => {
    if (item.type === 'dropdown') {
      return renderDropdownItem(item);
    }

    // Зовнішнє посилання
    if (item.type === 'external') {
      return (
        <li key={item.id} className="relative">
          <a 
            href={item.href} 
            className={`block px-4 py-2 xl:px-3 xl:py-4 text-brand-default xl:text-nav-default hover:text-brand-accent transition-colors duration-300 no-underline ${
              item.active ? 'text-brand-accent' : ''
            }`}
            target={item.target || '_self'}
            rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
          >
            {item.label}
          </a>
        </li>
      );
    }

    // Звичайне посилання з прокруткою
    return (
      <li key={item.id} className="relative">
        <a 
          href={`#${item.target}`} 
          className={`block px-4 py-2 xl:px-3 xl:py-4 text-gray-700 xl:text-white hover:text-blue-500 transition-colors duration-300 no-underline ${
            item.active ? 'text-blue-500' : ''
          }`}
          onClick={() => scrollToSection(item.target)}
        >
          {item.label}
        </a>
      </li>
    );
  };

  // Рендер dropdown пункту
  const renderDropdownItem = (item) => {
    const isMainDropdown = item.id === 'dropdown';
    const isDeepDropdown = item.isDeepDropdown === true;
    const isOpen = isMainDropdown ? mainDropdownOpen : (isDeepDropdown ? deepDropdownOpen : false);
    
    let handleClick;
    if (isMainDropdown) {
      handleClick = handleMainDropdownClick;
    } else if (isDeepDropdown) {
      handleClick = handleDeepDropdownClick;
    } else {
      handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
      };
    }

    return (
      <li key={item.id} className={`relative group ${isOpen ? 'dropdown-open' : ''}`}>
        <a 
          href="#" 
          className={`flex items-center justify-between px-4 py-2 xl:px-3 xl:py-4 text-brand-default xl:text-nav-default hover:text-brand-accent transition-colors duration-300 no-underline cursor-pointer`}
          onClick={handleClick}
        >
          <span>{item.label}</span> 
          <i className={`bi ${isOpen ? 'bi-chevron-up' : 'bi-chevron-down'} ml-1 transition-transform duration-300`}></i>
        </a>
        
        {/* Desktop Dropdown */}
        <ul className={`hidden xl:block absolute left-3 top-full mt-2 bg-nav-dropdown-bg rounded-lg shadow-xl border min-w-[200px] overflow-hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          {item.items.map((subItem) => (
            subItem.type === 'dropdown' 
              ? renderDropdownItem(subItem)
              : <li key={subItem.id}>
                  <a 
                    href={subItem.href} 
                    className="block px-4 py-3 text-nav-dropdown hover:text-nav-dropdown-hover hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0 no-underline"
                    onClick={(e) => {
                      if (subItem.href === '#') {
                        e.preventDefault();
                      } else {
                        handleDropdownItemClick(subItem.href);
                      }
                    }}
                  >
                    {subItem.label}
                  </a>
                </li>
          ))}
        </ul>

        {/* Mobile Dropdown */}
        <ul className={`xl:hidden ${isOpen ? 'block' : 'hidden'} ml-4 mt-2 space-y-1`}>
          {item.items.map((subItem) => (
            subItem.type === 'dropdown' 
              ? renderDropdownItem(subItem)
              : <li key={subItem.id}>
                  <a 
                    href={subItem.href} 
                    className="block px-4 py-2 text-sm text-brand-default hover:text-brand-accent transition-colors duration-200 no-underline"
                    onClick={(e) => {
                      if (subItem.href === '#') {
                        e.preventDefault();
                      } else {
                        handleDropdownItemClick(subItem.href);
                      }
                    }}
                  >
                    {subItem.label}
                  </a>
                </li>
          ))}
        </ul>
      </li>
    );
  };

  return (
    <header 
      id="header" 
      className={`fixed top-0 left-0 right-0 z-50 flex items-center w-full px-4 py-3 transition-all duration-500 ${
        isScrolled 
          ? 'bg-brand-heading/80 backdrop-blur-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <a href="#" className="flex items-center no-underline">
          <h1 className="text-2xl md:text-3xl font-medium text-nav-default tracking-wider uppercase m-0 font-heading">
            {siteName}
          </h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex">
          <ul className="flex items-center space-x-6 list-none m-0 p-0">
            {menuItems.map(renderMenuItem)}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <nav 
          id="navmenu" 
          className={`xl:hidden ${isMobileMenuOpen ? 'navmenu-active' : ''}`}
        >
          <ul className={`${
            isMobileMenuOpen 
              ? 'fixed inset-x-5 top-16 bottom-5 bg-white rounded-lg shadow-xl p-2 space-y-1 overflow-y-auto z-50' 
              : 'hidden'
          } list-none m-0`}>
            {menuItems.map(renderMenuItem)}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="xl:hidden text-nav-default text-3xl p-2 z-50"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <i className={`bi ${isMobileMenuOpen ? 'bi-x' : 'bi-list'}`}></i>
        </button>

        {/* CTA Button */}
        <a 
          className="hidden xl:block bg-brand-accent hover:bg-primary-600 text-brand-contrast px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 no-underline ml-8" 
          href={`#${ctaButton.target}`} 
          onClick={() => scrollToSection(ctaButton.target)}
        >
          {ctaButton.text}
        </a>
      </div>
    </header>
  );
};

export default Header;
