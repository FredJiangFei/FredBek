import Link from 'next/link';
import Image from 'next/image';
import SearchIcon from '../icons/search';
import Button from '../ui/button';
import { useEffect, useState } from 'react';
import classes from './navbar.module.css';
import useSWR from 'swr';
import { fetcher } from '@/lib/utils';

const TopMenus = ({ categories }) => {
  const [scroll, setScroll] = useState();
  useEffect(() => {
    const changeScroll = () => {
      if (window.scrollY >= 30) {
        setScroll(classes.menuContainerScrolled);
      } else {
        setScroll('');
      }
    };
    window.addEventListener('scroll', changeScroll);
  }, []);

  return (
    <>
      <div className={`${classes.menuContainer} ${scroll}`}>
        <Link href="/">
          <Image src="/logo.png" alt="site logo" width={128} height={77} />
        </Link>
        {categories?.length > 0 && (
          <ul className="flex space-x-8 flex-1 mx-4 relative h-full">
            <div className={classes.menu}>
              {categories?.map((c) => (
                <li key={c.title} className={classes.services}>
                  <Link href={`/${c.route}`}>{c.title}</Link>
                  <SubMenus categories={c.children} base={`/${c.route}`} />
                </li>
              ))}
            </div>
          </ul>
        )}
        <Button>Contact Us</Button>
      </div>
    </>
  );
};

const SubMenus = ({ categories, base }) => {
  return (
    <>
      {categories?.length > 0 && (
        <ul className={classes.dropdown}>
          {categories?.map((c) => (
            <li key={c.title}>
              <Link href={`${base}/${c.route}`}>{c.title}</Link>
              {/* <div>
                <SubMenus categories={c.children} base={`${base}/${c.route}`} />
              </div> */}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

const HedaderSearch = () => {
  return (
    <div className="bg-gray-300 flex h-14 w-full px-4">
      <span className="flex-1"></span>
      <div className="flex items-center relative">
        <input
          type="text"
          name="search"
          placeholder="Search"
          className="text-gray-500 w-36 h-10 border-0 rounded-full pl-4
        focus:outline-0 focus:w-96 duration-500"
        />
        <div className="absolute right-4">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const { data } = useSWR('/api/categories', fetcher);
  return (
    // <nav className={classes.navbar}>
    //   <div className={classes.slider}>
    //   <div className={classes.logo}>MUO</div>
    //   <ul className={classes.navLinks}>
    //     <input type="checkbox" id="checkbox_toggle" />
    //     <label for="checkbox_toggle" className={classes.hamburger}>
    //       &#9776;
    //     </label>

    //     <div className={classes.menu}>
    //       <li>
    //         <a href="/">Home</a>
    //       </li>
    //       <li>
    //         <a href="/">About</a>
    //       </li>
    //       <li className={classes.services}>
    //         <a href="/">Services</a>
    //         <ul className={classes.dropdown}>
    //           <li>
    //             <a href="/">Dropdown 1 </a>
    //           </li>
    //           <li>
    //             <a href="/">Dropdown 2</a>
    //           </li>
    //           <li>
    //             <a href="/">Dropdown 2</a>
    //           </li>
    //           <li>
    //             <a href="/">Dropdown 3</a>
    //           </li>
    //           <li>
    //             <a href="/">Dropdown 4</a>
    //           </li>
    //         </ul>
    //       </li>
    //       <li className={classes.services}>
    //         <a href="/">Pricing</a>
    //         <ul className={classes.dropdown}>
    //           <li>
    //             <a href="/">Pricing 1 </a>
    //           </li>
    //           <li>
    //             <a href="/">Pricing 2</a>
    //           </li>
    //           <li>
    //             <a href="/">Pricing 2</a>
    //           </li>
    //           <li>
    //             <a href="/">Pricing 3</a>
    //           </li>
    //           <li>
    //             <a href="/">Pricing 4</a>
    //           </li>
    //         </ul>
    //       </li>
    //       <li>
    //         <a href="/">Contact</a>
    //       </li>
    //     </div>
    //   </ul>
    //   </div>
    // </nav>
    <nav>
      <div className={classes.slider}>
        <div className="fixed w-full">
          <HedaderSearch />
          <TopMenus categories={data?.data} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
