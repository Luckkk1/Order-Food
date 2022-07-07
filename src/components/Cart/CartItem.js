import Button from '../UI/Button';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  return (
    <li className={classes.li}>
      <div className={classes.description}>
        <h2>{props.name}</h2>
        <div className={classes.price}>{props.price}</div>
      </div>
      <div className={classes.amountAndActions}>
        <div className={classes.amount}>{props.amount}개</div>
        <div className={classes.actions}>
          <Button>+</Button>
          <Button>-</Button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
