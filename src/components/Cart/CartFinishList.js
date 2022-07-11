import classes from './CartFinishList.module.css';

const CartFinishList = (props) => {
  return (
    <li className={classes.list}>
      <div className={classes.food}>
        <h2>{props.name}</h2>
        <p>{props.price}</p>
      </div>
      <div className={classes.amount}>{props.amount}</div>
    </li>
  );
};

export default CartFinishList;
