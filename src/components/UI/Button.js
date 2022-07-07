import classes from './Button.module.css';

const Button = (props) => {
  const style = `${classes.btn} ${props.className}`;
  return (
    <button
      className={style}
      onClick={props.onClick}
      type={props.type || 'BUTTON'}
    >
      {props.children}
    </button>
  );
};

export default Button;
