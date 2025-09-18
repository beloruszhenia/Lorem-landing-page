import React from 'react';
import { useMenu } from '../../context/MenuContext';
import MenuItem from './MenuItem';
import DropdownPanel from './DropdownPanel';

const NavMenu = () => {
  const { items, mobileOpen, toggleMobile, rootRef, openItems } = useMenu();

  return (
    <>
      {/* Desktop */}
      <nav className="hidden xl:flex" ref={rootRef}>
        <ul className="flex items-center space-x-6 list-none m-0 p-0 relative">
          {items.map(item => (
            <React.Fragment key={item._key}>
              <MenuItem item={item} depth={0} />
              {/* Inject dropdown panel right after top-level item for absolute positioning */}
              {item.type === 'dropdown' && item.items && (
                <div className="absolute" style={{ pointerEvents: 'none' }}>
                  {openItems.has(item._key) && (
                    <div style={{ pointerEvents: 'auto' }}>
                      <DropdownPanel item={item} />
                    </div>
                  )}
                </div>
              )}
            </React.Fragment>
          ))}
        </ul>
      </nav>

      {/* Mobile */}
      <button
        className="xl:hidden text-nav-default text-3xl p-2 z-50"
        aria-label="Toggle menu"
        onClick={toggleMobile}
      >
        <i className={`bi ${mobileOpen ? 'bi-x' : 'bi-list'}`} />
      </button>

      <nav className="xl:hidden absolute top-full left-0 right-0 z-40" ref={rootRef}>
        {/* Backdrop overlay */}
        {mobileOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 -z-10"
            onClick={toggleMobile}
          />
        )}
        
        {/* Mobile menu */}
        <ul 
          className={`${
            mobileOpen
              ? 'mx-5 mt-2 mb-5 bg-white rounded-lg shadow-xl p-3 space-y-2 overflow-y-auto max-h-[80vh]'
              : 'hidden'
          } list-none m-0`}
        >          
          {items.map(item => (
            <MenuItem key={item._key} item={item} depth={0} />
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavMenu;
