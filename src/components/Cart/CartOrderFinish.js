import { useContext } from 'react';
import CartContext from '../store/CartContext';

import LoginContext from '../store/LoginContext';
import Button from '../UI/Button';
import Modal from '../UI/Modal';
import CartFinishList from './CartFinishList';
import classes from './CartOrderFinish.module.css';
const CartOrderFinish = (props) => {
  const loginCtx = useContext(LoginContext);
  const cartCtx = useContext(CartContext);

  const orderData = props.userData;
  const orderList = orderData.map((e) => {
    return (
      <CartFinishList
        name={e.name}
        price={e.price}
        amount={e.amount}
        key={e.id}
      />
    );
  });
  const loading = props.loading;
  const address = loginCtx.userData.address;
  const price = cartCtx.totalAmount;

  const finishOrderHandler = () => {
    props.onClose();
    cartCtx.onReset();
  };

  return (
    <Modal onClick={finishOrderHandler} className={classes.modal}>
      <h2>주문 상세 결과</h2>
      <p>주문접수가 완료 되었습니다.</p>
      <div className={classes.order}>
        {loading ? (
          <p>로딩 중입니다...</p>
        ) : (
          <div className={classes.orderList}>{orderList}</div>
        )}
        <div className={classes.totalAmount}>
          <div className={classes.address}>
            <h2>주소</h2>
            <p>{address}</p>
          </div>
          <div>
            <div className={classes.amount}>
              <h2>총 합계</h2>
              <h2>{price}원</h2>
            </div>
            <div className={classes.actions}>
              <Button onClick={finishOrderHandler}>나가기</Button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CartOrderFinish;
