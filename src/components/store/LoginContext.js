import React from 'react';

const LoginContext = React.createContext(() => {
  return {
    isLoggedIn: false,
    userData: {},
  };
});

export default LoginContext;
