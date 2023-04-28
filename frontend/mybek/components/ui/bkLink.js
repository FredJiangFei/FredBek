import Link from 'next/link';
import classes from './bkLink.module.css';

function BkLink({ children, href, size = 'md' }) {
  return (
    <Link href={href} className={`${classes.link} ${classes[size]}`}>
      {children}
    </Link>
  );
}

export default BkLink;
