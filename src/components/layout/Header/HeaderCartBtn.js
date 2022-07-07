import { useContext } from 'react';

import Button from '../../UI/Button';
import CartContext from '../../store/CartContext';
import classes from './HeaderCartBtn.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const HeaderCartBtn = (props) => {
  const cartCtx = useContext(CartContext);

  const { cartList } = cartCtx;

  const count = cartList.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  return (
    <Button className={classes.button} onClick={props.onClick}>
      <span>
        <FontAwesomeIcon icon={faCartShopping} />
      </span>
      <span>장바구니</span>
      <span className={classes.count}>{count}</span>
    </Button>
  );
};

export default HeaderCartBtn;
