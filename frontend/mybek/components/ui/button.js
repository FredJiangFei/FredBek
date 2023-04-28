import classes from './button.module.css';

function Button({ children, onClick, variant = 'primary', size= 'md' }) {
  return (
    <button className={`${classes.btn} ${classes[variant]} ${classes[size]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
