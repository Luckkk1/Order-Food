import { useContext } from 'react';

import CartContext from '../store/CartContext';
import LoginContext from '../store/LoginContext';
import Button from '../UI/Button';
import Modal from '../UI/Modal';
import CartFinishList from './CartFinishList';
import classes from './CartOrderFinish.module.css';
const CartOrderFinish = (props) => {
  const loginCtx = useContext(LoginContext);

  const orderData = props.userData;
  // 새로운 컴포넌트 만들어서 넣어주면 댐
  const orderList = orderData.map((e) => (
    <CartFinishList
      name={e.name}
      price={e.price}
      amount={e.amount}
      key={e.id}
    />
  ));

  const address = loginCtx.userData.address;

  return (
    <Modal onClick={props.onClose} className={classes.modal}>
      <h2>주문 상세 결과</h2>
      <p>주문접수가 완료 되었습니다.</p>
      <div className={classes.order}>
        <div className={classes.orderList}>{orderList}</div>
        <div className={classes.totalAmount}>
          <div className={classes.address}>
            <h2>주소</h2>
            <p>{address}</p>
          </div>
          <div>
            <div className={classes.amount}>
              <h2>총 합계</h2>
              <h2>20000원</h2>
            </div>
            <div className={classes.actions}>
              <Button onClick={props.onClose}>나가기</Button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CartOrderFinish;
