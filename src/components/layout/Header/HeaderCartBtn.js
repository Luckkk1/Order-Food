import Button from '../../UI/Button';
import classes from './HeaderCartBtn.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const HeaderCartBtn = () => {
  return (
    <Button className={classes.button}>
      <span>
        <FontAwesomeIcon icon={faCartShopping} />
      </span>
      <span>장바구니</span>
      <span className={classes.count}>10</span>
    </Button>
  );
};

export default HeaderCartBtn;
