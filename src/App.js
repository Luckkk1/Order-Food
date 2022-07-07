import { Fragment, useState } from 'react';

import Header from './components/layout/Header/Header';
import Foods from './components/Foods/Foods';
import Cart from './components/Cart/Cart';

function App() {
  const [show, setShow] = useState(false);

  const cartShowHandler = () => {
    setShow(true);
  };

  const cartCloseHandler = () => {
    setShow(false);
  };

  return (
    <Fragment>
      {show && <Cart onClose={cartCloseHandler} />}
      <Header onShow={cartShowHandler} />
      <Foods />
    </Fragment>
  );
}

export default App;
