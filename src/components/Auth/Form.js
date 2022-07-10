// import { useState } from 'react';

import useSetValue from '../hooks/use-setValue';
import Modal from '../UI/Modal';
import Button from '../UI/Button';
import classes from './Form.module.css';

const notEmpty = (enteredValue) => enteredValue.trim() !== '';
const emailValidator = (enteredValue) =>
  enteredValue.includes('@') && notEmpty(enteredValue);
const passwordValidator = (enteredValue) =>
  enteredValue.length > 5 && notEmpty(enteredValue);
const phoneValidator = (enteredValue) =>
  !Number.isNaN(+enteredValue) && notEmpty(enteredValue);

// 매개변수 해결
const Form = (props) => {
  const {
    val: enteredEmail,
    chgFnc: emailChangeHandler,
    blurFnc: emailBlurHandler,
    valid: emailValid,
    err: emailErr,
  } = useSetValue(emailValidator);
  const {
    val: enteredPassword,
    chgFnc: passwordChangeHandler,
    blurFnc: passwordBlurHandler,
    valid: passwordValid,
    err: passwordErr,
  } = useSetValue(passwordValidator);
  const {
    val: enteredAddress,
    chgFnc: addressChangeHandler,
    blurFnc: addressBlurHandler,
    valid: addressValid,
    err: addressErr,
  } = useSetValue(notEmpty);
  const {
    val: enteredName,
    chgFnc: nameChangeHandler,
    blurFnc: nameBlurHandler,
    valid: nameValid,
    err: nameErr,
  } = useSetValue(notEmpty);
  const {
    val: enteredApart,
    chgFnc: apartChangeHandler,
    blurFnc: apartBlurHandler,
    valid: apartValid,
    err: apartErr,
  } = useSetValue(notEmpty);
  const {
    val: enteredPhone,
    chgFnc: phoneChangeHandler,
    blurFnc: phoneBlurHandler,
    valid: phoneValid,
    err: phoneErr,
  } = useSetValue(phoneValidator);

  let formIsValid = false;

  if (
    emailValid &&
    passwordValid &&
    addressValid &&
    apartValid &&
    nameValid &&
    phoneValid
  ) {
    formIsValid = true;
  }

  const regiSubmitHandler = (e) => {
    e.preventDefault();

    const userData = {
      email: enteredEmail,
      password: enteredPassword,
      address: enteredAddress,
      apart: enteredApart,
      name: enteredName,
      phone: enteredPhone,
    };

    props.onGetData(userData);
  };

  const emailClasses = `${emailErr && classes.invalid}`;
  const passwordClasses = `${passwordErr && classes.invalid}`;
  const addressClasses = `${addressErr && classes.invalid}`;
  const apartClasses = `${apartErr && classes.invalid}`;
  const nameClasses = `${nameErr && classes.invalid}`;
  const phoneClasses = `${phoneErr && classes.invalid}`;

  return (
    <Modal className={classes.modal} onClick={props.onClose}>
      <h2>회원가입</h2>
      <form className={classes.form} onSubmit={regiSubmitHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor='email'></label>
            <input
              className={emailClasses}
              type='text'
              placeholder='이메일'
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailErr && <p>이메일 형식에 맞게 작성해주세요.</p>}
          </div>
          <div className={classes.control}>
            <label htmlFor='password'></label>
            <input
              className={passwordClasses}
              type='password'
              placeholder='비밀번호'
              value={enteredPassword}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
            />
            {passwordErr && <p>비밀번호는 5자 이상으로 입력해주세요.</p>}
          </div>
          <div className={classes.control}>
            <div className={classes.adress}>
              <label htmlFor='adress'></label>
              <input
                className={addressClasses}
                type='text'
                placeholder='주소'
                value={enteredAddress}
                onChange={addressChangeHandler}
                onBlur={addressBlurHandler}
              />
              {addressErr && <p>주소를 입력해주세요.</p>}
            </div>
            <div className={classes.apart}>
              <label htmlFor='detailAd'></label>
              <input
                className={apartClasses}
                type='text'
                placeholder='호수'
                value={enteredApart}
                onChange={apartChangeHandler}
                onBlur={apartBlurHandler}
              />
              {apartErr && <p>호수를 입력해주세요.</p>}
            </div>
          </div>
          <div className={classes.control}>
            <label htmlFor='name'></label>
            <input
              className={nameClasses}
              type='text'
              placeholder='이름'
              value={enteredName}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />
            {nameErr && <p>이름을 입력해주세요.</p>}
          </div>
          <div className={classes.control}>
            <label htmlFor='phone'></label>
            <input
              className={phoneClasses}
              type='text'
              placeholder='전화번호'
              value={enteredPhone}
              onChange={phoneChangeHandler}
              onBlur={phoneBlurHandler}
            />
            {phoneErr && <p>숫자만 입력해주세요</p>}
          </div>
        </div>
        <div className={classes.action}>
          <Button type='submit' disabled={!formIsValid}>
            회원가입
          </Button>
        </div>
      </form>
      <p className={classes.warn}>*실제로 사용하는 정보를 입력하지마세요!</p>
    </Modal>
  );
};

export default Form;
