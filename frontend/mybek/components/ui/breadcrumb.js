import React, { Fragment, useEffect, useState } from 'react';
import ChevronRightIcon from '../icons/chevron-right';
import Link from 'next/link';

function Breadcrumb({ items }) {
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  useEffect(() => {
    getBreadcrumb(items);
  }, [items]);

  const getBreadcrumb = (items) => {
    let breadcrumbs = [];
    items.map((item) => {
      const parentPath = breadcrumbs.map((x) => x.name).join('/');
      breadcrumbs.push({
        name: item,
        route: item,
        path: `${parentPath}/${item}`,
      });
    });
    setBreadcrumbs(breadcrumbs);
  };

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-2">
        <li className="inline-flex items-center">
          <Link href={`/`} className='text-lg text-gray-500 hover:text-primary'>
            Home
          </Link>
        </li>
        {breadcrumbs.map((item, index) => (
          <Fragment key={item + index}>
            <ChevronRightIcon />
            <li className={`${index === breadcrumbs.length - 1 ? '' :'text-gray-500'} text-lg inline-flex items-center hover:text-primary`}>
              <Link href={item.path}>
                {item.name}
              </Link>
            </li>
          </Fragment>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
