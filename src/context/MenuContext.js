import React, { createContext, useContext, useState, useRef, useCallback, useEffect } from 'react';
import { menuConfig } from '../config/menuConfig';

/*
  Menu Context API
  - openItems: Set of open dropdown item ids (supports multi-level)
  - mobileOpen: boolean mobile nav state
  - toggleItem(id): open/close dropdown (auto-close siblings at same level)
  - closeAll(): close all dropdowns
  - toggleMobile(): toggle mobile menu
  - registerRoot(ref): root nav ref for outside click detection
*/

const MenuContext = createContext(null);
export const useMenu = () => useContext(MenuContext);

export const MenuProvider = ({ children }) => {
  const [openItems, setOpenItems] = useState(new Set());
  const [mobileOpen, setMobileOpen] = useState(false);
  const rootRef = useRef(null);

  const closeAll = useCallback(() => {
    setOpenItems(new Set());
  }, []);

  const toggleMobile = useCallback(() => {
    setMobileOpen(v => !v);
  }, []);

  const toggleItem = useCallback((id, { level }) => {
    setOpenItems(prev => {
      const next = new Set(prev);
      const key = id;
      if (next.has(key)) {
        next.delete(key);
      } else {
        // Close siblings at same level (ids share pattern level:prefix)
        Array.from(next).forEach(existing => {
          if (existing.startsWith(level + ':')) next.delete(existing);
        });
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

  // Lock body scroll on mobile menu
  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add('mobile-nav-active');
    } else {
      document.body.classList.remove('mobile-nav-active');
    }
  }, [mobileOpen]);

  const value = {
    items,
    openItems,
    mobileOpen,
    toggleItem,
    closeAll,
    toggleMobile,
    rootRef,
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
