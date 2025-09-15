import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

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

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown')) {
        setActiveDropdown(null);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    document.body.classList.remove('mobile-nav-active');
  };

  return (
    <header 
      id="header" 
      className={`header d-flex align-items-center fixed-top position-fixed w-100 ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <a href="#" className="logo d-flex align-items-center me-auto text-decoration-none">
          <h1 className="sitename mb-0">LOREM</h1>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul className={`list-unstyled mb-0 ${isMobileMenuOpen ? 'd-block' : ''}`}>
            <li><a href="#hero" className="active text-decoration-none" onClick={() => scrollToSection('hero')}>Home</a></li>
            <li><a href="#about" className="text-decoration-none" onClick={() => scrollToSection('about')}>About</a></li>
            <li><a href="#services" className="text-decoration-none" onClick={() => scrollToSection('services')}>Services</a></li>
            <li><a href="#portfolio" className="text-decoration-none" onClick={() => scrollToSection('portfolio')}>Portfolio</a></li>
            <li><a href="#team" className="text-decoration-none" onClick={() => scrollToSection('team')}>Team</a></li>
            <li><a href="#pricing" className="text-decoration-none" onClick={() => scrollToSection('pricing')}>Pricing</a></li>
            <li><a href="#recent-blog-postst" className="text-decoration-none" onClick={() => scrollToSection('recent-blog-postst')}>Blog</a></li>
            <li className="dropdown position-relative">
              <a href="#" className="text-decoration-none" onClick={(e) => { e.preventDefault(); toggleDropdown(0); }}>
                <span>Dropdown</span> 
                <i className={`bi ${activeDropdown === 0 ? 'bi-chevron-up' : 'bi-chevron-down'} toggle-dropdown ms-1`}></i>
              </a>
              <ul className={`dropdown-menu position-absolute ${activeDropdown === 0 ? 'show' : ''}`}>
                <li><a href="#" className="dropdown-item">Dropdown 1</a></li>
                <li className="dropdown position-relative">
                  <a href="#" className="dropdown-item" onClick={(e) => { e.preventDefault(); toggleDropdown(1); }}>
                    <span>Deep Dropdown</span> 
                    <i className={`bi ${activeDropdown === 1 ? 'bi-chevron-up' : 'bi-chevron-down'} toggle-dropdown ms-1`}></i>
                  </a>
                  <ul className={`dropdown-menu position-absolute ${activeDropdown === 1 ? 'show' : ''}`}>
                    <li><a href="#" className="dropdown-item">Deep Dropdown 1</a></li>
                    <li><a href="#" className="dropdown-item">Deep Dropdown 2</a></li>
                    <li><a href="#" className="dropdown-item">Deep Dropdown 3</a></li>
                    <li><a href="#" className="dropdown-item">Deep Dropdown 4</a></li>
                    <li><a href="#" className="dropdown-item">Deep Dropdown 5</a></li>
                  </ul>
                </li>
                <li><a href="#" className="dropdown-item">Dropdown 2</a></li>
                <li><a href="#" className="dropdown-item">Dropdown 3</a></li>
                <li><a href="#" className="dropdown-item">Dropdown 4</a></li>
              </ul>
            </li>
            <li><a href="#contact" className="text-decoration-none" onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
          <i 
            className={`mobile-nav-toggle d-xl-none bi ${isMobileMenuOpen ? 'bi-x' : 'bi-list'}`}
            onClick={toggleMobileMenu}
          ></i>
        </nav>

        <a className="btn-getstarted text-decoration-none" href="#about" onClick={() => scrollToSection('about')}>Get Started</a>
      </div>
    </header>
  );
};

export default Header;
