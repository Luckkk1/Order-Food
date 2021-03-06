import { Fragment, useContext, useState } from 'react';

import CartOrderFinish from './CartOrderFinish';
import CartContext from '../store/CartContext';
import LoginContext from '../store/LoginContext';
import CartList from './CartList';
import CartSubmit from './CartSubmit';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
  const loginCtx = useContext(LoginContext);
  const cartCtx = useContext(CartContext);
  const [hasError, setHasError] = useState();
  const [needLogin, setNeedLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [finishLoading, setFinishLoading] = useState(false);
  const [orderFinish, setOrderFinish] = useState(false);
  const [lastOrderData, setLastOrderData] = useState([]);

  const userKey = loginCtx.userData.key;

  const sendFoodRequestHandler = () => {
    try {
      if (loginCtx.userData.name === undefined) {
        setNeedLogin(true);
        return;
      }
      setIsLoading(true);
      const res = fetch(
        'https://react-demo-5a12a-default-rtdb.firebaseio.com/orders.json',
        {
          method: 'POST',
          body: JSON.stringify({
            key: userKey,
            order: cartCtx.cartList,
            total: cartCtx.totalAmount,
          }),
        }
      );

      setIsLoading(false);
      setOrderFinish(true);
    } catch (err) {
      setHasError(err.message);
      setIsLoading(false);
    }
  };

  const requsetOrderDataHandler = async () => {
    setFinishLoading(true);
    const res = await fetch(
      'https://react-demo-5a12a-default-rtdb.firebaseio.com/orders.json'
    );
    const data = await res.json();

    const loginUserOrderList = [];

    for (let key in data) {
      if (data[key].key === userKey) {
        loginUserOrderList.push(data[key].order);
      }
    }
    setLastOrderData(() => loginUserOrderList[loginUserOrderList.length - 1]);
    setFinishLoading(false);
  };

  return (
    <Fragment>
      <Modal onClick={props.onClose} className={classes.modal}>
        {!hasError && !needLogin && !orderFinish && (
          <>
            <CartList />
            <CartSubmit
              onClose={props.onClose}
              onSubmit={sendFoodRequestHandler}
              onFetch={requsetOrderDataHandler}
            />
          </>
        )}
        {hasError && <p>????????? ??????????????????.</p>}
        {isLoading && <p>????????? ?????????...</p>}
        {needLogin && <p>????????? ?????? ????????????.</p>}
      </Modal>
      {orderFinish && (
        <CartOrderFinish
          onClose={props.onClose}
          userData={lastOrderData}
          loading={finishLoading}
        />
      )}
    </Fragment>
  );
};

export default Cart;
