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
      if (!event.target.closest('.dropdown')) {
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
      const toggle = document.querySelector('.mobile-nav-toggle');
      
      if (isMobileMenuOpen && nav && !nav.contains(event.target) && 
          toggle && !toggle.contains(event.target)) {
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
        <li key={item.id}>
          <a 
            href={item.href} 
            className={`text-decoration-none ${item.active ? 'active' : ''}`}
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
      <li key={item.id}>
        <a 
          href={`#${item.target}`} 
          className={`text-decoration-none ${item.active ? 'active' : ''}`}
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
      <li key={item.id} className={`dropdown position-relative ${isOpen ? 'show' : ''}`}>
        <a 
          href="#" 
          className={isMainDropdown ? "text-decoration-none d-flex align-items-center" : "dropdown-item d-flex align-items-center"}
          onClick={handleClick}
        >
          <span>{item.label}</span> 
          <i className={`bi ${isOpen ? 'bi-chevron-up' : 'bi-chevron-down'} toggle-dropdown ms-auto`}></i>
        </a>
        <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
          {item.items.map((subItem) => (
            subItem.type === 'dropdown' 
              ? renderDropdownItem(subItem)
              : <li key={subItem.id}>
                  <a 
                    href={subItem.href} 
                    className="dropdown-item"
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
      className={`header d-flex align-items-center fixed-top position-fixed w-100 ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <a href="#" className="logo d-flex align-items-center me-auto text-decoration-none">
          <h1 className="sitename mb-0">{siteName}</h1>
        </a>

        <nav id="navmenu" className={`navmenu ${isMobileMenuOpen ? 'navmenu-active' : ''}`}>
          <ul className={`list-unstyled mb-0 ${isMobileMenuOpen ? 'd-block' : ''}`}>
            {menuItems.map(renderMenuItem)}
          </ul>
          <i 
            className={`mobile-nav-toggle d-xl-none bi ${isMobileMenuOpen ? 'bi-x' : 'bi-list'}`}
            onClick={toggleMobileMenu}
          ></i>
        </nav>

        <a 
          className="btn-getstarted text-decoration-none" 
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
