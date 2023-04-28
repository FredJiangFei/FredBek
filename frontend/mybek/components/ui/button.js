import classes from './button.module.css';

function Button({ children, onClick, variant = 'primary' }) {
  return (
    <button className={`${classes.btn} ${classes[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
