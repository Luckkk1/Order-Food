import { Fragment, useContext, useState } from 'react';

import CartOrderFinish from './CartOrderFinish';
import CartContext from '../store/CartContext';
import LoginContext from '../store/LoginContext';
import CartList from './CartList';
import CartSubmit from './CartSubmit';
import Modal from '../UI/Modal';

const Cart = (props) => {
  const loginCtx = useContext(LoginContext);
  const cartCtx = useContext(CartContext);
  const [hasError, setHasError] = useState();
  const [needLogin, setNeedLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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

      cartCtx.onReset();
      setIsLoading(false);
      setOrderFinish(true);
    } catch (err) {
      setHasError(err.message);
      setIsLoading(false);
    }
  };

  const requsetOrderDataHandler = async () => {
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

    setLastOrderData(loginUserOrderList[loginUserOrderList.length - 1]);
  };

  return (
    <Fragment>
      <Modal onClick={props.onClose}>
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
        {hasError && <p>에러가 발생했습니다.</p>}
        {isLoading && <p>로딩중 입니다...</p>}
        {needLogin && <p>로그인 먼저 해주세요.</p>}
      </Modal>
      {orderFinish && (
        <CartOrderFinish onClose={props.onClose} userData={lastOrderData} />
      )}
    </Fragment>
  );
};

export default Cart;
