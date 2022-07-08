import Modal from '../UI/Modal';
import classes from './Success.module.css';

const Success = (props) => {
  return (
    <Modal onClick={props.onClose} className={classes.modal}>
      <h2>회원가입 완료</h2>
      <p>가입을 축하드립니다.</p>
    </Modal>
  );
};

export default Success;
