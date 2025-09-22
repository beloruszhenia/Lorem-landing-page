import React, { createContext, useContext, useState, useRef, useCallback, useEffect } from 'react';
import { menuConfig } from '../config/menuConfig';

/*
  Menu Context API - Pure Conditional Rendering Architecture
  - openItems: Set of open dropdown item ids (supports multi-level)
  - mobileOpen: boolean mobile nav state
  - isDropdownVisible(key): check if dropdown should be rendered
  - toggleItem(id): open/close dropdown (auto-close siblings at same level)
  - closeAll(): close all dropdowns
  - toggleMobile(): toggle mobile menu
  - rootRef: root nav ref for outside click detection
*/

const MenuContext = createContext(null);
export const useMenu = () => useContext(MenuContext);

export const MenuProvider = ({ children }) => {
  const [openItems, setOpenItems] = useState(new Set());
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const rootRef = useRef(null);

  const closeAll = useCallback(() => {
    setOpenItems(new Set());
  }, []);

  const closeOnLinkClick = useCallback(() => {
    // Close all dropdowns when clicking on a regular link
    setOpenItems(new Set());
    // Also close mobile menu if open
    setMobileOpen(false);
  }, []);

  const updateActiveSection = useCallback((sectionId) => {
    setActiveSection(sectionId);
  }, []);

  const toggleMobile = useCallback(() => {
    setMobileOpen(v => !v);
  }, []);

  // Check if dropdown should be visible (pure conditional rendering control)
  const isDropdownVisible = useCallback((itemKey) => {
    return openItems.has(itemKey);
  }, [openItems]);

  const toggleItem = useCallback((id, { level }) => {
    setOpenItems(prev => {
      const next = new Set(prev);
      const key = id;
      
      if (next.has(key)) {
        // Close dropdown if already open
        next.delete(key);
      } else {
        // Close siblings at same level (ids share pattern level:prefix)
        Array.from(next).forEach(existing => {
          if (existing.startsWith(level + ':')) next.delete(existing);
        });
        // Open this dropdown
        next.add(key);
      }
      return next;
    });
  }, []);

  // Normalize menu items to include level-based ids: level:id
  const enhanceItems = (items, level = 0) => items.map(it => ({
    ...it,
    _key: `${level}:${it.id}`,
    level,
    active: it.target === activeSection || it.id === activeSection,
    items: it.items ? enhanceItems(it.items, level + 1) : undefined
  }));

  const items = enhanceItems(menuConfig.menuItems);

  // Outside click & ESC (single listeners)
  useEffect(() => {
    const handleClick = (e) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target)) {
        closeAll();
      }
    };
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        closeAll();
        setMobileOpen(false);
      }
    };
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [closeAll]);

  // Lock body scroll on mobile menu - Pure state-based control
  useEffect(() => {
    if (mobileOpen) {
      // Prevent body scroll when mobile menu is open
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [mobileOpen]);

  // Scroll tracking for active menu item
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuConfig.menuItems
        .filter(item => item.target && item.type === 'link')
        .map(item => ({
          id: item.target,
          element: document.getElementById(item.target)
        }))
        .filter(section => section.element);

      let currentActive = 'hero';
      
      for (const section of sections) {
        const rect = section.element.getBoundingClientRect();
        // Consider section active if it's in the top 50% of viewport
        if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= 0) {
          currentActive = section.id;
        }
      }
      
      setActiveSection(currentActive);
    };

    // Initial check
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const value = {
    items,
    openItems,
    mobileOpen,
    activeSection,
    toggleItem,
    closeAll,
    closeOnLinkClick,
    updateActiveSection,
    toggleMobile,
    rootRef,
    isDropdownVisible,
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
