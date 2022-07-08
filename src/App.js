import { Fragment, useState } from 'react';

import Header from './components/layout/Header/Header';
import Foods from './components/Foods/Foods';
import Cart from './components/Cart/Cart';
import CartProvider from './components/store/CartProvier';
import Login from './components/Auth/Login/Login';

function App() {
  const [cartShow, setCartShow] = useState(false);
  const [loginShow, setLoginShow] = useState(false);

  const cartShowHandler = () => {
    setCartShow(true);
  };

  const cartCloseHandler = () => {
    setCartShow(false);
  };

  const loginShowHandler = () => {
    setLoginShow(true);
  };

  const loginCloseHandler = () => {
    setLoginShow(false);
  };

  return (
    <CartProvider>
      {cartShow && <Cart onClose={cartCloseHandler} />}
      {loginShow && <Login onClose={loginCloseHandler} />}
      <Header onCartShow={cartShowHandler} onLoginShow={loginShowHandler} />
      <Foods />
    </CartProvider>
  );
}

export default App;
