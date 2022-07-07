import Button from '../../UI/Button';
import classes from './FoodsForm.module.css';

const FoodsForm = () => {
  return (
    <form>
      <div className={classes.controls}>
        <label htmlFor='amount'>Amount</label>
        <input type='number' min='1' max='5' step='1' defaultValue='1' />
      </div>
      <div className={classes.actions}>
        <Button>+ 구매하기</Button>
      </div>
    </form>
  );
};

export default FoodsForm;
