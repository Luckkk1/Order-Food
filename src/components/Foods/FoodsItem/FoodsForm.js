import { useRef } from 'react';

import Button from '../../UI/Button';
import classes from './FoodsForm.module.css';

const FoodsForm = (props) => {
  const inputRef = useRef();
  const formSubmitHanlder = (e) => {
    e.preventDefault();
    let amount = inputRef.current.value;

    props.onAddToCart(amount);

    inputRef.current.value = 1;
  };

  return (
    <form onSubmit={formSubmitHanlder}>
      <div className={classes.controls}>
        <label htmlFor='amount'>Amount</label>
        <input
          type='number'
          min='1'
          max='5'
          step='1'
          defaultValue='1'
          ref={inputRef}
        />
      </div>
      <div className={classes.actions}>
        <Button type='submit'>+ 구매하기</Button>
      </div>
    </form>
  );
};

export default FoodsForm;
