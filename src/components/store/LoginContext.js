import React from 'react';

const LoginContext = React.createContext(() => {
  return {
    isLoggedIn: false,
    userData: {},
    onGetData: (data) => {},
    onLogout: () => {},
  };
});

export default LoginContext;
