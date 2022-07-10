import { Fragment, useContext, useState } from 'react';

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

  const sendFoodRequestHandler = () => {
    try {
      if (loginCtx.userData.name === undefined) {
        setNeedLogin(true);
        return;
      }
      setIsLoading(true);
      const res = fetch(
        'https://react-demo-5a12a-default-rtdb.firebaseio.com/Orders.json',
        {
          method: 'POST',
          body: JSON.stringify({
            user: loginCtx.userData,
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
  return (
    <Fragment>
      <Modal onClick={props.onClose}>
        {!hasError && !needLogin && !orderFinish && (
          <>
            <CartList />
            <CartSubmit
              onClose={props.onClose}
              onOrder={sendFoodRequestHandler}
            />
          </>
        )}
        {hasError && <p>에러가 발생했습니다.</p>}
        {isLoading && <p>로딩중 입니다...</p>}
        {needLogin && <p>로그인 먼저 해주세요.</p>}
        {orderFinish && <h2>주문이 완료되었습니다.</h2>}
      </Modal>
    </Fragment>
  );
};

export default Cart;
