import { useContext } from 'react';

import CartContext from '../store/CartContext';
import Button from '../UI/Button';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addAmountHandler = () => {
    cartCtx.onAdd({
      id: props.id,
      amount: 1,
      price: props.price,
    });
  };

  const removeAmountHandler = () => {
    cartCtx.onRemove(props.id);
  };

  return (
    <li className={classes.li}>
      <div className={classes.description}>
        <h2>{props.name}</h2>
        <div className={classes.price}>{props.price}</div>
      </div>
      <div className={classes.amountAndActions}>
        <div className={classes.amount}>{props.amount}개</div>
        <div className={classes.actions}>
          <Button onClick={addAmountHandler}>+</Button>
          <Button onClick={removeAmountHandler}>-</Button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
