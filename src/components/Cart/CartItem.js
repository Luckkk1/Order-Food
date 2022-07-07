import Button from '../UI/Button';
import classes from './CartItem.module.css';

const CartItem = () => {
  return (
    <li className={classes.li}>
      <div className={classes.description}>
        <h2>Name</h2>
        <div className={classes.price}>price</div>
      </div>
      <div className={classes.amountAndActions}>
        <div className={classes.amount}>3개</div>
        <div className={classes.actions}>
          <Button>+</Button>
          <Button>-</Button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
