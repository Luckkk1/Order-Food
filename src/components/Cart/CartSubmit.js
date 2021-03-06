import { useContext } from 'react';

import CartContext from '../store/CartContext';
import Button from '../UI/Button';
import classes from './CartSubmit.module.css';

const CartForm = (props) => {
  const cartCtx = useContext(CartContext);

  const { totalAmount } = cartCtx;

  const validOrder = cartCtx.cartList.length > 0;

  const orderFoodHandler = () => {
    props.onSubmit();
    props.onFetch();
  };

  return (
    <div className={classes.submit}>
      <div className={classes.description}>
        <h2>총 금액</h2>
        <p>{totalAmount}원</p>
      </div>
      <div className={classes.actions}>
        {validOrder && <Button onClick={orderFoodHandler}>주문하기</Button>}
        <Button onClick={props.onClose}>나가기</Button>
      </div>
    </div>
  );
};

export default CartForm;
