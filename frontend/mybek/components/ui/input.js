import classes from './input.module.css';

function Input() {
  return (
    <div className="flex flex-col">
      <input className={classes.input} />
      <span className={classes.text}>Form helper text</span>
    </div>
  );
}

export default Input;
