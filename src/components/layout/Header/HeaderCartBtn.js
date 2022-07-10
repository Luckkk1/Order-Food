import { useContext, useEffect, useState } from 'react';

import Button from '../../UI/Button';
import CartContext from '../../store/CartContext';
import classes from './HeaderCartBtn.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const HeaderCartBtn = (props) => {
  const [highrightBtn, setHighrightBtn] = useState(false);
  const cartCtx = useContext(CartContext);

  const { cartList } = cartCtx;

  const count = cartList.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  const buttonClasses = `${classes.button} ${highrightBtn && classes.bump}`;

  useEffect(() => {
    setHighrightBtn(true);
    const timer = setTimeout(() => {
      setHighrightBtn(false);
    }, 300);
    // return () => clearTimeout(timer);
  }, [cartList]);

  return (
    <Button className={buttonClasses} onClick={props.onClick}>
      <span>
        <FontAwesomeIcon icon={faCartShopping} />
      </span>
      <span>장바구니</span>
      <span className={classes.count}>{count}</span>
    </Button>
  );
};

export default HeaderCartBtn;
