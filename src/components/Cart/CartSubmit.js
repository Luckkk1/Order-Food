import Button from '../UI/Button';
import classes from './CartSubmit.module.css';

const CartForm = (props) => {
  return (
    <div className={classes.submit}>
      <div className={classes.description}>
        <h2>총 금액</h2>
        <p>60000원</p>
      </div>
      <div className={classes.actions}>
        <Button>주문하기</Button>
        <Button onClick={props.onClose}>나가기</Button>
      </div>
    </div>
  );
};

export default CartForm;
