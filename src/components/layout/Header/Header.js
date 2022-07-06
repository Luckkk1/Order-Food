import classes from './Header.module.css';
import HeaderCartBtn from './HeaderCartBtn';
import HeaderLoginBtn from './HeaderLoginBtn';

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>미정</h1>
      <div className={classes.actions}>
        <HeaderCartBtn />
        <HeaderLoginBtn />
      </div>
    </header>
  );
};

export default Header;
