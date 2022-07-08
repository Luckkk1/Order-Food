import { Fragment, useState } from 'react';

import Login from './Login';
import Form from './Form';

const Auth = (props) => {
  const [showLogin, setShowLogin] = useState(true);
  const [showRegi, setShowRegi] = useState(false);

  const regiShowHandler = () => {
    setShowLogin(false);
    setShowRegi(true);
  };

  const loginState = showLogin && !showRegi;

  return (
    <Fragment>
      {loginState && (
        <Login onShowRegi={regiShowHandler} onClose={props.onClose} />
      )}
      {!loginState && <Form onClose={props.onClose} />}
    </Fragment>
  );
};

export default Auth;
