import { Fragment, useContext } from 'react';

import LoginContext from '../../store/LoginContext';
import HeaderCartBtn from './HeaderCartBtn';
import Button from '../../UI/Button';
import classes from './Header.module.css';
import mainImg from '../../../assets/mainHeader.jpg';

const Header = (props) => {
  const loginCtx = useContext(LoginContext);
  const { isLoggedIn, onLogout } = loginCtx;

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>미정</h1>
        <div className={classes.actions}>
          <HeaderCartBtn onClick={props.onCartShow} />
          {!isLoggedIn && (
            <Button className={classes.button} onClick={props.onAuthShow}>
              <span>로그인</span>
            </Button>
          )}
          {isLoggedIn && (
            <Button className={classes.button} onClick={onLogout}>
              <span>로그아웃</span>
            </Button>
          )}
        </div>
      </header>
      <div className={classes.mainImg}>
        <img src={mainImg} alt='Header' />
      </div>
    </Fragment>
  );
};

export default Header;
