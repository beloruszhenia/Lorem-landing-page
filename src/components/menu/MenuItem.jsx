import React from 'react';
import { useMenu } from '../../context/MenuContext';

const MenuItem = ({ item, depth = 0 }) => {
  const { openItems, toggleItem, closeAll, mobileOpen } = useMenu();
  const isDropdown = item.type === 'dropdown';
  const isOpen = openItems.has(item._key);

  const handleClick = (e) => {
    if (isDropdown) {
      e.preventDefault();
      toggleItem(item._key, { level: item.level });
    } else if (mobileOpen) {
      closeAll();
    }
  };

  // Base link target (scroll or href)
  const href = item.href || (item.target ? `#${item.target}` : '#');

  return (
    <li className={`relative group ${isDropdown ? 'has-dropdown' : ''}`}>      
      <a
        href={href}
        onClick={handleClick}
        className={`flex items-center px-4 py-2 xl:px-3 xl:py-4 text-gray-700 xl:text-white hover:text-blue-500 transition-colors duration-300 no-underline ${
          isDropdown ? 'cursor-pointer select-none' : ''
        }`}
      >
        <span className="whitespace-nowrap">{item.label}</span>
        {isDropdown && (
          <i
            className={`bi ml-1 text-xs transition-transform duration-300 ${
              isOpen ? 'bi-chevron-up rotate-180' : 'bi-chevron-down'
            }`}
          />
        )}
      </a>

      {/* Desktop dropdown panel */}
      {isDropdown && item.items && depth === 0 && (
        <div className="hidden xl:block">
          {/* Panel injected separately by NavMenu for better layering */}
        </div>
      )}

      {/* Mobile nested list */}
      {isDropdown && item.items && (
        <ul className={`xl:hidden ml-4 mt-1 border-l border-gray-200 pl-3 space-y-1 ${isOpen ? 'block' : 'hidden'}`}>
          {item.items.map(child => (
            <li key={child._key}>
              {child.type === 'dropdown' ? (
                <MenuItem item={child} depth={depth + 1} />
              ) : (
                <a
                  href={child.href || (child.target ? `#${child.target}` : '#')}
                  className="block py-1 text-sm text-gray-700 hover:text-blue-500"
                >
                  {child.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;
