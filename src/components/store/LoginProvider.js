import { useEffect, useReducer } from 'react';

import LoginContext from './LoginContext';

const defaultValue = { isLoggedIn: false, userData: {} };

const loginReducer = (state, action) => {
  if (action.type === 'LOGIN') {
    return { userData: action.item, isLoggedIn: true };
  }

  if (action.type === 'LOGOUT') {
    return { userData: {}, isLoggedIn: false };
  }
  return defaultValue;
};

const LoginProvider = (props) => {
  const [state, dispatch] = useReducer(loginReducer, defaultValue);

  const getUserDataHandler = (data, login) => {
    dispatch({ type: 'LOGIN', item: data, loginState: login });
  };

  const logoutHandler = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const loginContext = {
    isLoggedIn: state.isLoggedIn,
    userData: state.userData,
    onGetData: getUserDataHandler,
    onLogout: logoutHandler,
  };

  return (
    <LoginContext.Provider value={loginContext}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
