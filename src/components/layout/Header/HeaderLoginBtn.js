import Button from '../../UI/Button';
import classes from './HeaderLoginBtn.module.css';

const HeaderLoginBtn = () => {
  return (
    <Button className={classes.button}>
      <span>로그인</span>
    </Button>
  );
};

export default HeaderLoginBtn;
