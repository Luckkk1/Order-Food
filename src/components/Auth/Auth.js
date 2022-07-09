import { useState } from 'react';

import Login from './Login';
import Form from './Form';
import HasError from './HasError';
import Success from './Success';

const Auth = (props) => {
  const [showLogin, setShowLogin] = useState(true);
  const [showRegi, setShowRegi] = useState(false);
  const [hasError, setHasError] = useState();
  const [isSucceed, setIsSucceed] = useState(false);

  const regiShowHandler = () => {
    setShowLogin(false);
    setShowRegi(true);
  };

  const sendRegiHandler = async (data) => {
    try {
      const res = fetch(
        'https://react-demo-5a12a-default-rtdb.firebaseio.com/users.json',
        {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setIsSucceed(true);
      setShowRegi(false);
    } catch (err) {
      setHasError(err.message);
    }
  };

  if (showLogin) {
    return <Login onShowRegi={regiShowHandler} onClose={props.onClose} />;
  }

  if (showRegi) {
    return <Form onClose={props.onClose} onGetData={sendRegiHandler} />;
  }

  if (hasError) {
    return <HasError onClose={props.onClose} err={hasError} />;
  }

  if (isSucceed) {
    return (
      <Success
        onClose={props.onClose}
        title={'회원가입 완료'}
        content={'회원가입을 축하드립니다.'}
      />
    );
  }
};

export default Auth;
