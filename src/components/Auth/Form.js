import Modal from '../UI/Modal';
import Button from '../UI/Button';
import classes from './Form.module.css';

const Form = (props) => {
  const regiSubmitHandler = (e) => {
    e.preventDefault();

    props.onClose();
  };

  return (
    <Modal className={classes.modal} onClick={props.onClose}>
      <h2>회원가입</h2>
      <form className={classes.form} onSubmit={regiSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'></label>
          <input type='text' placeholder='이메일' />
          <label htmlFor='password'></label>
          <input type='password' placeholder='비밀번호' />
        </div>
        <div className={classes.control}>
          <label htmlFor='adress'></label>
          <input type='text' placeholder='주소' />
          <label htmlFor='detailAd'></label>
          <input type='text' placeholder='호수' />
        </div>
        <div className={classes.control}>
          <label htmlFor='name'></label>
          <input type='text' placeholder='이름' />
          <label htmlFor='phone'></label>
          <input type='text' placeholder='전화번호' />
        </div>
        <div className={classes.action}>
          <Button type='submit'>회원가입</Button>
        </div>
      </form>
    </Modal>
  );
};

export default Form;
