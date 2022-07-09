import Modal from '../UI/Modal';
import classes from './Success.module.css';

const Success = (props) => {
  return (
    <Modal onClick={props.onClose} className={classes.modal}>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </Modal>
  );
};

export default Success;
