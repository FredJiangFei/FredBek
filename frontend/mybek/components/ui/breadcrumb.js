import React from 'react';
import ChevronRightIcon from '../icons/chevron-right';

function Breadcrumb() {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <a
            href="#"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            Home
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRightIcon />
            <a
              href="#"
              className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
            >
              Projects
            </a>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <ChevronRightIcon />
            <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
              Flowbite
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;
