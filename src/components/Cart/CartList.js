import CartItem from './CartItem';
import classes from './CartList.module.css';

const CartList = () => {
  return (
    <ul className={classes.ul}>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </ul>
  );
};

export default CartList;
