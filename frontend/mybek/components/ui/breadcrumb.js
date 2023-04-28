import React, { Fragment } from 'react';
import ChevronRightIcon from '../icons/chevron-right';
import Link from 'next/link';

function Breadcrumb({ items }) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link href={`/`} style={{ color: '#a7a098', fontSize: '18px' }}>Home</Link>
        </li>
        {items.map((item, index) => (
          <Fragment key={item + index}>
            <ChevronRightIcon />
            <li className="inline-flex items-center">
              <Link href={`/${item}`} style={{ fontSize: '18px' }}>{item}</Link>
            </li>
          </Fragment>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
