import { useEffect } from 'react';

import useSetValue from '../hooks/useSetValue';
import Modal from '../UI/Modal';
import Button from '../UI/Button';
import classes from './Form.module.css';

const Form = (props) => {
  const { val: enteredEmail, fnc: emailChangeHandler } = useSetValue();
  const { val: enteredPassword, fnc: passwordChangeHandler } = useSetValue();
  const { val: enteredAdress, fnc: adressChangeHandler } = useSetValue();
  const { val: enteredName, fnc: nameChangeHandler } = useSetValue();
  const { val: enteredApart, fnc: apartChangeHandler } = useSetValue();
  const { val: enteredPhone, fnc: phoneChangeHandler } = useSetValue();

  const regiSubmitHandler = (e) => {
    e.preventDefault();

    const userData = {
      email: enteredEmail,
      password: enteredPassword,
      adress: enteredAdress,
      apart: enteredApart,
      name: enteredName,
      phone: enteredPhone,
    };

    props.onGetData(userData);
  };

  return (
    <Modal className={classes.modal} onClick={props.onClose}>
      <h2>회원가입</h2>
      <form className={classes.form} onSubmit={regiSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'></label>
          <input
            type='text'
            placeholder='이메일'
            value={enteredEmail}
            onChange={emailChangeHandler}
          />
          <label htmlFor='password'></label>
          <input
            type='password'
            placeholder='비밀번호'
            value={enteredPassword}
            onChange={passwordChangeHandler}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='adress'></label>
          <input
            type='text'
            placeholder='주소'
            value={enteredAdress}
            onChange={adressChangeHandler}
          />
          <label htmlFor='detailAd'></label>
          <input
            type='text'
            placeholder='호수'
            value={enteredApart}
            onChange={apartChangeHandler}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='name'></label>
          <input
            type='text'
            placeholder='이름'
            value={enteredName}
            onChange={nameChangeHandler}
          />
          <label htmlFor='phone'></label>
          <input
            type='text'
            placeholder='전화번호'
            value={enteredPhone}
            onChange={phoneChangeHandler}
          />
        </div>
        <div className={classes.action}>
          <Button type='submit'>회원가입</Button>
        </div>
      </form>
    </Modal>
  );
};

export default Form;
