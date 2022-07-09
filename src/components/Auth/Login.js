import { useEffect, useState } from 'react';

import Modal from '../UI/Modal';
import Button from '../UI/Button';
import useSetValue from '../hooks/useSetValue';
import classes from './Login.module.css';
import Success from './Success';
import HasError from './HasError';

const Login = (props) => {
  const { val: enteredEmail, fnc: emailChangeHandler } = useSetValue();
  const { val: enteredPassword, fnc: passwordChangeHandler } = useSetValue();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const [loginUser, setLoginUser] = useState([]);
  const [hasError, setHasError] = useState();
  const [loginFail, setLoginFail] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const res = await fetch(
        'https://react-demo-5a12a-default-rtdb.firebaseio.com/users.json'
      );

      if (!res.ok) {
        throw new Error('err has occured');
      }

      const data = await res.json();

      setUserData(data);
    };

    fetchUserData().catch((err) => {
      setHasError(err.message);
    });
  }, []);

  const loginHandler = () => {
    let idKey;
    let pKey;

    for (let key in userData) {
      if (userData[key].email === enteredEmail) {
        idKey = key;
      }
      if (userData[key].password === enteredPassword) {
        pKey = key;
      }

      if (idKey === pKey && idKey && pKey) {
        setIsLoggedIn(true);
        setLoginUser({ ...userData[idKey] });
      } else {
        setLoginFail(true);
      }
    }
  };

  if (isLoggedIn) {
    return (
      <Success
        title={'로그인 성공'}
        content={`${loginUser.name} 님 반갑습니다`}
        onClose={props.onClose}
      />
    );
  }

  if (hasError) {
    return <HasError onClose={props.onClose} err={hasError} />;
  }

  return (
    <Modal onClick={props.onClose} className={classes.login}>
      <h2>아이디 로그인</h2>
      <form className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor='email'></label>
            <input
              type='text'
              placeholder='이메일'
              onChange={emailChangeHandler}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'></label>
            <input
              type='password'
              placeholder='비밀번호'
              onChange={passwordChangeHandler}
            />
          </div>
        </div>
        {loginFail && (
          <p className={classes.fail}>아이디 혹은 비밀번호가 틀렸습니다.</p>
        )}
        <div className={classes.actions}>
          <p onClick={props.onShowRegi}>회원가입 하시겠습니까?</p>
          <Button onClick={loginHandler}>로그인</Button>
        </div>
      </form>
    </Modal>
  );
};

export default Login;
