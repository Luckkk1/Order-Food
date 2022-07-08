import { Fragment } from 'react';

import HeaderCartBtn from './HeaderCartBtn';
import Button from '../../UI/Button';
import classes from './Header.module.css';
import mainImg from '../../../assets/mainHeader.jpg';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>미정</h1>
        <div className={classes.actions}>
          <HeaderCartBtn onClick={props.onCartShow} />
          <Button className={classes.button} onClick={props.onLoginShow}>
            <span>로그인</span>
          </Button>
        </div>
      </header>
      <div className={classes.mainImg}>
        <img src={mainImg} alt='Header' />
      </div>
    </Fragment>
  );
};

export default Header;
