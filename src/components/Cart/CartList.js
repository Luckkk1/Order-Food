import { useContext } from 'react';

import CartContext from '../store/CartContext';
import CartItem from './CartItem';
import classes from './CartList.module.css';

const CartList = () => {
  const cartCtx = useContext(CartContext);

  const { cartList } = cartCtx;

  const foods = cartList.map((food) => (
    <CartItem
      name={food.name}
      price={food.price}
      amount={food.amount}
      id={food.id}
      key={food.id}
    />
  ));
  return <ul className={classes.ul}>{foods}</ul>;
};

export default CartList;
