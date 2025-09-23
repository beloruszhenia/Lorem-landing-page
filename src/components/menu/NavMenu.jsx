import React from 'react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { useMenu } from '../../context/MenuContext';
import MenuItem from './MenuItem';

const NavMenu = () => {
  const { items, mobileOpen, toggleMobile, rootRef } = useMenu();

  return (
    <>
      {/* Desktop Navigation - Always rendered on xl+ screens */}
      <nav className="hidden xl:flex" ref={rootRef}>
        <ul className="flex items-center space-x-6 list-none m-0 p-0 relative">
          {items.map(item => (
            <MenuItem key={item._key} item={item} depth={0} />
          ))}
        </ul>
      </nav>

      {/* Mobile Toggle Button - Always rendered on mobile */}
      <button
        className="xl:hidden text-nav-default p-2 z-50"
        aria-label="Toggle menu"
        aria-expanded={mobileOpen}
        aria-controls="mobile-nav"
        onClick={toggleMobile}
      >
        {mobileOpen ? (
          <XMarkIcon className="w-8 h-8" />
        ) : (
          <Bars3Icon className="w-8 h-8" />
        )}
      </button>

      {/* Mobile Navigation - Pure conditional rendering */}
      {mobileOpen && (
        <nav id="mobile-nav" aria-label="Mobile navigation" className="xl:hidden absolute top-full left-0 right-0 z-40" ref={rootRef}>
          {/* Backdrop overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 -z-10"
            onClick={toggleMobile}
          />
          
          {/* Mobile menu */}
          <ul className="mx-5 mt-2 mb-5 bg-white rounded-lg shadow-xl p-3 space-y-2 overflow-y-auto max-h-[80vh] list-none m-0">          
            {items.map(item => (
              <MenuItem key={item._key} item={item} depth={0} />
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default NavMenu;
