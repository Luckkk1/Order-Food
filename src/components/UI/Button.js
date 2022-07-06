import classes from './Button.module.css';

const Button = (props) => {
  const style = `${classes.btn} ${props.className}`;
  return <button className={style}>{props.children}</button>;
};

export default Button;
