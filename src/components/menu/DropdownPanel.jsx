import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { useMenu } from '../../context/MenuContext';

const DropdownPanel = ({ item }) => {
  const { openItems } = useMenu();
  const isOpen = openItems.has(item._key);

  return (
    <ul
      className={`absolute left-0 top-full mt-2 bg-white rounded-lg shadow-2xl border border-gray-200 min-w-[220px] overflow-hidden z-[1000]
        transition-all duration-300 origin-top
        ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}
        hidden xl:block
      `}
    >
      {item.items?.map(child => (
        <li key={child._key} className="border-b border-gray-100 last:border-b-0">
          {child.type === 'dropdown' ? (
            <div className="relative group">
              {/* Trigger */}
              <button
                type="button"
                className="w-full flex items-center justify-between px-5 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium"
                data-menu-id={child._key}
              >
                <span>{child.label}</span>
                <ChevronRightIcon className="w-4 h-4" />
              </button>
              {/* Nested dropdown (flyout) */}
              <ul className="absolute left-full top-0 ml-1 bg-white rounded-lg shadow-xl border border-gray-200 min-w-[200px] py-1 hidden group-hover:block">
                {child.items?.map(grand => (
                  <li key={grand._key}>
                    <a
                      href={grand.href || '#'}
                      className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                    >
                      {grand.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <a
              href={child.href || (child.target ? `#${child.target}` : '#')}
              className="block px-5 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium"
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
