import CartList from './CartList';
import CartSubmit from './CartSubmit';
import Modal from '../UI/Modal';

const Cart = (props) => {
  return (
    <Modal onClick={props.onClose}>
      <CartList />
      <CartSubmit onClose={props.onClose} />
    </Modal>
  );
};

export default Cart;
