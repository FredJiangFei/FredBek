import Link from 'next/link';
import Image from 'next/image';
import SearchIcon from '../icons/search';
import Button from '../ui/button';
import { useEffect, useState } from 'react';
import classes from './navbar.module.css';
import useSWR from 'swr';
import { fetcher } from '@/lib/utils';

const Navbar = () => {
  const [color, setColor] = useState('transparent');
  const topHeader = '60px';
  const { data, error } = useSWR('/api/categories', fetcher);
  
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 30) {
        setColor('#ffffff');
      } else {
        setColor('transparent');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <nav>
      <div
        className="bg-gray-300 flex container fixed items-center"
        style={{ height: topHeader }}
      >
        <span className="flex-1"></span>
        <div className="flex items-center">
          <input
            type="text"
            name="search"
            placeholder="Search"
            className="text-gray-800 w-36 h-10 border-0 rounded-full pl-4 
                focus:outline-0 focus:w-96 duration-500"
          />
          <div className="absolute right-4">
            <SearchIcon />
          </div>
        </div>
      </div>
      <div className={classes.slider}>
        <div
          className="flex items-center w-full fixed top-18"
          style={{
            backgroundColor: `${color}`,
            top: topHeader,
          }}
        >
          <Link href="/">
            <Image src="/logo.png" alt="site logo" width={128} height={77} />
          </Link>
          {data?.data?.length > 0 && (
            <ul className="flex space-x-8 flex-1 mx-4">
              {data?.data?.map((menu) => (
                <li>
                  <Link href={`/${menu.route}`}>{menu.title}</Link>

                  {menu?.children?.length > 0 && (
                    <ul className="flex space-x-8 flex-1 mx-4">
                      {menu?.children.map((c) => (
                        <li>
                          <Link href={`/${menu.route}/${c.route}`}>
                            {c.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}

          <Button>Contact Us</Button>
        </div>
        <h1 style={{ color: 'red' }}>
          Shape the world with creativity beyond steel
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
