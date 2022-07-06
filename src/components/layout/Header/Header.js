import { Fragment } from 'react';

import HeaderCartBtn from './HeaderCartBtn';
import HeaderLoginBtn from './HeaderLoginBtn';
import classes from './Header.module.css';
import mainImg from '../../../assets/mainHeader.jpg';

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>미정</h1>
        <div className={classes.actions}>
          <HeaderCartBtn />
          <HeaderLoginBtn />
        </div>
      </header>
      <div className={classes.mainImg}>
        <img src={mainImg} alt='Header' />
      </div>
    </Fragment>
  );
};

export default Header;
