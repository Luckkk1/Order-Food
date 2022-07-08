import Modal from '../UI/Modal';
import Button from '../UI/Button';
import classes from './Login.module.css';

const Login = (props) => {
  return (
    <Modal onClick={props.onClose} className={classes.login}>
      <h2>아이디 로그인</h2>
      <form className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor='email'></label>
            <input type='text' placeholder='이메일' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'></label>
            <input type='password' placeholder='비밀번호' />
          </div>
        </div>
        <div className={classes.actions}>
          <p onClick={props.onShowRegi}>회원가입 하시겠습니까?</p>
          <Button>로그인</Button>
        </div>
      </form>
    </Modal>
  );
};

export default Login;
