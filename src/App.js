import { Fragment, useState } from 'react';

import Header from './components/layout/Header/Header';
import Foods from './components/Foods/Foods';
import Cart from './components/Cart/Cart';
import CartProvider from './components/store/CartProvier';

function App() {
  const [show, setShow] = useState(false);

  const cartShowHandler = () => {
    setShow(true);
  };

  const cartCloseHandler = () => {
    setShow(false);
  };

  return (
    <CartProvider>
      {show && <Cart onClose={cartCloseHandler} />}
      <Header onShow={cartShowHandler} />
      <Foods />
    </CartProvider>
  );
}

export default App;
