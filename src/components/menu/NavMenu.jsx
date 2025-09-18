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

      <nav className="xl:hidden" ref={rootRef}>
        <ul className={`${
          mobileOpen
            ? 'fixed inset-x-5 top-16 bottom-5 bg-white rounded-lg shadow-xl p-3 space-y-2 overflow-y-auto z-50'
            : 'hidden'
        } list-none m-0`}>          
          {items.map(item => (
            <MenuItem key={item._key} item={item} depth={0} />
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavMenu;
