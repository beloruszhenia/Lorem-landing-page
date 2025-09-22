import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useMenu } from '../../context/MenuContext';
import DropdownPanel from './DropdownPanel';

const MenuItem = ({ item, depth = 0, skipWrapper = false }) => {
  const { isDropdownVisible, toggleItem, closeOnLinkClick, mobileOpen } = useMenu();
  const isDropdown = item.type === 'dropdown';
  const isOpen = isDropdownVisible(item._key);

  const handleClick = (e) => {
    if (isDropdown) {
      e.preventDefault();
      toggleItem(item._key, { level: item.level });
    } else {
      // Close all dropdowns when clicking on regular link
      closeOnLinkClick();
    }
  };

  // Base link target (scroll or href)
  const href = item.href || (item.target ? `#${item.target}` : '#');

  const content = (
    <>
      <a
        href={href}
        onClick={handleClick}
        className={`flex items-center px-4 py-2 xl:px-3 xl:py-4 text-gray-700 xl:text-nav-default no-underline
          ${isDropdown ? 'cursor-pointer select-none' : ''}
          ${item.active ? 'xl:text-nav-hover font-bold' : ''}`}
      >
        <span className="whitespace-nowrap">{item.label}</span>
        {isDropdown && (
          <ChevronDownIcon
            className={`ml-1 w-4 h-4 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        )}
      </a>

      {/* Desktop dropdown panel - Pure conditional rendering */}
      {isDropdown && item.items && depth === 0 && isOpen && (
        <div className="absolute left-0 top-full mt-2 z-50">
          <DropdownPanel item={item} />
        </div>
      )}

      {/* Mobile nested list - Pure conditional rendering */}
      {isDropdown && item.items && isOpen && (
        <ul className="xl:hidden ml-4 mt-1 border-l border-gray-200 pl-3 space-y-1">
          {item.items.map(child => (
            <li key={child._key}>
              {child.type === 'dropdown' ? (
                <MenuItem item={child} depth={depth + 1} skipWrapper={true} />
              ) : (
                <a
                  href={child.href || (child.target ? `#${child.target}` : '#')}
                  className="block py-1 text-sm text-gray-700"
                  onClick={closeOnLinkClick}
                >
                  {child.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );

  if (skipWrapper) {
    return content;
  }

  return (
    <li className={`relative group ${isDropdown ? 'has-dropdown' : ''}`}>      
      {content}
    </li>
  );
};

export default MenuItem;
