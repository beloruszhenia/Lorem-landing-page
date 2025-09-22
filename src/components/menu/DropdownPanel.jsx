import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { useMenu } from '../../context/MenuContext';

const DropdownPanel = ({ item }) => {
  const { isDropdownVisible, toggleItem, closeOnLinkClick } = useMenu();

  const handleNestedToggle = (childKey, level) => {
    toggleItem(childKey, { level });
  };

  const handleLinkClick = () => {
    closeOnLinkClick();
  };

  return (
    <ul
      className="bg-white rounded-lg shadow-2xl border border-gray-200 min-w-[220px]"
    >
      {item.items?.map(child => (
        <li key={child._key} className="border-b border-gray-100 last:border-b-0">
          {child.type === 'dropdown' ? (
            <div className="relative">
              {/* Trigger */}
              <button
                type="button"
                className="w-full flex items-center justify-between px-5 py-3 text-gray-700 font-medium"
                onClick={() => handleNestedToggle(child._key, child.level)}
              >
                <span>{child.label}</span>
                <ChevronRightIcon className="w-4 h-4" />
              </button>
              {/* Nested dropdown (flyout) - Pure conditional rendering */}
              {isDropdownVisible(child._key) && (
                <ul className=" absolute left-full top-0 ml-1 bg-white rounded-lg shadow-xl border border-gray-200 min-w-[200px] py-1">
                  {child.items?.map(grand => (
                    <li key={grand._key}>
                      <a
                        href={grand.href || '#'}
                        className="block px-4 py-2 text-sm text-gray-700"
                        onClick={handleLinkClick}
                      >
                        {grand.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <a
              href={child.href || (child.target ? `#${child.target}` : '#')}
              className="block px-5 py-3 text-gray-700 font-medium"
              onClick={handleLinkClick}
            >
              {child.label}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

export default DropdownPanel;
