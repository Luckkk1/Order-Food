import Modal from '../UI/Modal';
import classes from './HasError.module.css';

const HasError = (props) => {
  return (
    <Modal onClick={props.onClose} className={classes.modal}>
      <h2>에러</h2>
      <p>{props.err}</p>
    </Modal>
  );
};

export default HasError;
