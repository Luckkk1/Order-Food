import { useEffect, useState } from 'react';

import LoginContext from './LoginContext';

const LoginProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const [loginUser, setLoginUser] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const res = await fetch(
        'https://react-demo-5a12a-default-rtdb.firebaseio.com/users.json'
      );

      const data = await res.json();

      setUserData(data);
    };

    fetchUserData();
  }, []);

  const loginHandler = () => {
    let idKey;
    let pKey;

    for (let key in userData) {
      if (userData[key].email === enteredEmail) {
        idKey = key;
      }
      if (userData[key].password === enteredPassword) {
        pKey = key;
      }

      if (idKey === pKey && idKey && pKey) {
        setIsLoggedIn(true);
        setLoginUser({ ...userData[idKey] });
      }
    }
  };

  return <LoginContext.Provider>{props.children}</LoginContext.Provider>;
};

export default LoginProvider;
