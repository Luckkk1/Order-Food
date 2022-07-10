import { Fragment, useState } from 'react';

import Header from './components/layout/Header/Header';
import Foods from './components/Foods/Foods';
import Cart from './components/Cart/Cart';
import CartProvider from './components/store/CartProvier';
import Auth from './components/Auth/Auth';
import LoginProvider from './components/store/LoginProvider';

function App() {
  const [cartShow, setCartShow] = useState(false);
  const [authShow, setAuthShow] = useState(false);

  const cartShowHandler = () => {
    setCartShow(true);
  };

  const cartCloseHandler = () => {
    setCartShow(false);
  };

  const authShowHandler = () => {
    setAuthShow(true);
  };

  const authCloseHandler = () => {
    setAuthShow(false);
  };

  return (
    <CartProvider>
      {cartShow && <Cart onClose={cartCloseHandler} />}
      <LoginProvider>
        {authShow && <Auth onClose={authCloseHandler} />}
        <Header onCartShow={cartShowHandler} onAuthShow={authShowHandler} />
      </LoginProvider>
      <Foods />
    </CartProvider>
  );
}

export default App;
