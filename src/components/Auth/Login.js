import { useEffect, useState, useContext } from 'react';

import LoginContext from '../store/LoginContext';
import Modal from '../UI/Modal';
import Button from '../UI/Button';
import useSetValue from '../hooks/use-setValue';
import classes from './Login.module.css';
import Success from './Success';
import HasError from './HasError';

const notEmpty = (enteredValue) => enteredValue.trim() !== '';
const emailValidator = (enteredValue) =>
  enteredValue.includes('@') && notEmpty(enteredValue);
const passwordValidator = (enteredValue) =>
  enteredValue.length > 5 && notEmpty(enteredValue);

const Login = (props) => {
  const loginCtx = useContext(LoginContext);

  const {
    val: enteredEmail,
    chgFnc: emailChangeHandler,
    blurFnc: emailBlurHandler,
    err: emailErr,
    valid: emailValid,
  } = useSetValue(emailValidator);
  const {
    val: enteredPassword,
    chgFnc: passwordChangeHandler,
    blurFnc: passwordBlurHandler,
    err: passwordErr,
    valid: passwordValid,
  } = useSetValue(passwordValidator);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const [loginUser, setLoginUser] = useState([]);
  const [hasError, setHasError] = useState();
  const [loginFail, setLoginFail] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const res = await fetch(
        `https://react-demo-5a12a-default-rtdb.firebaseio.com/users.json`
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

  const loginHandler = (e) => {
    e.preventDefault();

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
        setLoginUser({ ...userData[idKey], key: idKey });
      } else {
        setLoginFail(true);
      }
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      loginCtx.onGetData(loginUser);
    }
  }, [loginUser]);

  if (isLoggedIn) {
    return (
      <Success
        title={'????????? ??????'}
        content={`${loginUser.name} ??? ???????????????`}
        onClose={props.onClose}
      />
    );
  }

  if (hasError) {
    return <HasError onClose={props.onClose} err={hasError} />;
  }

  const formValid = emailValid && passwordValid;
  const emailClasses = `${emailErr && classes.invalid}`;
  const passwordClasses = `${passwordErr && classes.invalid}`;

  return (
    <Modal onClick={props.onClose} className={classes.login}>
      <h2>????????? ?????????</h2>
      <form className={classes.form} onSubmit={loginHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor='email'></label>
            <input
              className={emailClasses}
              type='text'
              placeholder='?????????'
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailErr && <p>????????? ???????????? ??????????????????.</p>}
          </div>
          <div className={classes.control}>
            <label htmlFor='password'></label>
            <input
              className={passwordClasses}
              type='password'
              placeholder='????????????'
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
            />
            {passwordErr && <p>????????? ??????????????? ??????????????????.</p>}
          </div>
        </div>
        {loginFail && (
          <p className={classes.fail}>????????? ?????? ??????????????? ???????????????.</p>
        )}
        <div className={classes.actions}>
          <p onClick={props.onShowRegi}>???????????? ???????????????????</p>
          <Button type='submit' disabled={!formValid}>
            ?????????
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default Login;
