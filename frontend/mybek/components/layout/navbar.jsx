import Link from 'next/link';
import Image from 'next/image';
import Menu from '../icons/menu';
import SearchIcon from '../icons/search';
import Button from '../ui/button';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [color, setColor] = useState('transparent');

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff');
      } else {
        setColor('transparent');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <nav>
      <div className="bg-gray-300 p-4 flex container fixed">
        <span className="flex-1"></span>
        <input
          type="text"
          name="search"
          placeholder="Search"
          className="px-5 py-3 text-gray-800 w-0 border-0 rounded-full 
                focus:outline-0 focus:w-96 duration-500"
        />
        <SearchIcon />
      </div>
      <div
        style={{
          backgroundImage: 'url(/slider.jpeg)',
          backgroundSize: 'cover',
          height: '500px',
        }}
      >
        <div
          className="flex items-center fixed top-20 w-full"
          style={{
            backgroundColor: `${color}`,
          }}
        >
          <Link href="/">
            <Image src="/logo.png" alt="site logo" width={128} height={77} />
          </Link>
          <ul className="flex md:flex-row space-x-8 flex-1 mx-4">
            <li>
              <Link href="/Products">Products & Applications</Link>
            </li>
            <li>
              <Link href="/Sustainability">Sustainability</Link>
            </li>
          </ul>
          <Button>Contact Us</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
